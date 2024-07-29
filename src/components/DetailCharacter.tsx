import { useParams } from "react-router-dom";
import { useDataAPI } from "../hooks/useDataAPI";



const DetailCharacter = () => {


    const { id } = useParams<{ id: string }>();
    const { dataCharacter } = useDataAPI({ endPoint: `characters/${id}` });

    console.log(dataCharacter)

    

    if(!dataCharacter) return

    return (
        <>  
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-center text-7xl mt-5">{dataCharacter.name}</h1>
                <p>{dataCharacter.ki}</p>
                <p>{dataCharacter.maxKi}</p>
                <img src={dataCharacter.image} alt={dataCharacter.name} className="w-44" />
                <p><span className="font-bold">Descripcion:</span> {dataCharacter.description}</p>


                <h5 className="text-7xl">Transformaciones</h5>

                <div className="flex flex-wrap gap-5">
                    {
                        dataCharacter?.transformations.map((trans) => (
                            <div className="flex flex-col gap-2">
                                <img src={trans.image} alt="" className="w-44 h-96 object-cover border" />
                                <p className="text-center">{trans.name}</p>
                            </div>
                            
                        ))
                    }
                </div>

            </div>
        </>
    );
};

export default DetailCharacter;
