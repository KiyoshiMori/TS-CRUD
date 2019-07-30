import { makeExecutableSchema, ITypeDefinitions, IResolvers } from 'graphql-tools';
const merge = require('lodash.merge');

import rootDef from './Root/def';
import rootResolver from './Root/resolver';

export const typeDefs: Array<ITypeDefinitions> = [rootDef];
export const resolvers: Array<IResolvers> = merge({}, rootResolver);

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});