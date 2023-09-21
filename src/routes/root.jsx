import {createBrowserRouter} from "react-router-dom";
import {Dashboard} from "../pages/Dashboard.jsx";
import {ContactSupport} from "../pages/ContactSupport.jsx";
import App from "../App.jsx";
import {ErrorPage} from "../pages/ErrorPage.jsx";
import NavBar from "../components/NavBar.jsx";
import {Competences} from "../pages/Competences.jsx";
import {CompMineurs} from "../pages/CompMineurs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: (
            <NavBar>
                <div className={"bg-gray-900/10 w-full h-full rounded-md lg:p-5"}>
                    <ErrorPage />
                </div>
            </NavBar>
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
            {
                path: "/competences",
                element: <Competences />
            },
            {
                path: "/competences/:major",
                element: <CompMineurs />
            },
        ]
    }
]);

export default router;