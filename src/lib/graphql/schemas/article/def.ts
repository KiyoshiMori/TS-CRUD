import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class Article {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    createdOn: Date;
}
