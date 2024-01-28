import { UserGroupIcon,  ChartBarIcon} from '@heroicons/react/20/solid'
import {Link} from "react-router-dom";

export default function ContentSecDashComponent() {
    return (
        <div className="lg:relative lg:block flex justify-center items-center">
                    <div className="md:pl-10 pl-4 pr-8 max-w-2xl pb-8 pt-4">
                        <p className="text-base font-semibold leading-7 text-cyan-500">InsightEdu</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Votre Nouvelle plateforme de suivi</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            Le but de cette application web est de permettre à tous les apprenants de suivre de manière
                            simple et efficace leurs compétences pédagogiques au sein de leur parcours à l'ISFEC.
                        </p>
                        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <UserGroupIcon className="mt-1 h-5 w-5 flex-none text-cyan-500" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Échanger avec vos formateurs.</strong> Vous pouvez
                                        directement échanger avec vos formateurs référents pour définir plus précisément
                                        vos besoins et identifier les différents gains de compétences nécessaires pour
                                        mener à bien votre projet pédagogique.
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ChartBarIcon className="mt-1 h-5 w-5 flex-none text-cyan-500" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Consulter votre progression en temps réel. </strong>
                                        Vous pouvez suivre chacune de vos compétences de manière individuelle et
                                        complète. Cela vous permet d'avoir un suivi plus approfondi pour chaque
                                        compétence nécessaire à votre projet pédagogique.
                  </span>
                                </li>
                            </ul>
                        </div>
                        <div className={"w-full flex justify-center items-center lg:mt-5 mt-10"}>
                            <Link to={"/parcours"}
                                type="button"
                                className="rounded-full bg-cyan-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                            >
                                Démarrer votre expérience
                            </Link>
                        </div>
            </div>
        </div>
    )
}
