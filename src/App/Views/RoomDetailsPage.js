import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import service from "../../Services/Api";
import * as React from "react";
import {useEffect} from "react";
import Body from "../Components/Cards/RoomDetailstCards/Body"


export default function RoomDetailsPage() {
    const params = useParams()
    const [state, setState] = React.useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            service.roomData(`${params.name}`).then(data => setState(data));
        }, 1000);
        return () => clearInterval(interval);
    }, [params.name]);

    return (
        <Grid container direction={"row"}>
            {state.map(data => (
                <Grid item xs={4} spacing={2} padding={2}>
                    <Body name={data.room} sensor={data.sensor_name} data={data.sensor_value}></Body>
                </Grid>
            ))}
        </Grid>
    )
}