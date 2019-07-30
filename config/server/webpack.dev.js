import main from '../main';

const configuration = {
	mode: 'development',
	name: 'server',
	entry: main.server.entry,
	output: main.server.output,
	resolve: main.client.resolve,
	module: {
		rules: main.client.rules.devRules,
	},
	plugins: [],
	node: { fs: 'empty' },
};

module.exports = configuration;