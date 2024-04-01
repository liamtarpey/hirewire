/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [
            {
                source: '/accessibility-statement',
                destination: '/legal/accessibility-statement',
                permanent: true,
            },
            {
                source: '/cookie-policy',
                destination: '/legal/cookie-policy',
                permanent: true,
            },
            {
                source: '/copyright-notice',
                destination: '/legal/copyright-notice',
                permanent: true,
            },
            {
                source: '/disclaimer',
                destination: '/legal/disclaimer',
                permanent: true,
            },
            {
                source: '/privacy-policy-and-data-protection',
                destination: '/legal/privacy-policy-and-data-protection',
                permanent: true,
            },
            {
                source: '/refund-policy',
                destination: '/legal/refund-policy',
                permanent: true,
            },
            {
                source: '/terms-and-conditions',
                destination: '/legal/terms-and-conditions',
                permanent: true,
            },
            {
                source: '/terms-of-service',
                destination: '/legal/terms-of-service',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
