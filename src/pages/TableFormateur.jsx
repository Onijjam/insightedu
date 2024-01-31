import {TableCompFormateur} from "../components/TableCompFormateur.jsx";
import {SearchPopUp} from "../components/SearchPopUp.jsx";
import {useState} from "react";
import people from "./../data/data_table_formateur.json"

export const TableFormateur = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={"w-full"}>
            <SearchPopUp open={open} setOpen={setOpen} people={people}/>
            <TableCompFormateur setOpen={setOpen} people={people} />
        </div>
    )
}