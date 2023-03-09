import {Box, Grid, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import Temperature from "../../Box/Temperature.js";
import Humidity from "../../Box/Humidity";
import SoilMoisture from "../../Box/SoilMoisture";

export default function Body(props) {
    const navigator = useNavigate()
    return (
        <Paper>
            <Box>
                <Grid container spacing={1} padding={1}>
                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                {props.sensor === 'temperature' &&
                                        <Temperature title={props.sensor} data={props.data}></Temperature>}
                                {props.sensor === 'humidity' &&
                                    <Humidity title={props.sensor} data={props.data}></Humidity>}
                                {props.sensor === 'soil' &&
                                    <SoilMoisture title={props.sensor} data={props.data}></SoilMoisture>}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => navigator(`${props.sensor.toLowerCase()}`)}
                                sx={{marginTop: 2}}>
                            Outlined
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}