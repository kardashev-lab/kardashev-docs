import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    default: "kardashev docs — free Python & JS client for US ISO energy data",
    template: "%s - kardashev docs",
  },
  description:
    "Documentation for kardashev: a free, open-source Python and JavaScript/TypeScript client for US ISO/RTO energy data (CAISO, ERCOT, MISO, NYISO, ISO-NE, SPP, PJM). No API key required. A free alternative to gridstatus.",
  metadataBase: new URL("https://docs.kardashevlabs.org"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "kardashev",
  description:
    "Free, open-source Python and JavaScript/TypeScript client for US ISO/RTO energy data — CAISO, ERCOT, MISO, NYISO, ISO-NE, SPP, and PJM. No API key required.",
  codeRepository: "https://github.com/kardashev-lab/kardashev-py",
  programmingLanguage: ["Python", "TypeScript", "JavaScript"],
  license: "https://opensource.org/licenses/MIT",
  url: "https://docs.kardashevlabs.org",
  author: {
    "@type": "Organization",
    name: "Kardashev Labs",
    url: "https://kardashevlabs.org",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  keywords:
    "energy data, ISO, RTO, CAISO, ERCOT, MISO, NYISO, ISO-NE, SPP, PJM, LMP, wholesale electricity, gridstatus alternative, power grid data API",
};

const navbar = (
  <Navbar
    logo={<b>kardashev</b>}
    projectLink="https://github.com/kardashev-lab/kardashev-py"
  />
);

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © Kardashev Labs
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Layout
          banner={
            <Banner storageKey="kardashev-docs-v2">
              kardashev is available for Python (PyPI) and JavaScript/TypeScript (npm)
            </Banner>
          }
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/kardashev-lab/kardashev-docs/blob/main"
          footer={footer}
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
