import {Box, Grid, Paper} from "@mui/material";
import Temperature from "./Box/Temperature";
import Humidity from "./Box/Humidity";
import Title from "./Title";
import Button from "@mui/material/Button";
import * as React from "react";
import {useEffect} from "react";

export default function Body() {
    const [state, setState] = React.useState(42);
    useEffect(() => {
        const interval = setInterval(() => {
            doRequest("test2", "test1").then(data => setState(data));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    async function doRequest(room,sensor) {
        let url = `http://192.168.3.2:3000/sensor/sensor-data?room=${room}&sensor=${sensor}`;
        let res = await fetch(url);

        if (res.ok) {
            return await res.json();
        } else {
            return `HTTP error: ${res.status}`;
        }
    }
    const title = "humidity";
    const data = "data"
    return (
        <Paper>
            <Box>
                <Grid container spacing={1} padding={1}>
                    <Grid item xs={12}>
                        <Title></Title>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Temperature title={state.room} data={state.value}></Temperature>
                            <Humidity title={title} data={data}></Humidity>

                        </Grid>
                    </Grid>
                    <Grid item xs={12}>Custom</Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" sx={{marginTop: 2}}>Outlined</Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}