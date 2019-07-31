import React from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    Typography,
    withStyles,
    WithStyles,
} from '@material-ui/core';

import Article from 'lib/graphql/schemas/article/def';

const styles = () => ({
    cardContainer: {
        display: 'flex',
    },
    card: {
        width: 300,
    },
    cardContent: {
        height: 150,
        overflow: 'hidden',
    },
    media: {
        height: 100,
        backgroundSize: 'contain',
    },
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
];

interface Props extends WithStyles<typeof styles> {
    articles: [Article];
}

export default withStyles(styles)(
    (props: Props): React.ReactElement => {
        const { classes } = props;

        return (
            <Container>
                <div className={classes.head}>
                    <Button variant="contained" color="primary">Add an article</Button>
                </div>
                <Grid component="div" container justify="center">
                    {mockArticles.map(
                        (article: Article): React.ReactElement => (
                            <Grid component="div" item xs={4} justify="center" className={classes.cardContainer}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        title="mockMedia"
                                        image="/static/img/mock.svg"
                                        component="div"
                                    />
                                    <CardContent classes={{ root: classes.cardContent }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {article.title}
                                        </Typography>
                                        <Typography component="p" color="textSecondary">
                                            {article.description && article.description.length > 120
                                                ? `${article.description.slice(0, 120)}...`
                                                : article.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn more
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ),
                    )}
                </Grid>
            </Container>
        );
    },
);
