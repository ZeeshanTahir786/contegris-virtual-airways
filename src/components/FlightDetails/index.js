import React, { useState } from 'react'
import Header from '../../screens/HomePage/Header';
import FlightBanner from '../FlightBanner';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FlightDetail from './FlightDetail';
import { Button } from '@material-ui/core';
import Image1 from "../../assests/images/banner_toronto.png";
import Image2 from "../../assests/images/sharjah_green.jpg";
import Image3 from "../../assests/images/Madina.jpg";
import Image4 from "../../assests/images/manchester-3.jpg";
import { useSelector } from 'react-redux';


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
    grid: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        marginTop: "500px",
        marginRight: "20px",
    },
    list: {
        display: "grid",
        marginTop: "500px",
        marginRight: "70px",
        marginLeft: "70px"
    }
}));
const grid = { display: "grid", gridTemplateColumns: "auto auto auto", marginTop: "500px", marginRight: "20px" };
const list = { display: "grid", marginTop: "500px", marginRight: "50px", marginLeft: "50px" };
const FlightDetails = () => {
    const [value, setValue] = useState("Grid");
    const classes = useStyles();
    const listClickHandler = () => {
        setValue("List")
    }
    const GridClickHandler = () => {
        setValue("Grid")
    }
    const searchVal = useSelector((state) => state.auth.search);
    const filteredDetails = flightDet.filter(detail => {
        return detail.flightName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1;
    });
    console.log("hjhkjsahj", filteredDetails)
    return (
        <div>
            <Header />
            <FlightBanner />
            <div style={{ position: "absolute", bottom: "50px" }}>
                <Button onClick={GridClickHandler} variant={value === "Grid" ? "contained" : "text"} size="medium" color="primary">Grid View</Button>
                <Button size="small" variant={value === "List" ? "contained" : "text"} onClick={listClickHandler} size="medium" color="primary">List View</Button>
            </div>
            <div style={value === "Grid" ? grid : list}>
                {
                    filteredDetails.map((detail) => {
                        return (
                            <FlightDetail
                                key={detail.id}
                                flightName={detail.flightName}
                                bussinesSeats={detail.AvailableSeats.map(seats => seats.bussines)}
                                economySeats={detail.AvailableSeats.map(seats => seats.economy)}
                                stop={detail.Stop}
                                airPlaneType={detail.airPlaneType}
                                image={detail.image}
                            />
                        )
                    })
                }
            </div>
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
                bussines: 6,
                economy: 2,
            },
        ],
        airPlaneType: "Plane881",
        Stop: "Lahore",
        image: Image1
    },
    {
        id: 2,
        flightName: "Yamal823",
        AvailableSeats: [
            {
                bussines: 1,
                economy: 7,
            },
        ],
        airPlaneType: "Meta2way",
        Stop: "Karachi",
        image: Image2
    },
    {
        id: 3,
        flightName: "Contegris999",
        AvailableSeats: [
            {
                bussines: 2,
                economy: 6,
            },
        ],
        airPlaneType: "BetaSail78",
        Stop: "Islababad",
        image: Image3
    },
    {
        id: 4,
        flightName: "Intellicon30",
        AvailableSeats: [
            {
                bussines: 9,
                economy: 4,
            },
        ],
        airPlaneType: "SoriYab",
        Stop: "Skardu",
        image: Image3
    },
    {
        id: 5,
        flightName: "Intelitex789",
        AvailableSeats: [
            {
                bussines: 3,
                economy: 6,
            },
        ],
        airPlaneType: "denaish54",
        Stop: "Safari",
        image: Image4
    },
    {
        id: 6,
        flightName: "Intellicon30",
        AvailableSeats: [
            {
                bussines: 3,
                economy: 0,
            },
        ],
        airPlaneType: "Malik9T5",
        Stop: "Maladesh",
        image: Image1,
    },
]