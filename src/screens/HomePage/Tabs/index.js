import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlightForm from '../FlightForm';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        paddingTop: "20px",
        // position: 'absolute',
        // bottom: "0",
        backgroundColor: theme.palette.background.paper,
        textAlign: "center",
    },
}));

const Tabss = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Flight" icon={<PhoneIcon />} {...a11yProps(0)} />
                    <Tab label="Schedules" icon={<FavoriteIcon />} {...a11yProps(1)} />
                    <Tab label="My Bookings" icon={<PersonPinIcon />} {...a11yProps(2)} />
                    <Tab label="Flight Status" icon={<HelpIcon />} {...a11yProps(3)} />
                    <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
                    {/* <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
                    <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <FlightForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
        </div>
    );
}

export default Tabss;
