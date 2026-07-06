# kardashev-docs

Documentation site for [`kardashev`](https://github.com/kardashev-lab/kardashev-py), the free Python client for US ISO/RTO energy data.

Live at [docs.kardashevlabs.org](https://docs.kardashevlabs.org).

Built with [Nextra](https://nextra.site) (Next.js + MDX).

## Local development

```bash
npm install
npm run dev
```

Content lives in `content/*.mdx`. Sidebar order is set in `content/_meta.global.ts`.

## Deploy

Deployed on Railway via auto-detected Next.js build (Railpack). No custom Dockerfile needed.
