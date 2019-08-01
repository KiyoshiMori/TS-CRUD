import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class Article {
    @Field(type => ID)
    id: number;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    createdOn?: Date;

    @Field()
    createdAt?: Date;
}
