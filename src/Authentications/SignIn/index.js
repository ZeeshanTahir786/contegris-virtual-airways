import { LockOutlined } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouteLink } from "react-router-dom";
import { useSelector } from "react-redux";



const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
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
    const email = useSelector((state) => state?.auth?.email);
    const password = useSelector((state) => state?.auth?.password);
    const [userEmail, setUserEmail] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    const [error, setError] = React.useState(true);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("saasa", values)
            setUserEmail(values?.email)
            setUserPassword(values?.password)
            email !== userEmail & password !== userPassword ? setError(false) : setError(true)

            // alert(JSON.stringify(values, null, 2));
        },
    });
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
    console.log("sajdkj", userEmail, userPassword);
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
                                onSubmit={formik.handleSubmit}
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    autoComplete="email"
                                    autoFocus
                                    variant="outlined"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                />
                                {
                                    email === userEmail && password === userPassword ? <RouteLink to="/home" style={{ textDecoration: "none" }} >
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
                                    </RouteLink> :
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
                                }
                                {!error && <Typography>Incorrect email or password</Typography>}
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
