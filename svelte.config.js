import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: 'app.html' }),
		alias: {
			'$routes': './src/routes',
			'$routes/*': './src/routes/*',
		},
	}
};

export default config;
