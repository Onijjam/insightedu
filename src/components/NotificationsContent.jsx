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
    },
]

export default function NotificationsContent() {
    return (
        <ul role="list" className="divide-y divide-gray-100 w-full">
            {activityItems.map((item) => (
                <li key={item.commit} className="p-4 cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center gap-x-3">
                        <img src={item.user.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-800" />
                        <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">{item.user.name}</h3>
                        <time dateTime={item.dateTime} className="flex-none text-xs text-gray-500">
                            {item.date}
                        </time>
                    </div>
                    <p className="mt-3 truncate text-sm text-gray-500">
                        A mis un commentaire sur <span className="text-gray-700 font-bold">{item.projectName}</span>
                    </p>
                </li>
            ))}
        </ul>
    )
}
