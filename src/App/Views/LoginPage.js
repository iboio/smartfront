import {Alert, Box, FormControlLabel, Grid, Link, Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Google from "../Components/Buttons/SocialMedia/Google";
import service from "../../Services/Api";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const navigator = useNavigate()
    const [state, setState] = React.useState({
        email: '',
        password: '',
    })

    function setFormValues(e) {
        setState({...state, [e.target.name]: e.target.value})
    }

    function test(e) {
        console.log(e)
        if (e.msg === 'User not found') {
            console.log('user not found')
            return (
                <Alert severity="error">{e.user}</Alert>
            )
        } else {
            console.log('test2')
            console.log(e)
            navigator(`/${e.id}`)
        }
    }
    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            style={{minHeight: '100vh'}}>
            <Grid item>
                <Grid container component={Paper} elevation={12} direction={"column"}>
                    <Grid item>
                        <Grid container
                              textAlign={"center"}
                              direction={"column"}>
                            <Grid item>
                                <Box
                                    sx={{
                                        width: 120,
                                        height: 120,
                                    }}
                                    component={"img"}
                                    src={"https://media.discordapp.net/attachments/1001246730777530471/1052078834213724180/icon-1.png"}
                                >
                                </Box>
                            </Grid>
                            <Grid item>
                                <Typography component={"h1"} variant={"h3"}>Sign In</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item margin={5}>
                        <Box>
                            <TextField
                                margin={"normal"}
                                fullWidth
                                id={"email"}
                                label={"Email Address"}
                                name={"email"}
                                autoComplete={"email"}
                                autoFocus
                                onChange={setFormValues}
                            />
                            <TextField
                                margin={"normal"}
                                fullWidth
                                id={"password"}
                                label={"Password"}
                                name={"password"}
                                type={"password"}
                                autoComplete={"current-password"}
                                autoFocus
                                onChange={setFormValues}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                        </Box>
                        <Grid item>
                            <Button
                                onClick={() => service.loginData(state).then(r => test(r))}
                                fullWidth
                                type={"submit"}
                                variant={"contained"}
                                sx={{mt: 3, mb: 2}}>
                                Sign In
                            </Button>
                        </Grid>
                        <Grid item>
                            <Grid container justifyContent={"space-between"}>
                                <Grid item>
                                    <Link href={"#"} variant={"body2"}>
                                        Forgot Password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href={"#"} variant={"body2"}>
                                        Don't have an account? Sign up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <div style={{height: '5px', backgroundColor: 'white'}}/>
                            <Typography sx={{}}> Hello </Typography>
                            <div style={{height: '5px', backgroundColor: 'white'}}/>
                        </Grid>
                    </Grid>
                    <Grid item margin={2}>
                        <Grid container justifyContent={"center"}>
                            <Grid item>
                                <Google/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}