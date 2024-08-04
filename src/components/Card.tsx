import { Link } from "react-router-dom"
import { Character } from '../interfaces/character-interface';
import Descriptions from "./Characters/Descriptions";


const Card = ({ image, name, race, ki, affiliation, url }:Character) => {
    return (

        <Link to={url} className="border hover:bg-gray-100">

            <div className={`bg-[url('/src/assets/img/stars-background.gif')] py-16`}>
                <img className="h-96 w-96 object-contain" src={image} alt="" />
            </div>

            <Descriptions name={name} race={race} ki={ki} affiliation={affiliation}/>

        </Link>



    )
}

export default Card