import {createBrowserRouter, Outlet} from "react-router-dom";
import {Dashboard} from "../pages/Dashboard.jsx";
import {ContactSupport} from "../pages/ContactSupport.jsx";
import App from "../App.jsx";
import {ErrorPage} from "../pages/ErrorPage.jsx";
import {Sidebar} from "../components/Sidebar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: (
            <Sidebar>
                <div className={"bg-gray-900/10 w-full h-full rounded-md lg:p-5"}>
                    <ErrorPage />
                </div>
            </Sidebar>
        ),
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/contact-support",
                element: <ContactSupport />
            },
        ]
    }
]);

export default router;