import {ChevronDownIcon} from "@heroicons/react/20/solid/index.js";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export const TableCompFormateur = ({ setOpen, people }) => {
    const [chevronPlace, setChevronPlace] = useState("role");
    const [chevronInverse, setChevronInverse] = useState(false);

    const handleChevronChange = (nom) => {
        if (chevronPlace !== nom){
            setChevronPlace(nom);
            setChevronInverse(false);
        }
        else {
            setChevronInverse(!chevronInverse);
        }
    }

    const compareFunction = (a, b) => {
        const order = chevronInverse ? -1 : 1;

        switch (chevronPlace) {
            case "utilisateur":
                return order * a.user.name.localeCompare(b.user.name);
            case "role":
                return order * a.role.localeCompare(b.role);
            case "email":
                return order * a.email.localeCompare(b.email);
            case "specialty":
                return order * a.specialty.localeCompare(b.specialty);
            default:
                return 0;
        }
    };

    return (
        <div className="bg-white sm:py-5 sm:rounded-md sm:shadow-lg">
            <div className="px-4 sm:px-6 lg:px-8 sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Liste des utilisateurs</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Ceci est un tableau regroupant les utilisateurs dont vous avez le droit de consulter les compétences.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="block rounded-md bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                    >
                        Rechercher
                    </button>
                </div>
            </div>
            <table className="mt-6 w-full whitespace-nowrap text-left">
                <colgroup>
                    <col className="w-full sm:w-4/12" />
                    <col className="lg:w-4/12" />
                    <col className="lg:w-2/12" />
                    <col className="lg:w-1/12" />
                    <col className="lg:w-1/12" />
                </colgroup>
                <thead className="border-b border-gray-900/10 text-sm leading-6 text-gray-900">
                <tr>
                    <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                        <div className={"group select-none cursor-pointer inline-flex"} onClick={() => handleChevronChange("utilisateur")}>
                            Utilisateur
                            <span className={`ml-2 flex justify-center items-center rounded ${chevronPlace === "utilisateur" ? "bg-gray-100 text-gray-900 group-hover:bg-gray-200" : "text-gray-400 invisible group-hover:visible group-focus:visible"}`}>
                                <ChevronDownIcon className={`h-5 w-5 ${
                                    (chevronPlace === "utilisateur" && chevronInverse) ? "transform rotate-180" : ""
                                }`} aria-hidden="true" />
                          </span>
                        </div>
                    </th>
                    <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                        <div className={"group select-none cursor-pointer inline-flex"} onClick={() => handleChevronChange("role")}>
                            Rôle
                            <span className={`ml-2 flex justify-center items-center rounded ${chevronPlace === "role" ? "bg-gray-100 text-gray-900 group-hover:bg-gray-200" : "text-gray-400 invisible group-hover:visible group-focus:visible"}`}>
                                <ChevronDownIcon className={`h-5 w-5 ${
                                    (chevronPlace === "role" && chevronInverse) ? "transform rotate-180" : ""
                                }`} aria-hidden="true" />
                          </span>
                        </div>
                    </th>
                    <th scope="col" className="hidden lg:table-cell py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                        <div className={"group select-none cursor-pointer inline-flex"} onClick={() => handleChevronChange("email")}>
                            Email
                            <span className={`ml-2 flex justify-center items-center rounded ${chevronPlace === "email" ? "bg-gray-100 text-gray-900 group-hover:bg-gray-200" : "text-gray-400 invisible group-hover:visible group-focus:visible"}`}>
                                <ChevronDownIcon className={`h-5 w-5 ${
                                    (chevronPlace === "email" && chevronInverse) ? "transform rotate-180" : ""
                                }`} aria-hidden="true" />
                          </span>
                        </div>
                    </th>
                    <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
                        <div className={"group select-none cursor-pointer inline-flex"} onClick={() => handleChevronChange("specialty")}>
                            Spécialité
                            <span className={`ml-2 flex justify-center items-center rounded ${chevronPlace === "specialty" ? "bg-gray-100 text-gray-900 group-hover:bg-gray-200" : "text-gray-400 invisible group-hover:visible group-focus:visible"}`}>
                                <ChevronDownIcon className={`h-5 w-5 ${
                                    (chevronPlace === "specialty" && chevronInverse) ? "transform rotate-180" : ""
                                }`} aria-hidden="true" />
                          </span>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-900/5">
                {people.sort(compareFunction).map((item) => (
                    <tr key={item.id} className={"hover:bg-gray-500/5"}>
                        <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                            <div className="flex items-center gap-x-4">
                                <img src={item.user.imageUrl} alt="" className="h-8 w-8 rounded-full bg-white" />
                                <div className="truncate text-sm font-medium leading-6 text-gray-900">{item.user.name}</div>
                            </div>
                        </td>
                        <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                            <div className="flex gap-x-3">
                                <div className="font-mono text-sm leading-6 text-gray-400">{item.role}</div>
                            </div>
                        </td>
                        <td className="hidden lg:table-cell py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                            <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                <div className="hidden text-gray-400 sm:block">{item.email}</div>
                            </div>
                        </td>
                        <td className="hidden py-4 pl-0 pr-10 text-sm leading-6 text-gray-400 md:table-cell">
                            {item.specialty}
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
        </div>
    )
}