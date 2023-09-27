import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Example() {

    const competence = [
        {
            "Compétences communes à tous les professeurs et les personnels d'éducation, acteurs du service public d'éducation":
                [
                    "Faire partager les valeurs de la République",
                    "Inscrire son action dans le cadre des principes fondamentaux du système éducatif et dans le liscadre réglementaire de l'école"
                ]
        },
        {
            "Compétences communes à tous les professeurs et les personnels d'éducation, pédagogues et éducateurs au service de la réussite de tous les élèves":
                [
                    "Connaître les élèves et les processus d'apprentissage",
                    "Prendre en compte la diversité des élèves",
                    "Accompagner les élèves dans leur parcours de formation",
                    "Agir en éducateur responsable et selon des principes éthiques",
                    "Maîtriser la langue française à des fins de communication",
                    "Utiliser une langue vivante étrangère dans les situations exigées par son métier",
                    "Intégrer les éléments de la culture numérique nécessaires à l'exercice de son métier"
                ]
        },
        {
            "Compétences communes à tous les professeurs et les personnels d'éducation, acteurs de la communauté éducative":
                [
                    "Coopérer au sein d'une équipe",
                    "Contribuer à l'action de la communauté éducative",
                    "Coopérer avec les parents d'élèves",
                    "Coopérer avec les partenaires de l'école",
                    "S'engager dans une démarche individuelle et collective de développement professionnel",
                ]
        },
        {
            "Compétences communes à tous les professeurs, professionnels porteurs de savoirs et d'une culture commune":
                [
                    "Maîtriser les savoirs disciplinaires et leur didactique",
                    "Maîtriser la langue française dans le cadre de son enseignement"
                ]
        },
        {
            "Compétences communes à tous les professeurs, praticiens experts des apprentissages":
                [
                    "Construire, mettre en œuvre et animer des situations d'enseignement et d'apprentissage prenant en compte la diversité des élèves",
                    "Organiser et assurer un mode de fonctionnement du groupe favorisant l'apprentissage et la socialisation des élèves",
                    "Évaluer les progrès et les acquisitions des élèves"
                ]
        }
    ]
    let listRef = competence.map((ref, index) => {
        let listCompetence = ref[Object.keys(ref)].map((competence, index) => {
            return (
                <fieldset key={index}>
                    <p className="mt-1 text-md leading-6 text-gray-600 font-semibold mt-5">{competence}</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue    -600"
                            />
                            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                complètement novice
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                débutant
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                            compétent
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                expert
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3  pb-10">
                            <input
                                id={competence}
                                name={competence}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                ressources
                            </label>
                        </div>
                    </div>
                </fieldset>
            )
        })
        return (
            <div key={index} className="border-b border-gray-900/50 pb-12">
                <legend className="text-lg font-bold leading-6 text-gray-900">{Object.keys(ref)}</legend>
                {listCompetence}
            </div>
        )
    })



    return (
        <form className='bg-white rounded-md lg:shadow-xl lg:px-8'>
            <h1 className="pt-5 text-2xl font-bold leading-7 text-gray-900">Formulaire de compétences</h1>
            <p className="mt-5 text-md leading-6 text-gray-600">Remplissez le formulaire de compétences suivant en auto-évaluation sur les différentes sujets issues du référentiel </p>
            <div className="space-y-12">
                <div>
                    <div className="p-10 space-y-10">
                        {listRef}
                        <div className="!mt-2 flex items-center justify-end gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}