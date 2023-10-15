import {Grid} from "@mui/material";
import {useLocation, useParams} from "react-router-dom";
import service from "../../Services/Api";
import * as React from "react";
import {useEffect} from "react";
import Body from "../Components/Cards/RoomDetailstCards/Body"
import {wait} from "@testing-library/user-event/dist/utils";
import * as string_decoder from "string_decoder";


export default function RoomDetailsPage() {
    const params = useParams()
    const [roomData, setRoomData] = React.useState(
        {
            user_id: '',
            room_id: '',
            name: '',
            type: '',
            sensors: []
        });
    const [sensor, setSensor] = React.useState([{
        id: '',
        room_id: '',
        type: '',
        name: '',
        value: '',
        createdAt: '',
        updateAt: '',
        sensorData: [
            {
                roomId: '',
                type: '',
                value: '',
                createAt: '',
            }]
    }])
    useEffect(() => {
        service.roomData(`${params.userId}`, `${params.roomId}`).then(data => {
            setRoomData(data[0])
            setSensor(data[1])
        })
        const interval = setInterval(() => {
            service.roomData(`${params.userId}`, `${params.roomId}`).then(data => {
                setRoomData(data[0])
                setSensor(data[1])
            })
        }, 1000);
        return () => clearInterval(interval);
    }, [params.userId, params.roomId]);
    console.log(sensor)
    return (
        <Grid container direction={"row"}>
            {sensor.map((data) => (
                <Grid item xs={3} spacing={2} padding={2}>
                    <Body sensor={data.name} value={data.sensorData.value} type={data.type}></Body>
                </Grid>
            ))}
        </Grid>
    )
}
