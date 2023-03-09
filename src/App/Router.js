import { Routes, Route} from "react-router-dom";
import HomePage from "./Views/HomePage"
import Login from "./Views/LoginPage"
import Register from "./Views/RegisterPage"
import RoomDetailsPage from "./Views/RoomDetailsPage"
import SensorDetailsPage from "./Views/SensorDetailsPage";
export default function Router (props) {
    return (
        <Routes>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/register"} element={<Register/>} />
            <Route path={"/"} element={<HomePage/>} />
            <Route path={`room/:name`} element={<RoomDetailsPage/>}/>
            <Route path={'room/:name/:sensor'} element={<SensorDetailsPage/>}></Route>
        </Routes>
    )
}