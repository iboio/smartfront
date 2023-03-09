import {Box, Grid, Paper} from "@mui/material";
import OpacityIcon from '@mui/icons-material/Opacity';
import Typography from "@mui/material/Typography";
import * as React from "react";


export default function Humidity(props) {
    return (
        <Grid item padding={1}>
            <Paper elevation={12}>
                <Box>
                    <Grid container alignItems={"center"}>
                        <Grid item xs={4}>
                            <Grid container display={"flex"}>
                                <Grid item xs={4} p={1}>
                                    <OpacityIcon sx={{
                                        fontSize: 70,
                                    }}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container textAlign={"center"}>
                                <Grid item xs={12}>
                                    <Typography padding={1} variant={"h5"}>{props.title}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={"h4"}>+{props.data} %</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}