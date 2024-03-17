import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline/index.js";
import people from "./../data/data_table_formateur.json"
import {Link} from "react-router-dom";

export const TableFormateurDashboard = () => {
    return (
        <>
            <table className="mt-3 w-full whitespace-nowrap text-left">
                <colgroup>
                    <col className="w-full sm:w-4/12"/>
                    <col className="lg:w-4/12"/>
                </colgroup>
                <thead className="border-b border-gray-900/10 text-sm leading-6 text-gray-900">
                <tr>
                    <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                        <div className={"group select-none cursor-pointer inline-flex"}>
                            Utilisateurs
                        </div>
                    </th>
                    <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                        <div className={"group select-none inline-flex"}>
                            <Link to={"/table-formateur"} className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none w-6 cursor-pointer hover:text-cyan-400">
                                <ArrowTopRightOnSquareIcon/>
                            </Link>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-900/5">
                {people.map((item) => (
                    <tr key={item.id} className={"hover:bg-gray-500/5"}>
                        <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                            <div className="flex items-center gap-x-4">
                                <img src={item.user.imageUrl} alt="" className="h-8 w-8 rounded-full bg-white"/>
                                <div
                                    className="truncate text-sm font-medium leading-6 text-gray-900">{item.user.name}</div>
                            </div>
                        </td>
                        <td className="py-4 pl-0 pr-4 text-cyan-400 text-right text-md leading-6 sm:pr-6 lg:pr-8">
                            <a href="/parcours/competences" className="bold text-cyan-400 hover:text-cyan-500 mr-1">
                                Compétences<span className="sr-only">, {item.user.name}</span>
                            </a>
                            |
                            <a href="/parcours/evolution" className="bold text-cyan-400 hover:text-cyan-500 ml-1">
                                Evolution<span className="sr-only">, {item.user.name}</span>
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}