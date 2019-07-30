import { makeExecutableSchema } from 'graphql-tools';
const merge = require('lodash.merge');

import rootDef from './Root/def';
import rootResolver from './Root/resolver';

export const typeDefs = [rootDef];
export const resolvers = merge({}, rootResolver);

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});