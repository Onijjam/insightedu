import {Link} from "react-router-dom";

export const MonParcours = () => {
    return (
        <Link to={'/parcours/competences'} className={"grid grid-rows-2 sm:gap-4 lg:grid-rows-none lg:grid-cols-2 lg:gap-4 h-[80vh] w-full"}>
            <div className={'group cursor-pointer bg-white flex items-center justify-center sm:rounded-md sm:shadow-lg relative'}>
                <div className={"absolute inset-0 w-full h-full sm:rounded-md sm:shadow-lg bg-competences bg-no-repeat bg-center group-hover:blur-sm transition-all ease-in-out"} />
                <div className={"absolute w-2/5 h-1/6 group-hover:w-3/6 group-hover:h-1/5 transition-all ease-in-out flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg backdrop-blur-md"}>
                    <h2 className={'font-bold text-base sm:text-xl group-hover:text-2xl transition-all ease-in-out'}>Mes Compétences</h2>
                </div>
            </div>
            <Link to={'/parcours/evolution'} className={'group cursor-pointer bg-white flex items-center justify-center sm:rounded-md sm:shadow-lg relative'}>
                <div className={"absolute inset-0 w-full h-full sm:rounded-md sm:shadow-lg bg-evolution bg-no-repeat bg-center group-hover:blur-sm transition-all ease-in-out"} />
                <div className={"absolute w-2/5 h-1/6 group-hover:w-3/6 group-hover:h-1/5 transition-all ease-in-out flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg backdrop-blur-md"}>
                        <h2 className={'font-bold text-base sm:text-xl group-hover:text-2xl transition-all ease-in-out'}>Mon Evolution</h2>
                </div>
            </Link>
        </Link>
    )
}