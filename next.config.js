/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({ test: /\.mdx$/, use: ['raw-loader'] });

        return config;
    },
    compiler: {
        styledComponents: true
    },
    reactStrictMode: true
};

module.exports = nextConfig;
