import React from 'react';
import { AppBar, Toolbar, Button, Grid, withStyles, WithStyles } from '@material-ui/core';

const styles = () => ({
    root: {
        flexGrow: 1,
    },
});

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(
    ({ classes }: Props): React.ReactElement => {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container justify="flex-end" alignItems="center" spacing={2}>
                            <Grid item xs={2}>
                                <Button color="inherit">Login</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    },
);
