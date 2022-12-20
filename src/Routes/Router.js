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
        loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`)
        
    }

])

export default router;