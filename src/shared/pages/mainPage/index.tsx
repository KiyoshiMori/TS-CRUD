import React, { useState, Dispatch, SetStateAction } from 'react';
import { Query, Mutation, MutationFn } from 'react-apollo';
import { DataProxy } from 'apollo-cache/src/types/DataProxy';
import { Container, Button, withStyles, WithStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

import ArticleAddModal from 'containers/ArticleAddModal';
import CardList from './components/CardList';

import Article from 'lib/graphql/schemas/article/type';
import { getArticles, createArticle } from 'lib/graphql/queries/articles';

const styles = (): StyleRules => ({
    head: {
        display: 'flex',
        marginBottom: 50,
        justifyContent: 'flex-end',
    },
});

interface Props extends WithStyles<typeof styles> {
    articles?: Article[];
}

interface ArticlesQueryData {
    getArticles?: Article[];
}

interface ArticlesMutationData {
    createArticle: Article;
}

export default withStyles(styles)(
    (props: Props): React.ReactElement => {
        const { classes } = props;
        const [isModalOpen, toggleModal] = useState<boolean>(false);

        return (
            <Container>
                <Mutation<ArticlesMutationData>
                    mutation={createArticle}
                    update={(cache: DataProxy, { data }): void => {
                        const cacheData = cache.readQuery<ArticlesQueryData>({
                            query: getArticles,
                        });

                        const articles = cacheData ? cacheData.getArticles : null;

                        const newArticle = data ? data.createArticle : null;

                        cache.writeQuery({
                            query: getArticles,
                            data: { getArticles: articles ? [newArticle, ...articles] : [newArticle] },
                        });
                    }}
                >
                    {(mutate: MutationFn, { loading }: { loading: boolean }): React.ReactElement => (
                        <ArticleAddModal isModalOpen={isModalOpen} toggleModal={toggleModal} onSaveClick={mutate} />
                    )}
                </Mutation>
                <div className={classes.head}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(): void => {
                            toggleModal(!isModalOpen);
                            return;
                        }}
                    >
                        Add an article
                    </Button>
                </div>
                <Query<ArticlesQueryData> query={getArticles}>
                    {({ data }): React.ReactElement => <CardList articles={data ? data.getArticles : null} />}
                </Query>
            </Container>
        );
    },
);
