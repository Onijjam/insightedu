import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function BreadCrumb() {
    const [pages, setPages] = useState([]);
    const location = useLocation();

    const titlesMap = {
        educationPublique: {
            name: "Service public d'éducation",
            title: "service-edu",
        },
        educationReussite: {
            name: 'Service de la réussite de tous les élèves',
            title: 'reussite-edu',
        },
        educationActeur: {
            name: 'Acteurs de la communauté éducative',
            title: 'communaute-edu',
        },
        educationSavoirs: {
            name: 'Porteur de savoirs et d\'une culture commune',
            title: 'savoir-edu',
        },
        educationExpert: {
            name: 'Experts des apprentissages',
            title: 'expert-edu',
        },
    };

    useEffect(() => {
        let paths = location.pathname.split("/");

        //remove empty string from paths
        paths = paths.filter(function (el) {
            return el !== "";
        });

        //for each path add a page 
        setPages(paths.map((path, index) => {
            // to get the name of the skill corresponding to the path
            for (const [key, value] of Object.entries(titlesMap)) {
                if (value.title === path) {
                    return {
                        name: value.name,
                        href: `/${paths.slice(0, index + 1).join("/")}`,
                        current: index === paths.length - 1
                    }
                }
            }

            if(path === "parcours") path = "Mon Parcours";
            return {
                name: path.charAt(0).toUpperCase() + path.slice(1),
                href: `/${paths.slice(0, index + 1).join("/")}`,
                current: index === paths.length - 1
            }
        }));
    }, [location.pathname]);

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex flex-wrap items-center space-x-4">
                <li>
                    <div>
                        <a href="/" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <a
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}