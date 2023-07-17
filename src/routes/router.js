import CreatePage from "../pages/createPage";
import EditPage from "../pages/editPage";
import MainPage from "../pages/mainPage";

const router = [
    {
        element: <MainPage />,
        path: '/'
    },
    {
        element: <CreatePage />,
        path: '/create'
    },
    {
        element: <EditPage />,
        path: '/edit/:taskId'
    }
]



export default router