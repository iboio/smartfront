import Body from "../Components/Cards/CardBody/Body"
import {Grid} from "@mui/material";
import * as React from "react";
import {useEffect} from "react";
import SideBar from "../Components/Header";
import service from "../../Services/Api";

export default function Home() {
    const [state, setState] = React.useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            service.overAll().then(data => setState(data));
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Grid container spacing={4} padding={4}>
            <Grid item xs={12}>
                <SideBar></SideBar>
            </Grid>
            <Grid item>
                <Grid container spacing={4} padding={4}>

                    {state.map(data => (
                        <Grid item xs={6} spacing={2}>
                            <Grid>
                                <Body name={data.room} temperature={data.temperature} humidity={data.humidity}/>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>
    )
}