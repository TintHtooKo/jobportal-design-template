import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Home from "../page/Home"
import About from "../page/About"
import JobL from "../page/Job"
import Service from "../page/Service"
import Contact from "../page/Contact"
import SignUp from "../page/SignUp"
import Login from "../page/Login"
import JobDetail from "../page/JobDetail"
import Apply from "../page/Apply"

export default function Route() {
    const router = createBrowserRouter([
        {
            path: "/",
            element : <App/>,
            children : [
                {
                    path : "/",
                    element : <Home/>
                },
                {
                    path : '/about',
                    element : <About/>
                },
                {
                    path : '/job',
                    element : <JobL/>
                },
                {
                    path : '/service',
                    element : <Service/>
                },
                {
                    path : '/contact',
                    element : <Contact/>
                },
                {
                    path : '/jobdetail',
                    element : <JobDetail/>
                },
                {
                    path : '/signup',
                    element : <SignUp/>
                },
                {
                    path : '/login',
                    element : <Login/>
                },
                {
                    path : '/apply',
                    element : <Apply/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}
