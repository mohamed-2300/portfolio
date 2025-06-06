import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // You can still add other Next.js config options here if needed
  reactStrictMode: true,
};

export default withSentryConfig(
  {
    ...nextConfig,
    eslint: {
      ignoreDuringBuilds: true,
    },
  },
  {
    // Sentry configuration
    org: "orcadyn",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
