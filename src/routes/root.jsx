import {createBrowserRouter} from "react-router-dom";
import {Dashboard} from "../pages/Dashboard.jsx";
import {ContactSupport} from "../pages/ContactSupport.jsx";
import App from "../App.jsx";
import {ErrorPage} from "../pages/ErrorPage.jsx";
import FormCompetences from "../pages/FormCompetences.jsx";
import PasswordCreation from "../pages/PasswordCreation.jsx";
import NavBar from "../components/NavBar.jsx";
import {Competences} from "../pages/Competences.jsx";
import {CompMineurs} from "../pages/CompMineurs.jsx";
import {CompDetails} from "../pages/CompDetails.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import {ProfilPage} from "../pages/ProfilPage.jsx";
import {Evolution} from "../pages/Evolution.jsx";
import {MonParcours} from "../pages/MonParcours.jsx";
import {TableFormateur} from "../pages/TableFormateur.jsx";

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
                element: <Dashboard/>
            },
            {
                path: "/table-formateur",
                element: <TableFormateur />
            },
            {
                path: "/contact-support",
                element: <ContactSupport />
            },
            {
                path: "/parcours/evolution",
                element: <Evolution/>
            },
            {
                path: "/parcours",
                element: <MonParcours/>
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/form-competences",
                element: <FormCompetences />
            },
            {
                path: "/password-creation",
                element: <PasswordCreation />
            },
            {
                path: "/parcours/competences",
                element: <Competences />
            },
            {
                path: "/parcours/competences/:major",
                element: <CompMineurs />
            },
            {
                path: "/parcours/competences/details/",
                element: <CompDetails />
            },
            {
                path: "/profil",
                element: <ProfilPage />
            },
        ]
    }
]);

export default router;