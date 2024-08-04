import UITag from '../UI/UITag'

interface Props{
    name: string,
    race: string,
    ki: string,
    affiliation: string,
}

const Descriptions = ({ name, race, ki, affiliation}:Props) => {
    return (
        <div className="flex flex-col justify-between p-4 leading-normal bg-black">
            <UITag tag={"h1"} title={name} className={"text-3xl font-bold text-start text-white"} />
            <UITag tag={"p"} title={`Raza: ${race}`} className={"mt-1 text-lg font-semibold text-start text-white"} />
            <UITag tag="p" title={`Ki: ${ki}`} className="mt-1 text-lg font-semibold text-start text-white" />
            <UITag tag="p" title={`Team: ${affiliation}`} className="mt-1 text-lg font-semibold text-start text-white" />
        </div>
    )
}

export default Descriptions