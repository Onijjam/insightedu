import ModalAccountDelete from "../components/ModalAccountDelete.jsx";
import {useState} from "react";

export const ProfilPage = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleDeleteModal = () => {
        setOpenModal(!openModal);
    }


    return (
        <div className={"bg-white rounded-md"}>
            <ModalAccountDelete open={openModal} setOpen={setOpenModal}/>
            <div className="divide-y">
                <div className="grid border-b border-gray-900/10 max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Informations personnelles</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">
                            Optez pour une boîte mail valide pour recevoir les notifications importantes.
                        </p>
                    </div>

                    <form className="md:col-span-2">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div className="col-span-full flex items-center gap-x-8">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    className="h-24 w-24 shadow-xl flex-none rounded-lg bg-gray-800 object-cover"
                                />
                                <div>
                                    <button
                                        type="button"
                                        className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 shadow-sm hover:bg-gray-100"
                                    >
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Modifier l'avatar
                                    </button>
                                    <p className="mt-2 text-xs leading-5 text-gray-400">JPG, GIF ou PNG. 1MB max.</p>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Prénom
                                </label>
                                <div className="mt-2">
                                    <input
                                        disabled
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder={"Chloé"}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 bg-gray-600/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nom
                                </label>
                                <div className="mt-2">
                                    <input
                                        disabled
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        placeholder={"Montpasse"}
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 bg-gray-600/5  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Adresse email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder={"chloe.montpasse@exemple.com"}
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex">
                            <button
                                type="submit"
                                className="rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                            >
                                Sauvegarder
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Changer le mot de passe</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">
                            Vous pouvez mettre à jour votre mot de passe. Il est conseillé de le faire au moins tous les mois.
                        </p>
                    </div>

                    <form className="md:col-span-2">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mot de passe actuel
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="current-password"
                                        name="current_password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nouveau mot de passe
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="new-password"
                                        name="new_password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <a className="text-sm text-gray-600">Le mot de passe doit contenir au moins : 8 caractères, 1 majuscule, 1 caractère spécial, 1 chiffre.</a>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirmez le mot de passe
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="confirm-password"
                                        name="confirm_password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex">
                            <button
                                type="submit"
                                className="rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                            >
                                Sauvegarder
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Supprimer votre compte</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-400">
                            Dans une mesure de RGPD, il est possible de supprimer toutes vos informations, ainsi que votre compte.
                            Cette mesure est définitive et aucune données ne pourras être récupéré.
                        </p>
                    </div>

                    <form className="flex items-start md:col-span-2">
                        <div
                            onClick={handleDeleteModal}
                            className="rounded-md bg-red-500 cursor-pointer px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
                        >
                            Oui, je souhaite supprimer mon compte
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}