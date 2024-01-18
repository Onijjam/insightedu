import React, {useState} from "react";
import competenceChef from "../data/referentiel_chef.json";
import competenceEtudiant from "../data/ref_etudiant.json";

export default function FormCompetences({onSuccess}) {
    const [role, setRole] = useState("etudiant");

    
    let listRefEtudiant = competenceEtudiant.map((ref, index) => {
        let listCompetenceEtudiant = ref[Object.keys(ref)].map((competence, index) => {
            return (
                <fieldset key={index}>
                    <p className="mt-1 text-md leading-6 text-gray-600 font-semibold mt-5">{competence}</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                complètement novice
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                débutant
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                            compétent
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                expert
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3  pb-10">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                ressources
                            </label>
                        </div>
                    </div>
                </fieldset>
            )
        })
        return (
            <div key={index} className="border-b border-gray-900/15 pb-12">
                <legend className="text-lg font-bold leading-6 text-gray-900">{Object.keys(ref)}</legend>
                {listCompetenceEtudiant}
            </div>
        )
    })

    let listRefChef = competenceChef.map((ref, index) => {
        let listCompetenceChef = ref[Object.keys(ref)].map((competence, index) => {
            return (
                <fieldset key={index}>
                    <p className="mt-1 text-md leading-6 text-gray-600 font-semibold mt-5">{competence}</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                complètement novice
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                débutant
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                            compétent
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                expert
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3  pb-10">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-500"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                ressources
                            </label>
                        </div>
                    </div>
                </fieldset>
            )
        })
        return (
            <div key={index} className="border-b border-gray-900/15 pb-12">
                <legend className="text-lg font-bold leading-6 text-gray-900">{Object.keys(ref)}</legend>
                {listCompetenceChef}
            </div>
        )
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        sessionStorage.setItem("FirstTime", "false");
        onSuccess();
    };

    return (
        <form className='bg-white mt-auto rounded-md w-full lg:shadow-xl lg:px-8'>
            <h1 className="pt-5 sm:pl-0 pl-2 text-2xl font-bold leading-7 text-gray-900">Formulaire de compétences</h1>
            <p className="mt-5 sm:pl-0 pl-2 text-md leading-6 text-gray-600">Remplissez le formulaire de compétences suivant en auto-évaluation sur les différentes sujets issues du référentiel </p>
            <div className="space-y-12">
                <div>
                    <div className="p-10 space-y-10">
                        {role === "etudiant" ? listRefEtudiant : (role === "chef" ? listRefChef : listRefEtudiant)}
                        <div className="!mt-2 flex items-center justify-end gap-x-6">
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}