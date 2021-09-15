import React from 'react'
import Header from '../../screens/HomePage/Header';
import FlightBanner from '../FlightBanner';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FlightDetail from './FlightDetail';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // display: "flex",
        // flexDirection: "row",
        // maxWidth: "50px"
        // gridAutoFlow: "row dense",
        gridColumnStart: "1",
        gridColumnEnd: "3",
    },
}));

const FlightDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            {/* <FlightBanner /> */}
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>           {
                flightDet.map((detail) => {
                    return (
                        <div className={classes.root}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <FlightDetail />
                                </Grid>
                            </Grid>
                        </div>
                    )
                })
            }
            </div>
            {/* <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <FlightDetail />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FlightDetail />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FlightDetail />
                    </Grid>
                </Grid>
            </div> */}
        </div>
    )
}

export default FlightDetails;


const flightDet = [
    {
        id: 1,
        flightName: "Boinzy786",
        AvailableSeats: [
            {
                bussines: [
                    {
                        id: 123,
                        availSeats: 3
                    }
                ]
            },
            {
                economy: [
                    {
                        id: 321,
                        availSeats: 4
                    }
                ]
            },
        ],
        airPlaneType: "Plane881",
        Stops: "Lahore"
    },
    {
        id: 2,
        flightName: "Yamal823",
        AvailableSeats: [
            {
                bussines: [
                    {
                        id: 82,
                        availSeats: 2
                    }
                ]
            },
            {
                economy: [
                    {
                        id: 432,
                        availSeats: 1
                    }
                ]
            },
        ],
        airPlaneType: "Meta2way",
        Stop: "Karachi"
    },
    {
        id: 3,
        flightName: "Contegris999",
        AvailableSeats: [
            {
                bussines: [
                    {
                        id: 32,
                        availSeats: 5
                    }
                ]
            },
            {
                economy: [
                    {
                        id: 990,
                        availSeats: 4
                    }
                ]
            },
        ],
        airPlaneType: "BetaSail78",
        Stop: "Islababad"
    },
    {
        id: 4,
        flightName: "Intellicon30",
        AvailableSeats: [
            {
                bussines: [
                    {
                        id: 21,
                        availSeats: 2
                    }
                ]
            },
            {
                economy: [
                    {
                        id: 90,
                        availSeats: 3
                    }
                ]
            },
        ],
        airPlaneType: "Malik9T5",
        Stop: "Skardu"
    },
]