import fs, { Stats } from 'fs';
import path from 'path';

const resolvers: string[] = [];

fs.readdirSync(path.resolve(__dirname, './')).map((item): void => {
    const resolverPath = __dirname + `/${item}/resolver.ts`;

    if (fs.existsSync(resolverPath)) {
        const resolver = require(resolverPath);

        resolvers.push(resolver);
    }
});

export default resolvers;
