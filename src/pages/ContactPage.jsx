import { EnvelopeIcon} from '@heroicons/react/20/solid'

const people = [
    {
        name: 'Jeanne Dupuis',
        title: 'Service public d\'éducation',
        role: 'Formateur/Formatrice',
        email: 'jeannedupuis@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Blandine Tole',
        title: 'Secrétaire',
        role: 'Staff ISFEC',
        email: 'blandinetole@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=4&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=256&h=256',
    },
    {
        name: 'Jean Melin',
        title: 'Experts des apprentissages',
        role: 'Formateur/Formatrice',
        email: 'janecooper@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=4&q=60&w=256&h=256&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Eric Canta',
        title: 'Porteur de savoirs et d\'une culture commune',
        role: 'Formateur/Formatrice',
        email: 'janecooper@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=facearea&facepad=4&q=60&w=256&h=256&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Isabelle Millot',
        title: 'Service de la réussite de tous les élèves',
        role: 'Formateur/Formatrice',
        email: 'janecooper@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=4&q=60&w=256&h=256&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function ContactPage() {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 p-5 sm:p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {people.map((person) => (
                <li
                    key={person.email}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                >
                    <div className="flex flex-1 flex-col p-8">
                        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
                        <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-sm text-gray-500">{person.title}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">

                                {person.role === "Formateur/Formatrice" ? (
                                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                      {person.role}
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center rounded-full bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700 ring-1 ring-inset ring-cyan-600/20">
                                      {person.role}
                                    </span>
                                )}
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <a
                                    href={`mailto:${person.email}`}
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
