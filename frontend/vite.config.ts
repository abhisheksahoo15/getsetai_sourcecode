// Vercel-ready TanStack Start configuration.
// The Lovable config uses Cloudflare as Nitro's default target; on Vercel we
// explicitly switch Nitro to the Vercel preset so SSR routes are deployed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: process.env.VERCEL ? "vercel" : undefined,
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: {
      port: 5173,
      host: true,
    },
  },
});
