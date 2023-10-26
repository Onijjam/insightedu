import { ChevronRightIcon } from '@heroicons/react/20/solid'

const people = [
    {
        name: 'Jeanne Dupuis',
        email: 'jeannedupuis@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Blandine Tole',
        email: 'blandinetole@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=4&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=256&h=256',
    },
    {
        name: 'Jean Melin',
        email: 'jeanmelin@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=4&q=60&w=256&h=256&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Eric Canta',
        email: 'ericcanta@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=facearea&facepad=4&q=60&w=256&h=256&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Isabelle Millot',
        email: 'isabellemillot@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=4&q=60&w=256&h=256&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function ContactDashComponent() {
    return (
        <ul role="list" className="divide-y divide-gray-100 px-2">
            {people.map((person) => (
                <li key={person.email} className="relative flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                <a href={`mailto:${person.email}`}>
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {person.name}
                                </a>
                            </p>
                            <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                <a href={`mailto:${person.email}`} className="relative truncate hover:underline">
                                    {person.email}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-4">
                        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </div>
                </li>
            ))}
        </ul>
    )
}
