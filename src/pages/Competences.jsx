import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from "react-router-dom";

const people = [
    {
        name: 'Service public d\'éducation',
        title: 'Les professeurs et les competencenels d\'éducation',
        percentage: 75,
        to: '/competences/service-edu',
    },
    {
        name: 'Service de la réussite de tous les élèves',
        title: 'Les professeurs et les competencenels d\'éducation, pédagogues et éducateurs',
        percentage: 64,
        to: '/competences/reussite-edu',
    },
    {
        name: 'Acteurs de la communauté éducative',
        title: 'Les professeurs et les competencenels d\'éducation',
        percentage: 60,
        to: '/competences/communaute-edu',
    },
    {
        name: 'Porteur de savoirs et d\'une culture commune',
        title: 'Les professeurs et les professionnels',
        percentage: 100,
        to: '/competences/savoir-edu',
    },
    {
        name: 'Experts des apprentissages',
        title: 'Les professeurs et praticiens',
        percentage: 25,
        to: '/competences/expert-edu',
    }
]

export const Competences = () => {
    function handleValue(value) {
        let pathColor = '#16a34a';
        let textColor = '#16a34a';

        if (value >= 75) {
            pathColor = '#16a34a';
            textColor = '#16a34a';
        } else if (value < 75 && value > 25) {
            pathColor = '#eab308';
            textColor = '#eab308';
        } else {
            pathColor = '#dc2626';
            textColor = '#dc2626';
        }

        return { pathColor, textColor };
    }


    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {people.map((competence) => (
                <li
                    key={competence.name}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                >
                    <div className="flex flex-1 flex-col p-8">
                        <CircularProgressbar
                            value={competence.percentage}
                            text={`${competence.percentage}%`}
                            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                            styles={buildStyles({
                                pathColor: handleValue(competence.percentage).pathColor,
                                textColor: handleValue(competence.percentage).textColor,})}
                        />
                        <h3 className="mt-6 text-sm font-medium text-gray-900">{competence.name}</h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-sm text-gray-500">{competence.title}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <Link
                                    to={`${competence.to}`}
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                    Accéder
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}