import React, { useState, Dispatch, SetStateAction } from 'react';
import { Query } from 'react-apollo';
import { Container, Button, withStyles, WithStyles, Theme } from '@material-ui/core';

import ArticleAddModal from 'containers/ArticleAddModal';
import CardList from './components/CardList';

import Article from 'lib/graphql/schemas/article/type';
import { getArticles } from 'lib/graphql/queries/articles';

const styles = (theme: Theme) => ({
    head: {
        display: 'flex',
        marginBottom: 50,
        justifyContent: 'flex-end',
    },
});

const mockArticles = [
    {
        id: 1,
        title: 'test1',
        createdOn: new Date(),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea molestias neque nesciunt officiis quo veritatis. Autem, blanditiis esse expedita illo minus nihil. Adipisci amet, architecto asperiores cum esse facere harum hic impedit ipsam, itaque laudantium obcaecati porro praesentium quas quia quidem ratione sunt tempora ut voluptatibus? Delectus dignissimos minima veritatis.',
    },
    {
        id: 2,
        title: 'test2',
        createdOn: new Date(),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, illo!',
    },
    {
        id: 3,
        createdOn: new Date(),
        title: 'test3',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quaerat temporibus voluptatum',
    },
    {
        id: 4,
        createdOn: new Date(),
        title: 'test4',
        description: 'Lorem ipconsectetur adipisicing elit. Doloremque quaerat temporibus voluptatum',
    },
];

interface Props extends WithStyles<typeof styles> {
    articles?: [Article];
}

export default withStyles(styles)(
    (props: Props): React.ReactElement => {
        const { classes } = props;
        const [isModalOpen, toggleModal] = useState<boolean>(false);

        return (
            <Container>
                <ArticleAddModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
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
                <Query query={getArticles}>
                    {({ data }: { data: { getArticles: Article[] } }): React.ReactElement => (
                        <CardList articles={data && data.getArticles} />
                    )}
                </Query>
            </Container>
        );
    },
);
