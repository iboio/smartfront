import * as React from "react";
import {FormControlLabel, Grid, Switch} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Title() {
    const [auth, setAuth] = React.useState(true);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    }
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography variant="h4" item xs={12} padding={1}>test-title</Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={""}
                />
            </Grid>
        </Grid>
    )
}