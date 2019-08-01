import React, { Dispatch, SetStateAction, useState } from 'react';
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

interface InputValues {
    title: string;
    description: string;
}

interface Props extends WithStyles<typeof styles> {
    isModalOpen: boolean;
    toggleModal: toggleModalType;
    onSaveClick?: ({ variables }: { variables: InputValues }) => void;
}

export default withStyles(styles)(
    ({ isModalOpen, toggleModal, onSaveClick, classes }: Props): React.ReactElement => {
        const inputsInitialState = { title: '', description: '' };
        const [inputValues, onChange] = useState<InputValues>(inputsInitialState);
        const { title, description } = inputValues;

        const onInputTyping = (value: string, name?: 'title' | 'description' | string): void => {
            if (name) {
                onChange({
                    ...inputValues,
                    [name]: value,
                });
            }
        };

        const onSave = (): void => {
            console.log({ inputValues });
            onChange(inputsInitialState);
        };

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
                                <Input name="title" value={title} onTyping={onInputTyping} label="Title" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Img</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    name="description"
                                    value={description}
                                    onTyping={onInputTyping}
                                    label="Description"
                                    rows={5}
                                    rowsMax={10}
                                    multiline
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.buttons}>
                                <ButtonGroup component="div">
                                    <Button
                                        onClick={(): void => {
                                            toggleModal(false);
                                            console.log({ onSaveClick });
                                            if (typeof onSaveClick === 'function') {
                                                onSaveClick({ variables: { title, description } });
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
