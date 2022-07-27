import {useState, useEffect} from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";
import "./style.css"

function PokemonList(){
    const [pokemons, setPokemons] = useState([])

    // useEffect(
    //     function(){
    //         axios.get("https://pokeapi.co/api/v2/pokemon")
    //         .then(
    //             function(response){
    //                 return response.data.results.map(pokemon => axios.get(pokemon.url))
    //             }
    //         ).then(
    //             function(promiseArray){
    //                 return Promise.all(promiseArray)
    //             }
    //         ).then(
    //             function(result){
    //                 setPokemons(result.map(response => response.data))
    //             }
    //         ).catch(
    //             function(error){
    //             console.log(error)
    //         })
    //     },[]
    // )

    useEffect(
        function(){
            axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(
                function(response){
                    setPokemons(response.data.results)
                }
            )
        },[]
    )
    return(
        <section id="pokemonList">
            <h1>Pokemon List</h1>
            <div className="cards">
            {
                pokemons.map(pokemon => <PokemonCard pokemon={pokemon}/>)
            }
            </div>
        </section>
    )
}

export default PokemonList;