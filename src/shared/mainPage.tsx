import * as React from "react";
import { Query } from 'react-apollo';

import { getRecipe } from 'lib/graphql/queries/recipe';
import RecipeType from 'lib/graphql/schemas/recipe/RecipeDef';

export default (): React.ReactElement => (
    <div>
        Test from shared2
        <br />
        <Query query={getRecipe} variables={{ id: 5 }}>
            {({ data, loading }: { data: { recipe: RecipeType }; loading: boolean }) => {
                if (loading) return <span>Loading...</span>;
                if (!data) return <span>Error: {JSON.stringify(data)}</span>;

                return data.recipe.title + '/' + data.recipe.id;
            }}
        </Query>
    </div>
);