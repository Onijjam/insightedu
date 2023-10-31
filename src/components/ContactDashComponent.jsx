import { ChevronRightIcon } from '@heroicons/react/20/solid'

const people = [
    {
        name: 'Blandine Tole',
        email: 'blandinetole@example.com',
        role: 'Staff ISFEC',
        imageUrl:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=4&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=256&h=256',
    },
    {
        name: 'Jeanne Dupuis',
        email: 'jeannedupuis@example.com',
        role: 'Formateur référent',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jean Melin',
        email: 'jeanmelin@example.com',
        role: 'Tuteur école',
        imageUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=4&q=60&w=256&h=256&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Eric Canta',
        email: 'ericcanta@example.com',
        role: 'Tuteur terrain',
        imageUrl:
            'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=facearea&facepad=4&q=60&w=256&h=256&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function ContactDashComponent() {
    return (
        <ul role="list" className="divide-y divide-gray-100 h-full">
            {people.map((person) => (
                <li key={person.email} className="relative h-1/4 flex justify-between items-center gap-x-6 py-5 px-2 hover:bg-gray-100">
                    <a href={`mailto:${person.email}`} className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                <a href={`mailto:${person.email}`}>
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {person.name}
                                </a>
                            </p>
                            <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                {person.role === "Formateur référent" ? (
                                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                      {person.role}
                                    </span>
                                ) : person.role === "Tuteur école" ? (
                                    <span className="inline-flex items-center rounded-full bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-600/20">
                                          {person.role}
                                        </span>
                                ) : person.role === "Tuteur terrain" ? (
                                    <span className="inline-flex items-center rounded-full bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-600/20">
                                          {person.role}
                                        </span>
                                ) : (
                                    <span className="inline-flex items-center rounded-full bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700 ring-1 ring-inset ring-cyan-600/20">
                                      {person.role}
                                    </span>
                                )}
                            </p>
                        </div>
                    </a>
                    <div className="flex shrink-0 items-center gap-x-4">
                        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </div>
                </li>
            ))}
        </ul>
    )
}
