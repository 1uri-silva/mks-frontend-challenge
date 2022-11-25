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
		styledComponents: true,
	},
	images: {
		domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
	},
};

module.exports = nextConfig
