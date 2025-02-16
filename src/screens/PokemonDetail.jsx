import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePokemon } from "../features/pokemon/pokemonSlice";
import Loader from "../components/Loader";

const PokemonDetail = () => {
  const { id } = useParams();
  const { pokemon, isLoading } = useSelector((state) => state.pokemonData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePokemon(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">{pokemon.name}</h1>
            {pokemon.sprites && (
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-48 h-48 mx-auto"
                />
            )}
            <p className="text-gray-700 mb-2">Height: {pokemon.height}</p>
            <p className="text-gray-700 mb-2">Weight: {pokemon.weight}</p>
            <p className="text-gray-700 mb-4">
                Base Experience: {pokemon.base_experience}
            </p>
            <h2 className="text-xl font-semibold mb-2">Abilities</h2>
            <ul className="list-disc list-inside">
                {pokemon && pokemon.abilities && pokemon.abilities.map((ability, index) => (
                    <li key={index} className="text-gray-700">
                        {ability.ability.name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
};

export default PokemonDetail;
