import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const FlightForm = () => {
    const classes = useStyles();
    const [cityto, setCityto] = React.useState('');
    const [cityFrom, setCityFrom] = React.useState('');

    const handleChangeto = (event) => {
        setCityto(event.target.value);
    };
    const handleChangefrom = (event) => {
        setCityFrom(event.target.value);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">From: City</InputLabel>
                    <Select
                        style={{ width: 190 }}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={cityto}
                        onChange={handleChangeto}
                        label="From: City"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Karachi"}>Karachi</MenuItem>
                        <MenuItem value={"Lahore"}>Lahore</MenuItem>
                        <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
                        <MenuItem value={"BahawalPur"}>BahawalPur</MenuItem>
                        <MenuItem value={"Sakardu"}>Sakardu</MenuItem>
                        <MenuItem value={"Multan"}>Multan</MenuItem>
                        <MenuItem value={"Chitral"}>Chitral</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">To: City</InputLabel>
                    <Select
                        style={{ width: 190 }}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={cityFrom}
                        onChange={handleChangefrom}
                        label="To: City"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Karachi"}>Karachi</MenuItem>
                        <MenuItem value={"Lahore"}>Lahore</MenuItem>
                        <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
                        <MenuItem value={"BahawalPur"}>BahawalPur</MenuItem>
                        <MenuItem value={"Sakardu"}>Sakardu</MenuItem>
                        <MenuItem value={"Multan"}>Multan</MenuItem>
                        <MenuItem value={"Chitral"}>Chitral</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default FlightForm
