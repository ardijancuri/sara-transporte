# Sara Transporte AG

Responsive React and Next.js website for Sara Transporte AG, built with the
vinext runtime for Cloudflare deployment.

## Included

- Homepage and all migrated routes from the former WordPress website
- Company, services, certifications, contact, and logistics detail pages
- Local copies of the relevant legacy images, partner marks, and certificate PDFs
- Responsive navigation, quote forms, subtle motion, and social-preview metadata

## Development

```bash
npm install
npm run dev
npm run build
npm test
```

## Netlify deployment

Netlify builds use the Vinext Nitro adapter rather than Netlify's standard
Next.js runtime. The required build command, publish directory, runtime preset,
and Next.js plugin opt-out are committed in `netlify.toml`.

```bash
npm run build:netlify
```

The build publishes static assets from `dist` and packages the application
server in `.netlify/functions-internal`.
