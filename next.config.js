/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	compiler: {
		styledComponents: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	distDir: 'build',
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	webpack: (config,) => {
		config.optimization.minimize = false;
		config.module.rules.push({
			test: /\.html$/,
			use: 'html-loader'
		});

		return config;
	}
};

module.exports = nextConfig;
