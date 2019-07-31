import React from 'react';
import { Input, InputLabel, withStyles, WithStyles } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';

const styles = () => ({
    input: {
        marginBottom: 15,
    },
});

interface Props extends WithStyles<typeof styles> {
    label?: string;
}

export default withStyles(styles)(
    (props: Props & InputProps): JSX.Element => {
        const { label, value, classes, ...rest } = props;

        return (
            <>
                {typeof label === 'string' && <InputLabel>{label}</InputLabel>}
                <Input classes={{ root: classes.input }} value={value} {...rest} />
            </>
        );
    },
);
