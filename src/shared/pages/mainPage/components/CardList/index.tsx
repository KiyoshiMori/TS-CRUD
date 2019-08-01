import React from 'react';
import { Grid, Theme, withStyles, WithStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

import Article from 'lib/graphql/schemas/article/type';

import Card from './components/Card';

const styles = (theme: Theme): StyleRules => ({
    cardsContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
});

interface Props extends WithStyles<typeof styles> {
    articles?: Article[] | null;
}

export default withStyles(styles)(
    ({ articles, classes }: Props): JSX.Element => {
        return (
            <Grid component="div" container className={classes.cardsContainer}>
                {articles && articles.map((article: Article): React.ReactElement => <Card {...article} />)}
            </Grid>
        );
    },
);
