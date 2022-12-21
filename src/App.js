import * as React from 'react';
import {theme} from "./App/Themes/Default";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Router from "../src/App/Router"
export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router></Router>
        </ThemeProvider>
    );
}