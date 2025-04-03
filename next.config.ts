import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	eslint: {
		ignoreDuringBuilds: true,
	},

	typescript: {
		// Set this to 'false' to disable TypeScript checking during build
		ignoreBuildErrors: true,
	  },
};

export default nextConfig;
