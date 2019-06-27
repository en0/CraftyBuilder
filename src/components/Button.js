import React from 'react';
import Button from '@material-ui/core/Button';

const OutlinedButtons = ({value, onClick}) => (
    <Button variant="outlined" color="secondary" onClick={onClick}>
        {value}
    </Button>
);

export default OutlinedButtons;