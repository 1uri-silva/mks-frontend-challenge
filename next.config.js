/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		fontLoaders: [
			{ loader: '@next/font/google', options: { subsets: ['latin'] } },
		],
	},
	compiler: {
		styledComponents: {
			ssr: true,
			displayName: true,
		},
	},
	images: {
		domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
	},
};

module.exports = nextConfig
