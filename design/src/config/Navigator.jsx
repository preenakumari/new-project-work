import { Routes,Route } from "react-router-dom";
import { Home,About } from "../pages";

const Navigator = () => {
  return (
    <Routes>
        <Route path = "/"  element = {<Home/>}  />
        <Route path = "/About"  element = {<About/>}  />
    </Routes>
  )
}
export default Navigator