import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import BookFlight from '../../../screens/BookFlight';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        // minWidth: 275,
        width: "97%",
        margin: 20,
        flexDirection: "row"
    },
    media: {
        height: 180,
    },
    root1: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20ch',
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const FlightDetail = ({ flightName, airPlaneType, bussinesSeats, economySeats, stop, image }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const guest = useSelector((state) => state.auth.userType)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`Flight Name: ${flightName}`}
                    </Typography>
                    <Typography style={{ marginBottom: "5px" }} variant="body2" color="textSecondary" component="p">
                        Details: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    <TextField style={{ width: "180px", margin: "5px" }} variant="outlined" disabled id="standard-disabled" label="Air Plane Type" defaultValue={airPlaneType} />
                    <TextField style={{ width: "180px", margin: "5px" }} variant="outlined" disabled id="standard-disabled" label="Stop" defaultValue={stop} />
                    <TextField style={{ width: "180px", margin: "5px" }} variant="outlined" disabled id="standard-disabled" label="Available Seats(B)" defaultValue={bussinesSeats} />
                    <TextField style={{ width: "180px", margin: "5px" }} variant="outlined" disabled id="standard-disabled" label="Available Seats(E)" defaultValue={economySeats} />

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                {
                    guest !== "Guest" ? <Button onClick={handleOpen} variant="contained" size="small" color="primary">
                        Book Now
                    </Button> : null
                }
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <BookFlight />
                        </div>
                    </Fade>
                </Modal>
            </CardActions>
        </Card>
    );
}

export default FlightDetail;
