import './App.css'
import {Sidebar} from "./components/Sidebar.jsx";
import {Login} from "./pages/Login.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx";

function App() {

  return (
    <>
        {/*<Login/>*/}
        <Sidebar>
            <div className={"bg-gray-300 w-full h-full rounded-md p-5"}>
                <ErrorPage />
            </div>
        </Sidebar>
    </>
  )
}

export default App
