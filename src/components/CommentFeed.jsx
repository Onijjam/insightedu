const activity = [
    { id: 1, type: 'created', person: { name: 'Nom utilisateur' }, date: 'Il y a 7 jours', dateTime: '2023-01-23T10:32' },
    {
        id: 2,
        type: 'commented',
        person: {
            name: 'Nom formateur',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: 'Il y a 7 jours',
        dateTime: '2023-01-20T15:56',
    },
    {
        id: 3,
        type: 'commented',
        person: {
            name: 'Nom utilisateur',
            imageUrl:
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: 'Il y a 4 jours',
        dateTime: '2023-01-23T15:56',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CommentFeed() {

    return (
        <>
            <ul role="list" className="space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                    <li key={activityItem.id} className="relative flex gap-x-4">
                        <div
                            className={classNames(
                                activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                                'absolute left-0 top-0 flex w-6 justify-center'
                            )}
                        >
                            <div className="w-px bg-gray-200" />
                        </div>
                        {activityItem.type === 'commented' ? (
                            <>
                                <img
                                    src={activityItem.person.imageUrl}
                                    alt=""
                                    className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                                />
                                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                    <div className="flex justify-between gap-x-4">
                                        <div className="py-0.5 text-xs leading-5 text-gray-500">
                                            <span className="font-medium text-gray-900">{activityItem.person.name}</span> a commenté
                                        </div>
                                        <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                            {activityItem.date}
                                        </time>
                                    </div>
                                    <p className="text-sm leading-6 text-gray-500">{activityItem.comment}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                                    <span className="font-medium text-gray-900">{activityItem.person.name}</span> a mis à jour la compétence pour la première fois.
                                </p>
                                <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                    {activityItem.date}
                                </time>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex gap-x-3">
                <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                <form action="#" className="relative flex-auto">
                    <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-cyan-500">
                        <label htmlFor="comment" className="sr-only">
                            Rajouter votre commentaire
                        </label>
                        <textarea
                            rows={2}
                            name="comment"
                            id="comment"
                            className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Rajouter votre commentaire..."
                            defaultValue={''}
                        />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                        <div className="space-x-5" />
                        <button
                            type="submit"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Commenter
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}