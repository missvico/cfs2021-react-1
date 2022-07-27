import {Link} from "react-router-dom"

function PokemonCard({pokemon}){
    const id= pokemon.url.split("/")[6]
    return(
        <Link to={`/pokemon/${id}`} id="pokemonCard" className="card card-1">
            <h1 className="card__title">
            {pokemon.name}
            
            </h1>
        </Link>
    )
}

export default PokemonCard;