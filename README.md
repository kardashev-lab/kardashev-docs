# kardashev-docs

Documentation site for [`kardashev`](https://github.com/kardashev-lab/kardashev-py), the free Python and JavaScript/TypeScript client for US ISO/RTO energy data (CAISO, ERCOT, MISO, NYISO, ISO-NE, PJM, SPP). No API key required.

Live at [docs.kardashevlabs.org](https://docs.kardashevlabs.org).

Built with [Nextra 4](https://nextra.site) (Next.js App Router + MDX).

## Pages

- Introduction (`content/index.mdx`)
- Quickstart
- Installation (pip and npm)
- Supported ISOs
- API Reference
- Examples
- Data Sources
- kardashev vs gridstatus (comparison)
- Changelog
- Roadmap

## Local development

```bash
npm install
npm run dev
```

Content lives in `content/*.mdx`. Sidebar order is set in `content/_meta.global.ts`. MDX pages are rendered via the catch-all route in `app/[[...mdxPath]]/page.tsx`.

## Deploy

Deployed on Railway via auto-detected Next.js build (Railpack). No custom Dockerfile needed.
