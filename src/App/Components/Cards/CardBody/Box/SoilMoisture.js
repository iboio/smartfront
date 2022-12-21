import {Box, Grid, Paper} from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import Typography from "@mui/material/Typography";
import * as React from "react";


export default function SoilMoisture({title, data}) {
    return (
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
                                    <Typography padding={1} variant={"h5"}>{title}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={"h4"}>+{data}°C</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}