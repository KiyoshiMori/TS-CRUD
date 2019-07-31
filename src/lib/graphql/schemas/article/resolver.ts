import { Resolver, Query, Arg } from 'type-graphql';

import Article from './def';

@Resolver(of => Article)
export default class ArticleResolver {
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
