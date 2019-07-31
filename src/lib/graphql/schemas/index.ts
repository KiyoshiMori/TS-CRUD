import fs, { Stats } from 'fs';
import path from 'path';

import { ResolverObject } from 'type-graphql';
const resolvers: ResolverObject[] = [];

fs.readdirSync(path.resolve(__dirname, './')).map((item): void => {
    const resolverPath = __dirname + `/${item}/resolver.ts`;

    if (fs.existsSync(resolverPath)) {
        const resolver = require(resolverPath);

        resolvers.push(resolver);
    }
});

export default resolvers;
