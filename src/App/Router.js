import { Routes, Route} from "react-router-dom";
import HomePage from "./Views/HomePage"
import Login from "./Views/LoginPage"
import Register from "./Views/RegisterPage"
export default function Router () {
    return (
        <Routes>
            <Route path={"/"} element={<Login/>} />
            <Route path={"/register"} element={<Register/>} />
            <Route path={"/home"} element={<HomePage/>} />
        </Routes>
    )
}