import {Disclosure, Transition} from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";


// eslint-disable-next-line react/prop-types
const CompMineursPanel = ({ competenceMineurs, onItemSelect }) => {
    // La fonction handleNote peut être réutilisée ou adaptée de CompMineurs
    function handleNote(note) {
        let value = 0;
        let pathColor = '#16a34a';
        let textColor = '#16a34a';

        switch (note) {
            case 'R':
                value = 100;
                break;
            case 'E':
                value = 75;
                break;
            case 'C':
                value = 50;
                pathColor = '#eab308';
                textColor = '#eab308';
                break;
            case 'D':
                value = 25;
                pathColor = '#eab308';
                textColor = '#eab308';
                break;
            case 'N':
                value = 0;
                pathColor = '#dc2626';
                textColor = '#dc2626';
                break;
            default:
                value = 0;
                break;
        }

        return { value, pathColor, textColor };
    }

    return (
        <ul
            role="list"
            className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
        >
            {/* eslint-disable-next-line react/prop-types */}
            {competenceMineurs.map((competence) => (
                <li key={competence.name} className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6" onClick={() => onItemSelect(competence.evolution)}>
                    <button className="flex items-center min-w-0 gap-x-4">
                        <CircularProgressbar
                            value={handleNote(competence.note).value}
                            text={`${competence.note}`}
                            className="h-12 !w-12 flex-none rounded-full bg-gray-50"
                            styles={buildStyles({
                                pathColor: handleNote(competence.note).pathColor,
                                textColor: handleNote(competence.note).textColor,
                            })}
                        />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {competence.name}
                            </p>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    );
};

// eslint-disable-next-line react/prop-types
export const CompetenceGraphSelectoTable = ({data, setDataLine}) => {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            {data.map((item, index) => (
                <Disclosure key={index} defaultOpen={index === data.length - 1}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex w-full justify-between ${
                                index === 0 ? 'sm:rounded-t-md' : ''
                            } bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75`}>
                                <span>{item.competence}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}
                                />
                            </Disclosure.Button>
                            <Transition
                                show={open}
                                enter="transition duration-400 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel className="px-4 pb-2 pt-2 text-sm text-gray-500">
                                <CompMineursPanel competenceMineurs={item['competence mineurs']} onItemSelect={(itemData) => setDataLine(itemData)} />
                            </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            ))}
        </>
    )
}