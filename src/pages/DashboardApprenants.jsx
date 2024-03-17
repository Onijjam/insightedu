import ContactDashComponent from "../components/ContactDashComponent.jsx";
import {CompCarouselComponent} from "../components/CompCarouselComponent.jsx";
import ContentSecDashComponent from "../components/ContentSecDashComponent.jsx";

export function DashboardApprenants() {
    return (
        <>
            <div className={"grid lg:grid-cols-6 lg:grid-rows-6 lg:gap-4 lg:h-[80vh] w-full"}>
                <div className={"lg:col-span-4 lg:row-span-6 bg-white sm:rounded-md"}>
                    <ContentSecDashComponent />
                </div>
                <div className={"lg:col-end-7 lg:col-span-2 lg:row-span-2 bg-white lg:rounded-md lg:block hidden"}>
                    <CompCarouselComponent />
                </div>
                <div className={"lg:col-end-7 scrollbar lg:col-span-2 lg:row-span-4 bg-white lg:rounded-md overflow-y-auto lg:block hidden"}>
                    <ContactDashComponent />
                </div>
            </div>
        </>
    )
}