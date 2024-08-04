import { useDataAPI } from "../../hooks/useDataAPI"
import Card from "../Card"

const AllCharacters = () => {

    const { dbzData } = useDataAPI({ endPoint: 'characters' })

    return (
            <div className="grid grid-cols-4 gap-5 place-items-center">
                {

                    dbzData?.items.map((dbz) => (
                        <Card key={dbz.id} {...dbz} url={`detail/${dbz.id.toString()}`}/>
                    ))
                }
            </div>
    )
}

export default AllCharacters