import {Grid} from "@mui/material";
import {useLocation, useParams} from "react-router-dom";
import * as React from "react";
import {useEffect} from "react";
import service from "../../Services/Api";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

export default function SensorDetailsPage(props) {
    const location = useLocation()
    const chartData = location.state?.data.state
    const param = useParams()
    const [state, setState] = React.useState([
        {
            value: '',
            labels: '',
        }
    ]);
    useEffect(() => {
        const interval = setInterval(() => {
            service.roomSensorData(param.userId,param.roomId, param.sensor).then(data => {
                setState(data);
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [param.sensor,param.roomId,param.userId]);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `${chartData.roomName},${chartData.sensorName}`,
            },
        },
        colors: ['#FB7A21']
    };

    const data = {
        labels: state.labels,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: param.sensor,
                data: state.value,
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(255, 99, 71, 0.5)',
                    'rgba(255, 99, 71, 0.5)',
                    'rgba(255, 99, 71, 0.5)'
                ],
                borderWidth: 1,
                borderColor: 'rgb(255, 99, 132)',
            }
        ]
    }
    return (
        <Grid>
            <Line data={data} options={options}></Line>
        </Grid>
    )
}