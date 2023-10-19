import {Fragment, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "./../assets/ICT-2020-LOGO-ISFEC-FRANCOIS-ASSISE.png"
import {Link} from "react-router-dom";

const user = {
    name: 'Nom Utilisateur',
    email: 'nom@utilisateur.com',
    imageUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigationIsfec = [
    { name: 'Accueil', to: '/', current: true },
    { name: 'Formateurs', to: '/', current: false },
    { name: 'Apprenants', to: '/', current: false },
    { name: 'Statistiques', to: '/', current: false },
    { name: 'Contact', to: '/', current: false },
];

const navigationFormateur = [
    { name: 'Accueil', to: '/', current: true },
    { name: 'Compétences', to: '/', current: false },
    { name: 'Apprenants', to: '/', current: false },
    { name: 'Statistiques', to: '/', current: false },
    { name: 'Contact', to: '/', current: false },
];

const navigationApprenant = [
    { name: 'Accueil', to: '/', current: true },
    { name: 'Compétences', to: '/competences', current: false },
    { name: 'Contact', to: '/contact', current: false },
]
const userNavigation = [
    { name: 'Votre Profil', to: '/' },
    { name: 'Paramètres', to: '/' },
    { name: 'Se déconnecter', to: '/' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/prop-types
export default function NavBar({ children, utilisateur }) {
    const [navigation, setNavigation] = useState(
        utilisateur === "formateur" ? navigationFormateur :
            utilisateur === "isfec" ? navigationIsfec :
                navigationApprenant
    );

    const [currentHeader, setCurrentHeader] = useState("Accueil");

    const updateHeaderTitle = (itemName) => {
        setCurrentHeader(itemName);
    };

    const handleNavigationClick = (clickedItemName) => {
        setNavigation((prevNavigation) =>
            prevNavigation.map((item) => {
                if (item.name === clickedItemName) {
                    return { ...item, current: true };
                } else {
                    return { ...item, current: false };
                }
            })
        );
    };

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="border-b border-gray-200 bg-white">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 justify-between">
                                    <div className="flex">
                                        <Link to={"/"} className="flex flex-shrink-0 items-center">
                                            <img
                                                className="block h-8 w-auto lg:hidden"
                                                src={logo}
                                                alt="Your Company"
                                            />
                                            <img
                                                className="hidden h-8 w-auto lg:block"
                                                src={logo}
                                                alt="Your Company"
                                            />
                                        </Link>
                                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.to}
                                                    onClick={() => {
                                                        handleNavigationClick(item.name);
                                                        updateHeaderTitle(item.name);
                                                    }}
                                                    className={classNames(
                                                        item.current
                                                            ? 'border-cyan-500 text-gray-900'
                                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                        <button
                                            type="button"
                                            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <Link
                                                                    to={item.to}
                                                                    onClick={() => {
                                                                        updateHeaderTitle(item.name);
                                                                    }}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <Link
                                            to={item.to}
                                            key={item.name}
                                            onClick={() => {
                                                handleNavigationClick(item.name);
                                                updateHeaderTitle(item.name);
                                            }}
                                            className={classNames(
                                                item.current
                                                    ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                                                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                                                'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 pb-3 pt-4">
                                    <div className="flex items-center px-4">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-gray-800">{user.name}</div>
                                            <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        {userNavigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                onClick={() => {
                                                    updateHeaderTitle(item.name);
                                                }}
                                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <div className="py-10">
                    <header>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">{currentHeader}</h1>
                        </div>
                    </header>
                    <main className={"min-h-[92vh] lg:min-h-[80vh]"}>
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-full">{ children }</div>
                    </main>
                </div>
            </div>
        </>
    )
}
