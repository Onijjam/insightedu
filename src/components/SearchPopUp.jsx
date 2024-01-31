import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { UsersIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {Link} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/prop-types
export const SearchPopUp = ({open, setOpen, people}) => {
    const [query, setQuery] = useState('')
    const recent = [people[0]]

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.user.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                            <Combobox>
                                {({ activeOption }) => (
                                    <>
                                        <div className="relative">
                                            <MagnifyingGlassIcon
                                                className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <Combobox.Input
                                                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                                placeholder="Rechercher..."
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                        </div>

                                        {(query === '' || filteredPeople.length > 0) && (
                                            <Combobox.Options as="div" static hold className="flex-col sm:flex-row flex transform-gpu divide-x divide-gray-100">
                                                <div
                                                    className={classNames(
                                                        'max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4',
                                                        activeOption && 'sm:h-96'
                                                    )}
                                                >
                                                    {query === '' && (
                                                        <h2 className="mb-4 mt-2 text-xs font-semibold text-gray-500">Recherches récentes</h2>
                                                    )}
                                                    <div className="-mx-2 text-sm text-gray-700">
                                                        {(query === '' ? recent : filteredPeople).map((person) => (
                                                            <Combobox.Option
                                                                as="div"
                                                                key={person.id}
                                                                value={person}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        'flex cursor-default select-none items-center rounded-md p-2',
                                                                        active && 'bg-gray-100 text-gray-900'
                                                                    )
                                                                }
                                                            >
                                                                {({ active }) => (
                                                                    <>
                                                                        <img src={person.user.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full" />
                                                                        <span className="ml-3 flex-auto truncate">{person.user.name}</span>
                                                                        {active && (
                                                                            <ChevronRightIcon
                                                                                className={`${activeOption ? "rotate-90" : "-rotate-90"} sm:rotate-0  ml-3 h-5 w-5 flex-none text-gray-400`}
                                                                                aria-hidden="true"
                                                                            />
                                                                        )}
                                                                    </>
                                                                )}
                                                            </Combobox.Option>
                                                        ))}
                                                    </div>
                                                </div>

                                                {activeOption && (
                                                    <div className="flex h-96 sm:w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                                                        <div className="flex-none p-6 text-center">
                                                            <img src={activeOption.user.imageUrl} alt="" className="mx-auto h-16 w-16 rounded-full" />
                                                            <h2 className="mt-3 font-semibold text-gray-900">{activeOption.user.name}</h2>
                                                            <p className="text-sm leading-6 text-gray-500">{activeOption.role}</p>
                                                        </div>
                                                        <div className="flex flex-auto flex-col justify-between p-6">
                                                            <dl className="h-full grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                                                                <dt className="flex items-center col-end-1 font-semibold text-gray-900">Spécialité</dt>
                                                                <dd className={'flex items-center'}>{activeOption.specialty}</dd>
                                                                <dt className="flex items-center col-end-1 font-semibold text-gray-900">Email</dt>
                                                                <dd className="flex items-center truncate">
                                                                    <a href={`mailto:${activeOption.email}`} className="text-cyan-500 underline">
                                                                        {activeOption.email}
                                                                    </a>
                                                                </dd>
                                                            </dl>
                                                            <div className={'grid grid-cols-2 gap-x-2'}>
                                                                <Link to={'/parcours/competences'} className={"cursor-pointer mt-6 w-full flex justify-center rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"}>
                                                                    Compétences
                                                                </Link>
                                                                <Link to={'/parcours/evolution'} className={"cursor-pointer mt-6 w-full flex justify-center rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"}>
                                                                    Evolution
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Combobox.Options>
                                        )}

                                        {query !== '' && filteredPeople.length === 0 && (
                                            <div className="px-6 py-14 text-center text-sm sm:px-14">
                                                <UsersIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                                                <p className="mt-4 font-semibold text-gray-900">Personne n'a été trouvé.</p>
                                                <p className="mt-2 text-gray-500">
                                                    Nous n'avons rien pu trouver avec votre mot-clé. Merci de réessayer.
                                                </p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </Combobox>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}