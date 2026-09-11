import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleSignInProps {
  className?: string;
  onSuccess?: () => void;
}

export function GoogleSignIn({ className = '', onSuccess }: GoogleSignInProps) {
  const { googleLogin, isLoading } = useAuth();
  const googleButtonRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Google Identity Services script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setScriptLoaded(true);
      initializeGoogleButton();
    };
    script.onerror = () => {
      setError('Failed to load Google Sign-In script');
      console.error('Failed to load Google Identity Services script');
    };
    document.head.appendChild(script);

    return () => {
      // Clean up script
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded && googleButtonRef.current) {
      initializeGoogleButton();
    }
  }, [scriptLoaded]);

  const initializeGoogleButton = () => {
    if (!window.google || !googleButtonRef.current) return;

    console.log('Initializing Google Sign-In button...');
    
    window.google.accounts.id.initialize({
      client_id: import.meta.env['VITE_GOOGLE_CLIENT_ID'] || '509974976339-bpan5hceh940oqgki7adq041nnv6gldc.apps.googleusercontent.com',
      callback: handleCredentialResponse,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googleButtonRef.current, {
      theme: 'outline',
      size: 'large',
      width: '100%',
      text: 'signin_with',
      shape: 'rectangular',
    });
  };

  const handleCredentialResponse = async (response: any) => {
    console.log('Google credential response received:', response);
    setError(null);
    
    try {
      const credential = response.credential;
      console.log('Calling googleLogin with credential...');
      
      await googleLogin(credential);
      console.log('Google login successful, calling onSuccess callback...');
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      setError(error.message || 'Google sign-in failed');
      
      // Log additional error details
      if (error.response) {
        console.error('Error response:', error.response);
      }
    }
  };

  const handleManualSignIn = () => {
    if (window.google) {
      window.google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed()) {
          console.error('Google sign-in popup not displayed');
          setError('Google sign-in popup not displayed');
        }
      });
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div ref={googleButtonRef} className="w-full" />
      {isLoading && (
        <div className="flex items-center justify-center gap-2 mt-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm text-muted-foreground">Signing in with Google...</span>
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 mt-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}