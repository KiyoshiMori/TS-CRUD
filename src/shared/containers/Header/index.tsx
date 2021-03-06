import React from 'react';
import { AppBar, Toolbar, Button, Grid, withStyles, WithStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

const styles = (): StyleRules => ({
    root: {
        flexGrow: 1,
        marginBottom: 50,
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
                                <Button color="inherit" variant="outlined">
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    },
);
