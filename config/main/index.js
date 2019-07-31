import clientEntry from './entry.client';
import serverEntry from './entry.server';
import clientPlugins from './plugins.client';
import output from './output';
import resolve from './resolve';
import rules from './resolve/rules';

module.exports = {
    client: {
        entry: clientEntry,
        output: output({
            name: 'client',
            path: 'dist',
            opts: {
                publicPath: '/',
            },
        }),
        resolve,
        rules,
        plugins: clientPlugins,
    },
    server: {
        entry: serverEntry,
        output: output({
            name: 'server',
            path: 'build',
            opts: {
                libraryTarget: 'commonjs2',
            },
        }),
    },
};
