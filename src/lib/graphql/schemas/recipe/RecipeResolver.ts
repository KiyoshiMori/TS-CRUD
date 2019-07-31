import {Resolver, Query, Arg} from "type-graphql";

import Recipe from './RecipeDef';

class RecipeService {
    findById(id: number) {
        if (id === 0) {
            return undefined;
        }

        return {
            title: 'test',
            id,
        };
    }
}

class RecipeNotFoundError extends Error {
    constructor(id: number) {
        super();
        this.message = `ERROR: ${id} not found`;
        Error.captureStackTrace(this, RecipeNotFoundError);
    }
}

@Resolver(Recipe)
export default class RecipeResolver {
    constructor(private recipeService: RecipeService) {
        this.recipeService = new RecipeService();
    }

    @Query(returns => Recipe)
    async recipe(@Arg('id') id: number) {
        console.log(this);
        const recipe = await this.recipeService.findById(id);
        if (recipe === undefined) {
            throw new RecipeNotFoundError(id);
        }

        return recipe;
    }
}