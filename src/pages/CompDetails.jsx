import {ProgressBarCompDetail} from "../components/ProgressBarCompDetail.jsx";
import CommentFeed from "../components/CommentFeed.jsx";
import UpdateFeed from "../components/UpdateFeed.jsx";
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
            <div className={"grid lg:grid-cols-6 lg:grid-rows-6 h-[92vh] lg:h-[80vh] w-full"}>
                <div className={"lg:col-span-4 lg:row-span-3 bg-white flex justify-center items-center sm:rounded-tl-md lg:rounded-tr-none sm:rounded-tr-md"}>
                    <div className={"flex lg:flex-row items-center lg:justify-around lg:w-full"}>
                        <ProgressBarCompDetail competenceNote={competenceNote}/>
                        <div className={"flex flex-col items-center justify-center p-5 text-center"}>
                            <h1 className={"text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"}>{valueMap[competenceMaj]}</h1>
                            <p className={"mt-3 text-xl leading-8 text-gray-700"}>{competenceMin}</p>
                        </div>
                    </div>
                </div>
                <div className={"lg:col-span-4 lg:row-span-3 bg-white border-t-2 border-b-2 p-5 overflow-y-auto lg:rounded-bl-md"}>
                    <CommentFeed />
                </div>
                <div className={"lg:row-start-1 lg:col-end-7 lg:col-span-2 lg:row-span-6 overflow-y-auto lg:border-l-2  bg-white p-5 lg:rounded-br-md lg:rounded-tr-md lg:rounded-bl-none sm:rounded-bl-md sm:rounded-br-md"}>
                    <UpdateFeed />
                </div>
            </div>
        </>
    )
}