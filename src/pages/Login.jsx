import logo from "./../assets/ICT-2020-LOGO-ISFEC-FRANCOIS-ASSISE.png"

export function Login()  {
    return (
        <>
            <div className="flex h-screen flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                className="h-12 w-auto"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Connexion à votre espace
                            </h2>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Adresse email
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Mot de passe
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
                                            />
                                            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                                                Rester connecté
                                            </label>
                                        </div>

                                        <div className="text-sm leading-6">
                                            <a href="#" className="font-semibold text-cyan-500 hover:text-cyan-400">
                                                Mot de passe oublié ?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                                        >
                                            Se connecter
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1908&q=80"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}