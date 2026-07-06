import path from "node:path";
import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({});

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
};

export default withNextra(nextConfig);
