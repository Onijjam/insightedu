import {Link} from "react-router-dom";

export function ErrorPage() {
    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 rounded-md lg:shadow-xl sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-cyan-500">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Pardon, nous n'avons pas pu trouver la page que vous cherchez.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                        >
                            Retourner à l'accueil
                        </Link>
                        <Link to="/contact-support" className="text-sm font-semibold text-gray-900">
                            Contacter le support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}