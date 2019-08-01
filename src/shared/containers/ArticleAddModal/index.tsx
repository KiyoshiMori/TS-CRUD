import React, { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    Grid,
    Container,
    Typography,
    withStyles,
    WithStyles,
    Divider,
    Button,
    ButtonGroup,
} from '@material-ui/core';
import Input from 'components/Input';

const styles = () => ({
    dialogContainer: {
        padding: 20,
    },
    divider: {
        margin: '5px 0 15px',
    },
    buttons: {
        display: 'flex',
        alignItems: 'flex-end',
    },
});

type toggleModalType = Dispatch<SetStateAction<boolean>>;

interface Props extends WithStyles<typeof styles> {
    isModalOpen: boolean;
    toggleModal: toggleModalType;
    onSaveClick?: () => void;
}

export default withStyles(styles)(
    ({ isModalOpen, toggleModal, onSaveClick, classes }: Props): React.ReactElement => {
        return (
            <div>
                <Dialog fullWidth maxWidth="md" open={isModalOpen} onClose={(): void => toggleModal(!isModalOpen)}>
                    <Container maxWidth="lg" fixed>
                        <Grid component="div" container className={classes.dialogContainer}>
                            <Grid item xs={12}>
                                <Typography>Write an article</Typography>
                                <Divider classes={{ root: classes.divider }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Input label="Title" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Img</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Input label="Description" rows={5} rowsMax={10} multiline />
                            </Grid>
                            <Grid item xs={6} className={classes.buttons}>
                                <ButtonGroup component="div">
                                    <Button
                                        onClick={(): void => {
                                            toggleModal(false);
                                            if (typeof onSaveClick === 'function') {
                                                onSaveClick();
                                            }
                                        }}
                                    >
                                        Save
                                    </Button>
                                    <Button onClick={(): void => toggleModal(false)}>Cancel</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Container>
                </Dialog>
            </div>
        );
    },
);
