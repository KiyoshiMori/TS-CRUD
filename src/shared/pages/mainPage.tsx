import React, { useState, Dispatch, SetStateAction } from 'react';
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
    Theme,
} from '@material-ui/core';
import ArticleAddModal from 'containers/ArticleAddModal';

import Article from 'lib/graphql/schemas/article/def';

const styles = (theme: Theme) => ({
    cardsContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
    cardContainer: {
        display: 'flex',
    },
    card: {
        width: 300,
        marginBottom: 100,
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
    {
        id: 4,
        createdOn: new Date(),
        title: 'test4',
        description: 'Lorem ipconsectetur adipisicing elit. Doloremque quaerat temporibus voluptatum',
    },
];

interface Props extends WithStyles<typeof styles> {
    articles: [Article];
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
                <Grid component="div" container className={classes.cardsContainer}>
                    {mockArticles.map(
                        (article: Article): React.ReactElement => (
                            <Grid component="div" item md={4} sm={6} className={classes.cardContainer}>
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
