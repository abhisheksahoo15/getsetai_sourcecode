# GetSetAI — Vercel Deployment

This repository contains two deployable applications:

- `frontend/` — TanStack Start frontend
- `backend/` — Express + MongoDB API

## 1. Deploy backend

Create a Vercel project from this repository and set **Root Directory** to `backend`.
The included `backend/vercel.json` exposes the Express app through Vercel.

Add these Vercel Environment Variables:

- `MONGODB_URI` — MongoDB Atlas connection string
- `JWT_SECRET` — long random production secret
- `GOOGLE_CLIENT_ID` — Google OAuth client ID
- `FRONTEND_URL` — deployed frontend URL, e.g. `https://your-frontend.vercel.app`

After deployment, test:

`https://YOUR-BACKEND.vercel.app/`

## 2. Deploy frontend

Create a second Vercel project from the same repository and set **Root Directory** to `frontend`.
Use the included `frontend/vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "tanstack-start"
}
```

If your editor flags `$schema`, it is safe to remove that line.

Add these Vercel Environment Variables:

- `VITE_API_URL` — deployed backend URL, e.g. `https://your-backend.vercel.app`
- `VITE_GOOGLE_CLIENT_ID` — same Google OAuth client ID

## 3. Google OAuth

Add the deployed frontend domain to the Google OAuth client's authorized JavaScript origins / redirect configuration as required by the Google sign-in flow.

## 4. Profile image uploads

The existing upload endpoint is preserved. On Vercel, uploaded files use `/tmp`, which is temporary and not durable across deployments/invocations. For persistent profile images, move this endpoint to Cloudinary, S3, Vercel Blob, or another object-storage provider.

## Important

Do not commit `.env` files or production secrets. Use Vercel Environment Variables for production credentials.
