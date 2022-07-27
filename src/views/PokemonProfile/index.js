import {useState, useEffect} from "react"

import {useParams} from "react-router-dom"
import axios from "axios"
import "./style.css"

function PokemonProfile(){
    const [pokemon, setPokemon] = useState({})
    const {id} = useParams()

    useEffect(
        function(){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response=>{
                console.log(response.data)
                setPokemon(response.data)
            })
        },
    [])
    return(
        <section>
            <h1 className="profile_title">{pokemon.name}</h1>
            {pokemon.sprites && <img src={pokemon.sprites.front_default}></img>}
            <h3>Base Experience: {pokemon.base_experience}</h3>

            <h3>Abilities</h3>
            {   
                pokemon.abilities 
                && 
                pokemon.abilities.map(element => <p>{element.ability.name}</p>)
            }

        </section>
    )
}

export default PokemonProfile;