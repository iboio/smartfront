import Body from "../Components/Cards/CardBody/Body"
import {Grid} from "@mui/material";

export default function Home() {
    return (
        <Grid container>
            <Grid item xs={6} spacing={2}>
                <Grid>
                    <Body></Body>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid>
                    <Body></Body>
                </Grid>
            </Grid>
        </Grid>
)
}