import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, ''); // Extract repository name
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  assetPrefix, // Add prefix for assets
  basePath, // Add base path for routing
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
