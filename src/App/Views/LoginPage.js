import {Box, FormControlLabel, Grid, Link, Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import * as React from "react";
export default function LoginPage() {
    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            style={{ minHeight: '100vh' }}>
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
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                        </Box>
                        <Grid item>
                            <Button
                                fullWidth
                                type={"submit"}
                                variant={"contained"}
                            sx={{mt: 3, mb:2}}>
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
                </Grid>
            </Grid>
        </Grid>
    )
}