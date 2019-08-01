import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    WithStyles,
    Theme,
    Typography,
    withStyles,
} from '@material-ui/core';

import Article from 'lib/graphql/schemas/article/type';

const styles = (theme: Theme) => ({
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
});

interface Props extends WithStyles<typeof styles>, Article {}

export default withStyles(styles)(
    ({ classes, title, description }: Props): JSX.Element => {
        return (
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
                            {title}
                        </Typography>
                        <Typography component="p" color="textSecondary">
                            {description && description.length > 120 ? `${description.slice(0, 120)}...` : description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn more
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    },
);
