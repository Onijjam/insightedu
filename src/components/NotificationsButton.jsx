import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {BellIcon} from "@heroicons/react/24/outline/index.js";
import NotificationsContent from "./NotificationsContent.jsx";

export default function NotificationsButton() {
    return (
        <Popover className="relative">
            <Popover.Button className="relative inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-500 focus:outline-none">
                <BellIcon className="h-6 w-6" aria-hidden="true" />
                <div className={'absolute h-1.5 w-1.5 rounded-full bg-red-500 top-1 right-1'}></div>
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max sm:-translate-x-3/4 -translate-x-1/2 px-4">
                    <div className="w-screen max-w-[19rem] max-h-[15rem] overflow-y-auto scrollbar-notifcations flex-auto rounded-3xl bg-white text-sm leading-6 shadow-lg ring-0 ring-gray-900/5">
                        <NotificationsContent />
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
