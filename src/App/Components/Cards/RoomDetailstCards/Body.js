import {Box, Grid, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import {useNavigate, Link, useLocation} from "react-router-dom";
import Temperature from "../../Box/Temperature.js";
import Humidity from "../../Box/Humidity";
import SoilMoisture from "../../Box/SoilMoisture";
import CardChecker from "../../../../Services/CardChecker";

export default function Body(props) {
    let {state} = useLocation();
    let location = useLocation();
    const navigateData = {
        pathname: `${props.type}`,
        state: {
            sensorName: props.sensor,
            sensorType: props.type,
            roomName: location.state.roomData.roomName
        }
    }


    const navigator = useNavigate()
    return (
        <Paper>
            <Box>
                <Grid container spacing={1} padding={1}>
                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                {CardChecker.RoomDetailsCardChecker(props.type,props.name,props.value)}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to={`${props.type}`} state={{data: navigateData}}>
                            <Button variant="outlined"
                                    sx={{marginTop: 2}}>
                                Outlined
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}