import { CheckIcon, XMarkIcon, ArrowPathIcon} from '@heroicons/react/20/solid'

const timeline = [
    {
        id: 1,
        content: "Votre niveau a été modifié par",
        target: 'Nom formateur',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: ArrowPathIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 2,
        content: "Votre niveau n'a pas été validé par",
        target: 'Nom formateur',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: XMarkIcon,
        iconBackground: 'bg-red-500',
    },
    {
        id: 3,
        content: 'Votre niveau est validé par',
        target: 'Nom formateur',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NotificationsContent() {
    return (
        <div className="flow-root">
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                  <span
                      className={classNames(
                          event.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                      )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {event.content}{' '}
                                            <a href={event.href} className="font-medium text-gray-900">
                                                {event.target}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.datetime}>{event.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
