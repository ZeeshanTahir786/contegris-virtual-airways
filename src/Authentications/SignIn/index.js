import { LockOutlined } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { AppBar } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
    root1: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        marginBottom: 10,
        fontSize: 20
    },
}));


function Copyright(props) {
    return (
        <Typography variant="body2" align="center" {...props}>
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>
            {new Date().getFullYear()}
        </Typography>
    );
}
const theme = createTheme();
const SignIn = () => {
    const classes = useStyles();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <>
            <Containers>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div className={classes.root1}>
                                Welcome to Contegris Airways
                            </div>
                            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                <LockOutlined />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    variant="outlined"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                />
                                <RouteLink to="/home" style={{ textDecoration: "none" }} >
                                    <Button
                                        type="submit"
                                        fullWidth
                                        color="primary"
                                        variant="contained"
                                        style={{ marginBottom: "10px", marginTop: "20px" }}
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                </RouteLink>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <RouteLink to="/signup" style={{ textDecoration: "none" }} >
                                            <Link href="#" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </RouteLink>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright style={{ marginTop: "20px" }} sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </ThemeProvider>
            </Containers>
        </>
    );
};

export default SignIn;
const Containers = styled.div`
  align-items: center;
  justify-content:center;
  padding-top:100px
`;
