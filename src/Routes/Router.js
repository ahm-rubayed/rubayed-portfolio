import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import ProjectCard from "../pages/Projects/ProjectCard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/projectDetails",
        element: <ProjectDetails/>
    }

])

export default router;