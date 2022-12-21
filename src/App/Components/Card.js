import {Box, FormControlLabel, Grid, Paper, Switch} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

export default function Card({title, temp, hum}) {
    const [auth, setAuth] = React.useState(true);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    return (
        <Paper elevation={6} >
            <Box sx={{
                borderRadius: 5,
            }}>
                <Grid container spacing={1} padding={1}>
                    <Grid item xs={12}>
                        <Paper>
                            <Box>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography variant="h4" item xs={12} padding={1}> {title}</Typography>
                                    </Grid>
                                    <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={auth}
                                                    onChange={handleChange}
                                                    aria-label="login switch"
                                                />
                                            }
                                            label={""}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6} padding={1}>
                                <Paper elevation={12}>
                                    <Box>
                                        <Grid container alignItems={"center"}>
                                            <Grid item xs={4}>
                                                <Grid container display={"flex"}>
                                                    <Grid item xs={4} p={1}>
                                                        <ThermostatIcon sx={{
                                                            fontSize: 70,
                                                        }}/>
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Grid container textAlign={"center"}>
                                                    <Grid item xs={12}>
                                                        <Typography padding={1} variant={"h5"}>Temperature</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant={"h4"}>+{temp}°C</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} padding={1}>
                                <Paper elevation={12}>
                                    <Box>
                                        <Grid container alignItems={"center"}>
                                            <Grid item xs={4}>
                                                <Grid container display={"flex"}>
                                                    <Grid item xs={4} p={1}>
                                                        <OpacityIcon sx={{
                                                            fontSize: 70,
                                                        }}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Grid container textAlign={"center"}>
                                                    <Grid item xs={12}>
                                                        <Typography variant={"h5"} padding={1}>Humidity</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant={"h4"}>{hum}%</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid>
                            <Switch sx={{

                            }}></Switch>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" sx={{marginTop: 2}}>Outlined</Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}
