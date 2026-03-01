import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
