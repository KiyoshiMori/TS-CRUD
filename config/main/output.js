import * as pathModule from 'path';

export default ({ path, name, opts }) => ({
	filename: `[name]-${name}-bundle.js`,
	chunkFilename: '[name].js',
	path: pathModule.resolve(__dirname, `../../${path}`),
	...opts,
});
