import {Box, Grid, Paper} from "@mui/material";
import Temperature from "../../Box/Temperature";
import Humidity from "../../Box/Humidity";
import Title from "./Title";
import Button from "@mui/material/Button";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import service from "../../../../Services/Api";

export default function Body(props) {
    const navigator = useNavigate()
    return (
        <Paper>
            <Box>
                <Grid container spacing={1} padding={1}>
                    <Grid item xs={12}>
                        <Title text={props.name}></Title>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Temperature title={"Temperature"} data={props.temperature}></Temperature>
                            <Humidity title={"Humidity"} data={props.humidity}></Humidity>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>Custom</Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => navigator(`${props.room_id}/${props.type.toLowerCase()}`)} sx={{marginTop: 2}}>
                            Outlined
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}