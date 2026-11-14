# Samvad – Ek Abhiyaan

## Deployment URL

Set `SITE_URL` to the canonical public URL of the deployment, with no trailing slash. This value is used to generate canonical links, social sharing metadata, `robots.txt`, and the sitemap.

```env
SITE_URL=https://samvadabhiyaan.com
```

For local development, the site falls back to the production URL unless `SITE_URL` is set in `.env.local`.
