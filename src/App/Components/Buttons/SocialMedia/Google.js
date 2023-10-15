import GoogleIcon from '@mui/icons-material/Google';
import {Box, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";

export default function Google() {
    function Test() {
        window.location.replace('http://localhost:3000/api/auth/google')
    }
    return (
        <Button onClick={Test}>
            <Paper>
                <Box>
                    <Grid padding={1} container direction="col" justifyContent="center" alignItems="center">
                        <Grid item>
                            <Grid container justifyContent="center" alignItems="center">
                                <GoogleIcon sx={{
                                    fontSize: 50,
                                }}/>
                            </Grid>

                        </Grid>
                        <Grid item>
                            <Typography paddin g={1}> Sign in with Google</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Button>
    )
}