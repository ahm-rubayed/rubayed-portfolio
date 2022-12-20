import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/projects/:id",
        element: <ProjectDetails/>,
        loader: ({params}) => fetch(`https://portfolio-rubayed-server.vercel.app/projects/${params.id}`)
        
    }

])

export default router;