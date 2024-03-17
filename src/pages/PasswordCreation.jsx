import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function PasswordCreation({onSuccess}) {
    const [progression, setProgression] = useState(0)
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState(false)

    const handleChangePassword = (event) => {
        const newPassword = event.target.value;

        // Vérification de la présence d'au moins un chiffre, une majuscule et un caractère spécial
        const hasNumber = /\d/.test(newPassword);
        const hasUpperCase = /[A-Z]/.test(newPassword);
        const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(newPassword);
        const isLongEnough = newPassword.length >= 8;

        // Calcul de la progression
        const progress = (hasNumber + hasUpperCase + hasSpecialCharacter + isLongEnough) * 25;
        setProgression(progress);

        // Mettre à jour le mot de passe
        setPassword(newPassword);
    };

    const handleReapeatPassword = (event) => {
        setRepeatPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password === repeatPassword){
            console.log("Mot de passe identique")
            sessionStorage.setItem("PasswordChange", "true");
            onSuccess();
        }
        else {
            setError(true)
        }

    };

    return (
        <form className='bg-white max-sm:h-full rounded-md lg:shadow-xl lg:px-8'>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Création d'un mot de passe
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Mot de passe
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                    onChange={handleChangePassword}
                                />
                            </div>
                            <a className="text-sm text-gray-600">Le mot de passe doit contenir au moins : 8 caractères, 1 majuscule, 1 caractère spécial, 1 chiffre.</a>
                            <div className="sm:col-span-6 pt-3">
                                <div className="rounded-md mb-6 h-1 w-full bg-gray-200">
                                    <div
                                        className={`rounded-md h-1 ${progression <= 33.33 ? "bg-red-500" : progression < 75 ? "bg-yellow-300" : progression < 80 ? "bg-green-500" : "bg-green-400"
                                            }`}
                                        style={{
                                            width: `${progression}%`,
                                            transition: "width 0.5s ease-in-out", // Ajoutez cette ligne pour définir la transition
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirmer le mot de passe
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="repeatPassword"
                                    name="repeatPassword"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                        onChange={handleReapeatPassword}
                                />
                            </div>
                            {error && <p className="text-sm text-red-600">Les mots de passe ne sont pas identiques</p>}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                                onClick={handleSubmit}
                            >
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    )
}