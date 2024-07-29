import axios from "axios"
import { useState, useEffect } from "react"
import { Character, Characters } from "../interfaces/character-interface"

interface Props{
    endPoint: string
}

export const useDataAPI = ({endPoint}:Props) => {

    const [dbzData, setDbzData] = useState<Characters>()
    const [dataCharacter, setDataCharacter] = useState<Character>()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get(`https://dragonball-api.com/api/${endPoint}`)
                const data = res.data
                setDbzData(data)
                setDataCharacter(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

        return() =>{
            setDbzData(undefined)
            setDataCharacter(undefined)
        }

    }, [endPoint])

    return{
        dbzData,
        dataCharacter
    }


}