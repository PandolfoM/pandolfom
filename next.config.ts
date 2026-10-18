import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, served from S3 + CloudFront by MJP Hub. The contact
  // form sends through MJP Hub's /api/emails/send, so there is no API here.
  output: "export",
  // Image optimization needs a server; images are served as-is.
  images: { unoptimized: true },
};

export default nextConfig;
