'use client';

import { Carousel } from 'flowbite-react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {Link} from "react-router-dom";

const SumComp = [
    {
        educationPublique: {
            R: 1,
            C: 1,
        },
        educationReussite: {
            E: 2,
            R: 1,
            N: 2,
            D: 2,
        },
        educationActeur: {
            N: 1,
            C: 2,
            E: 1,
            R: 1,
        },
        educationSavoirs: {
            R: 2,
        },
        educationExpert: {
            D: 2,
            N: 1,
        },
    },
]

const titlesMap = {
    educationPublique: {
        name: "Service public d'éducation",
        title: "Les professeurs et les professionnels d'éducation",
        to: '/competences/service-edu',
    },
    educationReussite: {
        name: 'Service de la réussite de tous les élèves',
        title: 'Les professeurs et les competencenels d\'éducation, pédagogues et éducateurs',
        to: '/competences/reussite-edu',
    },
    educationActeur: {
        name: 'Acteurs de la communauté éducative',
        title: 'Les professeurs et les competencenels d\'éducation',
        to: '/competences/communaute-edu',
    },
    educationSavoirs: {
        name: 'Porteur de savoirs et d\'une culture commune',
        title: 'Les professeurs et les professionnels',
        to: '/competences/savoir-edu',
    },
    educationExpert: {
        name: 'Experts des apprentissages',
        title: 'Les professeurs et praticiens',
        to: '/competences/expert-edu',
    },
};
export const CompCarouselComponent = () => {
    function handleValue(value) {
        let pathColor = '#16a34a';
        let textColor = '#16a34a';

        if (value >= 75) {
            pathColor = '#16a34a';
            textColor = '#16a34a';
        } else if (value < 75 && value > 25) {
            pathColor = '#eab308';
            textColor = '#eab308';
        } else {
            pathColor = '#dc2626';
            textColor = '#dc2626';
        }

        return { pathColor, textColor };
    }

    const valueMap = {
        N: 0,
        D: 1,
        C: 2,
        E: 3,
        R: 4
    };

    const calculateCompletionPercentage = comp => {
        let totalPoints = 0;
        let achievedPoints = 0;

        for (const subComp in comp) {
            const subCompValues = comp[subComp];
            const keys = Object.keys(subCompValues);
            const test = Object.values(keys).map(value => {
                return subCompValues[value] * valueMap[value];
            });
            const subPoints = Object.values(comp[subComp]).map(value => value);
            achievedPoints += test.reduce((a, b) => a + b, 0);
            totalPoints += subPoints.reduce((a, b) => a + b, 0) * 4;
        }

        return Math.round((achievedPoints / totalPoints) * 100);
    };

    const percentages = {};

    SumComp.forEach(comp => {
        for (const compName in comp) {
            percentages[compName] = calculateCompletionPercentage({[compName]: comp[compName]});
        }
    });

    const people = Object.keys(titlesMap).map(key => {
        const percentage = percentages[key] || 0;
        return {
            name: titlesMap[key].name,
            title: titlesMap[key].title,
            percentage, // Utilisez le pourcentage calculé
            to: titlesMap[key].to,
        };
    });

    return (
        <Carousel slideInterval={3000} pauseOnHover>
            {people.map((competence) => (
                    <div key={competence.title} className="w-full h-full bg-white flex flex-1 flex-col items-center p-4">
                        <Link to={competence.to}>
                            <CircularProgressbar
                                value={competence.percentage}
                                text={`${competence.percentage}%`}
                                className="mx-auto h-24 w-24 flex-shrink-0 rounded-full"
                                styles={buildStyles({
                                    pathColor: handleValue(competence.percentage).pathColor,
                                    textColor: handleValue(competence.percentage).textColor,})}
                            />
                            <h3 className="mt-3 text-sm font-medium text-gray-900">{competence.name}</h3>
                        </Link>
                    </div>
            ))}
        </Carousel>
    )
}