import { Resolver, Query, Mutation, InputType, Arg, Field, ID } from 'type-graphql';
import db from '../../../db';

import Article from './type';

class ArticleService {
    public async createArticle({ id, title, description, createdOn }: Article): Promise<Article> {
        return db.Articles.create({ id, title, description, createdOn });
    }

    public async findArticle(id: number): Promise<Article> {
        return db.Articles.findOne({ where: { id } });
    }

    public async findArticles(): Promise<Article[]> {
        return db.Articles.findAll({ raw: true, order: [['createdAt', 'Desc']] }).then(
            (articles: Article[]): Article[] => {
                console.log({ articles });
                return articles;
            },
        );
    }
}

@InputType({ description: 'add new article' })
class AddNewArticle implements Partial<Article> {
    @Field(type => ID, { nullable: true, description: 'autoincrement' })
    id: number;

    @Field({ nullable: false })
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    createdOn?: Date;
}

@Resolver(of => Article)
export default class ArticleResolver {
    constructor(private articleService: ArticleService) {
        this.articleService = new ArticleService();
    }

    @Query(returns => [Article], { description: 'returns all articles' })
    async getArticles(): Promise<Article[]> {
        const res = await this.articleService.findArticles();
        console.log({ res });

        return res;
    }

    @Query(returns => Article, { description: 'return article by id' })
    async article(@Arg('id') id: number): Promise<Article> {
        return await this.articleService.findArticle(id);
    }

    @Mutation(returns => Article, { description: 'create new article and return it' })
    async createArticle(@Arg('data') newArticle: AddNewArticle): Promise<Article> {
        console.log({ newArticle });
        return await this.articleService.createArticle(newArticle);
    }
}
