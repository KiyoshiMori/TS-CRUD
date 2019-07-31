import { Resolver, Query, Arg } from 'type-graphql';

import Article from './ArticleDef';

@Resolver(of => Article)
export default class RecipeResolver {
    constructor() {}

    @Query(returns => Article)
    async article(@Arg('id') id: number): Promise<Article> {
        return {
            id: '1',
            title: 'test',
            createdOn: new Date(),
        };
    }
}
