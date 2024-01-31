import {RadarChart} from "../components/RadarChart.jsx";
import dataRadarChart from "../data/CompetenceChartData.json"
import dataCompGraphSelector from "../data/CompetenceMineursDataChart.json"
import {CompetenceGraphSelectoTable} from "../components/CompetenceGraphSelectoTable.jsx";
import {LineChart} from "../components/LineChart.jsx";
import {useState} from "react";

export const Evolution = () => {
    const [dataLine, setDataLine] = useState([]);

    return (
        <>
            <div className={"grid lg:grid-cols-6 lg:grid-rows-6 sm:gap-4 lg:h-[80vh] w-full"}>
                <div className={"h-[55vh] sm:h-min-0 min-w-0 lg:col-span-4 lg:row-span-4 bg-white sm:rounded-md sm:shadow-lg"}>
                    <RadarChart data={dataRadarChart}/>
                </div>
                <div className={"h-[25vh] sm:h-min-0 min-w-0 lg:col-span-4 lg:row-start-5 lg:row-end-7 bg-white sm:rounded-md sm:shadow-lg"}>
                    <LineChart data={dataLine}/>
                </div>
                <div className={"lg:col-start-5 lg:col-end-7 lg:row-span-6 bg-white sm:rounded-md sm:shadow-lg overflow-y-auto scrollbar"}>
                    <CompetenceGraphSelectoTable data={dataCompGraphSelector} setDataLine={setDataLine}/>
                </div>
            </div>
        </>
    )
}