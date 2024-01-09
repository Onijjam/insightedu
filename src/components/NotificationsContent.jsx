import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Datacontext} from "../App.jsx";

const activityItems = [
    {
        user: {
            name: 'Michael Loup',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        projectName: 'Inscrire son action dans le cadre des principes fondamentaux du système éducatif et dans le cadre réglementaire de l\'école',
        date: '1h',
        dateTime: '2023-01-23T11:00',
        note: 'C',
        new: true,
        idMaj: 1
    },
    {
        user: {
            name: 'Bérénice Sinclair',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        projectName: 'Maîtriser la langue française dans le cadre de son enseignement',
        date: '3h',
        dateTime: '2023-01-23T09:00',
        note: 'R',
        new: true,
        idMaj: 4
    },
    {
        user: {
            name: 'Loïse Troct',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        projectName: 'Coopérer avec les partenaires de l\'école',
        date: '12h',
        dateTime: '2023-01-23T00:00',
        note: 'C',
        new: false,
        idMaj: 3
    },
    {
        user: {
            name: 'Loïse Troct',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        projectName: 'Accompagner les élèves dans leur parcours de formation',
        date: '2d',
        dateTime: '2023-01-21T13:00',
        note: 'D',
        new: false,
        idMaj: 2
    },
    {
        user: {
            name: 'Michael Loup',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        projectName: 'Faire partager les valeurs de la République',
        date: '5d',
        dateTime: '2023-01-18T12:34',
        note: 'R',
        new: false,
        idMaj: 1
    },
]

export default function NotificationsContent() {
    const navigate = useNavigate();
    const { setCompetenceMaj, setCompetenceMin, setCompetenceNote } = useContext(Datacontext);
    const handleButtonEvent = (idCompMaj, NomCompMin, CompNote) => {
        setCompetenceMaj(idCompMaj);
        setCompetenceMin(NomCompMin);
        setCompetenceNote(CompNote);
        navigate("/competences/details/");

    }

    return (
        <ul role="list" className="divide-y divide-gray-100 w-full">
            {activityItems.map((item) => (
                <li key={item.commit} className={`p-4 cursor-pointer hover:bg-gray-100`} onClick={() => handleButtonEvent(item.idMaj, item.projectName, item.note)}>
                    <div className="flex items-center gap-x-3">
                        <img src={item.user.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-800" />
                        <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">{item.user.name}</h3>
                        <time dateTime={item.dateTime} className="relative flex-none text-xs text-gray-500">
                            {item.date}
                            {item.new ?
                                <div className={'absolute h-1.5 w-1.5 rounded-full bg-red-500 top-0 -right-1'}></div>
                                : null
                            }
                        </time>
                    </div>
                    <p className="mt-3 truncate text-sm text-gray-500" title={'A mis un commentaire sur ' + item.projectName}>
                        A mis un commentaire sur <span className="text-gray-700 font-bold">{item.projectName}</span>
                    </p>
                </li>
            ))}
        </ul>
    )
}
