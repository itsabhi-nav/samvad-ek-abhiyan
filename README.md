# Samvad – Ek Abhiyaan

## Deployment URL

Set `SITE_URL` to the canonical origin of the deployment (scheme and domain only; do not include a path such as `/en`). This value is used to generate canonical links, social sharing metadata, `robots.txt`, and the sitemap.

```env
SITE_URL=https://www.samvad.codewizard.online
```

For local development, copy this value into `.env.local` and change it whenever needed. In the hosting dashboard, set `SITE_URL` to the public domain before building/deploying so canonical links and social previews use the right host.
