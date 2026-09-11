import { Link, useRouterState } from "@tanstack/react-router";
import { BrandIdentity } from "@/components/site/Nav";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { company, footerNav, socialLinks } from "@/data/siteContent";

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/") return null;

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm px-5 py-12 md:px-10 mt-12">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Left Section - Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <BrandIdentity theme="dark" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {company.description}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.label === "Instagram" ? Instagram :
                            social.label === "LinkedIn" ? Linkedin :
                            social.label === "WhatsApp" ? MessageCircle : Instagram;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerNav.product.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <a
                  href="https://www.getsetai.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
