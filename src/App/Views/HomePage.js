import CardBody from "../Components/Cards/CardBody/CardBody"
import {Grid} from "@mui/material";
import * as React from "react";
import {useEffect} from "react";
import SideBar from "../Components/Header";
import service from "../../Services/Api";
import {useParams} from "react-router-dom";

export default function Home() {
    const params = useParams()
    const [roomData, setRoomData] = React.useState([]);
    const [sensorData, setSensorData] = React.useState([]);
    const [sensorConfig, setSensorConfig] = React.useState([]);

    useEffect(() => {
        service.overAll(params.userId).then(data => {
            setRoomData(data.rooms);
            setSensorData(data.sensorData)
            setSensorConfig(data.sensorConfig)
        });
        const interval = setInterval(() => {
            service.overAll(params.userId).then(data => {
                setRoomData(data.rooms);
                setSensorData(data.sensorData)
                setSensorConfig(data.sensorConfig)
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    function roomFilter(RoomId: number) {
        return sensorData.filter(data => data.room_id === RoomId)
    }

    function sensorFilter(roomId: number) {
        return sensorConfig.filter(data => data.room_id === roomId)
    }

    return (
        <Grid container spacing={4} padding={4}>
            <Grid item xs={12}>
                <SideBar></SideBar>
            </Grid>
            <Grid item>
                <Grid container spacing={4} padding={4}>
                    {roomData.map(data => (
                        <Grid item xs={6} spacing={2}>
                            <Grid>
                                <CardBody sensorConfig={sensorFilter(data.room_id)}
                                          selectedCard={data.roomConfig}
                                          name={data.name}
                                          room_id={data.room_id}
                                          sensors={roomFilter(data.room_id)}
                                          type={data.type}/>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}