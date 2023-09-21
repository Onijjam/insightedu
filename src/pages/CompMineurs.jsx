import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useParams} from "react-router-dom";

const educationPublique = [
    {
        name: 'Faire partager les valeurs de la République',
        href: '#',
        note: 'A'
    },
    {
        name: 'Inscrire son action dans le cadre des principes fondamentaux du système éducatif et dans le \n' +
            'cadre réglementaire de l\'école',
        href: '#',
        note: 'EC'
    },
]

const educationReussite = [
    {
        name: 'Connaître les élèves et les processus d\'apprentissage',
        href: '#',
        note: 'A'
    },
    {
        name: 'Prendre en compte la diversité des élèves',
        href: '#',
        note: 'EC'
    },
    {
        name: 'Accompagner les élèves dans leur parcours de formation\n',
        href: '#',
        note: 'A'
    },
    {
        name: 'Agir en éducateur responsable et selon des principes éthiques',
        href: '#',
        note: 'NA'
    },
    {
        name: 'Maîtriser la langue française à des fins de communication',
        href: '#',
        note: 'EC'
    },
    {
        name: 'Utiliser une langue vivante étrangère dans les situations exigées par son métier',
        href: '#',
        note: 'A'
    },
    {
        name: 'Intégrer les éléments de la culture numérique nécessaires à l\'exercice de son métier',
        href: '#',
        note: 'EC'
    },
]

const educationActeur = [
    {
        name: 'Coopérer au sein d\'une équipe',
        href: '#',
        note: 'A'
    },
    {
        name: 'Contribuer à l\'action de la communauté éducative',
        href: '#',
        note: 'EC'
    },
    {
        name: 'Coopérer avec les parents d\'élèves',
        href: '#',
        note: 'A'
    },
    {
        name: 'Coopérer avec les partenaires de l\'école',
        href: '#',
        note: 'NA'
    },
    {
        name: 'S\'engager dans une démarche individuelle et collective de développement professionnel',
        href: '#',
        note: 'EC'
    },
]

const educationSavoirs = [
    {
        name: 'Maîtriser les savoirs disciplinaires et leur didactique',
        href: '#',
        note: 'A'
    },
    {
        name: 'Maîtriser la langue française dans le cadre de son enseignement',
        href: '#',
        note: 'A'
    },
]

const educationExpert = [
    {
        name: 'Construire, mettre en œuvre et animer des situations d\'enseignement et d\'apprentissage \n' +
            'prenant en compte la diversité des élèves',
        href: '#',
        note: 'NA'
    },
    {
        name: 'Organiser et assurer un mode de fonctionnement du groupe favorisant l\'apprentissage et la \n' +
            'socialisation des élèves',
        href: '#',
        note: 'NA'
    },
    {
        name: 'Évaluer les progrès et les acquisitions des élèves',
        href: '#',
        note: 'A'
    },
]

export function CompMineurs() {
    const { major } = useParams();
    function handleNote(note) {
        let value = 0;
        let pathColor = '#16a34a';
        let textColor = '#16a34a';

        switch (note) {
            case 'A':
                value = 100;
                break;
            case 'EC':
                value = 50;
                pathColor = '#eab308';
                textColor = '#eab308';
                break;
            case 'NA':
                value = 0;
                pathColor = '#dc2626';
                textColor = '#dc2626';
                break;
            default:
                value = 0;
                break;
        }

        return { value, pathColor, textColor };
    }

    function handleComp(competence) {
        let value = educationPublique;

        switch (competence) {
            case 'service-edu':
                break;
            case 'reussite-edu':
                value = educationReussite;
                break;
            case 'communaute-edu':
                value = educationActeur;
                break;
            case 'savoir-edu':
                value = educationSavoirs;
                break;
            case 'expert-edu':
                value = educationExpert;
                break;
            default:
                break;
        }

        return value;
    }

    return (
        <>
            <ul
                role="list"
                className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
            >
                {handleComp(major).map((competence) => (
                    <li key={competence.email} className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
                        <div className="flex min-w-0 gap-x-4">
                            <CircularProgressbar
                                value={handleNote(competence.note).value}
                                text={`${competence.note}`}
                                className="h-12 !w-fit flex-none rounded-full bg-gray-50"
                                styles={buildStyles({
                                    pathColor: handleNote(competence.note).pathColor,
                                    textColor: handleNote(competence.note).textColor,
                                })}
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm mt-3 font-semibold leading-6 text-gray-900">
                                    <a href={competence.href}>
                                        <span className="absolute inset-x-0 -top-px bottom-0" />
                                        {competence.name}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-x-4">
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">Voir plus</p>
                            </div>
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}