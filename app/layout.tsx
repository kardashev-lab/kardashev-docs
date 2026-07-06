import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    default: "kardashev docs",
    template: "%s - kardashev docs",
  },
  description:
    "Documentation for kardashev: a free, open-source Python client for US ISO/RTO energy data.",
  metadataBase: new URL("https://docs.kardashevlabs.org"),
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
      <Head />
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
