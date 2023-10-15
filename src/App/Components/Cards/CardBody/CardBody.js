import {Box, Grid, Paper} from "@mui/material";
import Temperature from "../../Box/Temperature";
import Humidity from "../../Box/Humidity";
import Title from "./Title";
import Button from "@mui/material/Button";
import * as React from "react";
import {useNavigate, Link, useLocation} from "react-router-dom";
import service from "../../../../Services/Api";
import SoilMoisture from "../../Box/SoilMoisture";
import cardChecker from "../../../../Services/CardChecker";

export default function CardBody(props) {
    const { state } = useLocation();
    const navigator = useNavigate();
    const navigateData= {
        roomType: props.type,
        roomName: props.name
    }
    return (
        <Paper>
            <Box>
                <Grid container spacing={1} padding={1}>
                    <Grid item xs={12}>
                        <Title text={props.name}></Title>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {cardChecker.CardChecker(props.selectedCard,props.sensors,props.sensorConfig)}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>Custom</Grid>
                    <Grid item xs={12}>
                        <Link to={`${props.room_id}/${props.type}`} state={{roomData: navigateData}}>
                            <Button variant="outlined" sx={{marginTop: 2}}>
                                Outlined
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}