import { Link } from "react-router-dom"
import { useDataAPI } from "../hooks/useDataAPI"

const AllCharacters = () => {

    const { dbzData } = useDataAPI({ endPoint: 'characters' })

    console.log(dbzData)


    return (
        <>
            <div className="flex justify-center flex-wrap">

                {

                    dbzData?.items.map((dbz) => (
                        <Link key={dbz.id} to={`detail/${dbz.id.toString()}`} className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100">

                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-32 md:rounded-none md:rounded-s-lg" src={dbz.image} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dbz.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dbz.race}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dbz.ki}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dbz.affiliation}</p>
                            </div>

                        </Link>
                    ))


                }

            </div>




        </>
    )
}

export default AllCharacters