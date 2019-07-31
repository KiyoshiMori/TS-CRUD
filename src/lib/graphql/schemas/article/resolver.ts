import { Resolver, Query, Mutation, InputType, Arg, Field, ID } from 'type-graphql';
import db from '../../../db';

import Article from './def';

class ArticleService {
    public async createArticle({ id, title, description, createdOn }: Article): Promise<Article> {
        return db.Articles.create({ id, title, description, createdOn });
    }

    public async findArticle(id: number): Promise<Article> {
        return db.Articles.findOne({ where: { id } });
    }
}

@InputType({ description: 'add new article' })
class AddNewArticle implements Partial<Article> {
    @Field(type => ID, { nullable: true })
    id: number;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    createdOn: Date;
}

@Resolver(of => Article)
export default class ArticleResolver {
    constructor(private articleService: ArticleService) {
        this.articleService = new ArticleService();
    }

    @Query(returns => Article)
    async article(@Arg('id') id: number): Promise<Article> {
        return await this.articleService.findArticle(id);
    }

    @Mutation(returns => Article)
    async createArticle(@Arg('data') newArticle: AddNewArticle): Promise<Article> {
        console.log({ newArticle });
        return await this.articleService.createArticle(newArticle);
    }
}
