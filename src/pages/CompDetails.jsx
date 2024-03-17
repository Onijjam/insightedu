import {ProgressBarCompDetail} from "../components/ProgressBarCompDetail.jsx";
import CommentFeed from "../components/CommentFeed.jsx";
import {useContext} from "react";
import {Datacontext} from "../App.jsx";

export const CompDetails = () => {
    const valueMap = {
        1: "Compétences communes à tous les professeurs et les personnels d'éducation, acteurs du \n" +
            "service public d'éducation ",
        2: "Compétences communes à tous les professeurs et les personnels d'éducation, pédagogues et \n" +
            "éducateurs au service de la réussite de tous les élèves ",
        3: "Compétences communes à tous les professeurs et les personnels d'éducation, acteurs de la \n" +
            "communauté éducative ",
        4: "Compétences communes à tous les professeurs, professionnels porteurs de savoirs et d'une \n" +
            "culture commune",
        5: "Compétences communes à tous les professeurs, praticiens experts des apprentissages"
    };

    const { competenceMaj, competenceMin, competenceNote } = useContext(Datacontext);

    return (
        <>
            <div className={"grid lg:grid-cols-6 lg:grid-rows-6 lg:h-[80vh] w-full"}>
                <div className={"lg:col-span-6 lg:row-span-3 bg-white flex justify-center p-5 items-center sm:rounded-tl-md sm:rounded-tr-md"}>
                    <div className={"flex lg:flex-row items-center lg:justify-around lg:w-full"}>
                        <ProgressBarCompDetail competenceNote={competenceNote}/>
                        <div className={"flex flex-col items-center justify-center p-5 text-center"}>
                            <h1 className={"text-xs font-bold tracking-tight text-gray-900 sm:text-2xl"}>{valueMap[competenceMaj]}</h1>
                            <p className={"mt-3 sm:text-xl text-xs sm:leading-8 text-gray-700"}>{competenceMin}</p>
                        </div>
                    </div>
                </div>
                <div className={"lg:col-span-6 lg:row-span-3 bg-white border-t-2 p-5 overflow-y-auto scrollbar sm:rounded-bl-md sm:rounded-br-md lg:max-h-none max-h-96"}>
                    <CommentFeed />
                </div>
            </div>
        </>
    )
}