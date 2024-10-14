import { Outlet } from "react-router-dom";
import Navbar from "./component/nav/NavBar";


export default function App() {
  return (
    <>
    <Navbar/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}
