import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: ['./src/styles'],
    },
    images: {
        unoptimized: true,
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "localhost",
            },
        ],
    },
    reactCompiler: true,
};

export default nextConfig;
