import React, { ChangeEvent, ReactEventHandler } from 'react';
import { Input, InputLabel, withStyles, WithStyles } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';

const styles = () => ({
    input: {
        marginBottom: 15,
    },
});

interface Props extends WithStyles<typeof styles> {
    label?: string;
    onTyping?: (value: string, name?: string) => void;
}

export default withStyles(styles)(
    (props: Props & InputProps): JSX.Element => {
        const { label, name, value, onTyping, classes, ...rest } = props;

        return (
            <>
                {typeof label === 'string' && <InputLabel>{label}</InputLabel>}
                <Input
                    classes={{ root: classes.input }}
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                        if (typeof onTyping === 'function') {
                            onTyping(e.target.value, name);
                        }
                    }}
                    {...rest}
                />
            </>
        );
    },
);
