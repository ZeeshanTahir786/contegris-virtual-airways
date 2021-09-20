import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { useFormik } from 'formik';
import * as yup from 'yup';
import CssBaseline from "@material-ui/core/CssBaseline";
import { LockOutlined } from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link as RouteLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { signUpReducer } from '../../redux/reducers/authReducer';


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    firstname: yup.string("Enter First Name").required("First Name is required"),
    lastname: yup.string("Enter Last Name").required("Last Name is required"),
});

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
        fontSize: 20,
    },
}));

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const SignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(signUpReducer(values))
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Containers>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div className={classes.root1}>
                            Welcome to Contegris Airways
                        </div>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstname"
                                        required
                                        fullWidth
                                        variant="outlined"
                                        id="firstname"
                                        label="First Name"
                                        autoFocus
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                        helperText={formik.touched.firstname && formik.errors.firstname}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastname"
                                        label="Last Name"
                                        variant="outlined"
                                        name="lastname"
                                        autoComplete="lname"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                        helperText={formik.touched.lastname && formik.errors.lastname}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        required
                                        fullWidth
                                        variant="outlined"
                                        variant="outlined"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        variant="outlined"
                                        autoComplete="new-password"
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ marginBottom: "10px", marginTop: "20px" }}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <RouteLink to="/" style={{ textDecoration: "none" }} >
                                        <Link href="#" variant="body2">
                                            {" Already have an account? Sign in"}
                                        </Link>
                                    </RouteLink>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright style={{ marginTop: "20px" }} sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </Containers>
    );
}

export default SignUp;
const Containers = styled.div`
  align-items: center;
  justify-content:center;
  padding-top:100px
`;