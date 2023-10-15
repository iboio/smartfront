import {Box, FormControlLabel, Grid, Link, Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Google from "../Components/Buttons/SocialMedia/Google";
import service from "../../Services/Api";

export default function LoginPage() {

    const [state, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    function setFormValues(e) {
        setValues({...state, [e.target.name]: e.target.value})
    }

    return (
        <Grid
            container justifyContent={"center"} alignItems={"center"} style={{minHeight: '100vh'}}>
            <Grid item>
                <Grid container component={Paper} elevation={12} direction={"column"}>
                    <Grid item xs={9}>
                        <Grid container textAlign={"center"} direction={"column"}>
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
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid item xs={9}>
                                    <TextField
                                        margin={"normal"}
                                        fullWidth
                                        id={"firstName"}
                                        label={"First Name"}
                                        name={"firstName"}
                                        autoComplete={"First name"}
                                        autoFocus
                                        onChange={setFormValues}
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField
                                        margin={"normal"}
                                        fullWidth
                                        id={"lastName"}
                                        label={"Last Name"}
                                        name={"lastName"}
                                        autoComplete={"Last name"}
                                        autoFocus
                                        onChange={setFormValues}
                                    />
                                </Grid>
                                <Grid item xs={9}>
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
                                </Grid>
                                <Grid item xs={9}>
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
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="ohudum onaylıyorum"
                            />
                        </Box>
                        <Grid item>
                            <Button
                                onClick={()=>{
                                    service.registerData(state).then(r =>console.log(r))
                                }}
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
                    <Grid item xs={9}>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <div style={{height: '5px', backgroundColor: 'white'}}/>
                            <Typography sx={{}}> Hello </Typography>
                            <div style={{height: '5px', backgroundColor: 'white'}}/>
                        </Grid>
                    </Grid>
                    <Grid item margin={2} xs={9}>
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