export interface Character {
    affiliation: string
    description: string
    gender: string
    id: number
    image: string
    ki: string
    maxKi: string
    name: string
    race: string
    url: string
    transformations: [
        {
            image: string
            name: string
        }
    ]
}


export interface Characters {
    items: Character[]
}
