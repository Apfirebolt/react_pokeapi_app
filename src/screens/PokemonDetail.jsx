import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePokemon } from "../features/pokemon/pokemonSlice";
import Loader from "../components/Loader";

const PokemonDetail = () => {
    const { id } = useParams();
    const { pokemon, isLoading } = useSelector((state) => state.pokemonData);

    const dispatch = useDispatch();

    const capitalize = (str) => {
        if (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        return "";
    };

    useEffect(() => {
        dispatch(getSinglePokemon(id));
    }, [dispatch, id]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        pokemon && (
            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="my-2 text-center text-3xl text-blue-900 bg-white shadow-md rounded-md px-2 py-3">{capitalize(pokemon.name)}</h1>
                        <p className="text-gray-700 mb-2">Height: {pokemon.height}</p>
                        <p className="text-gray-700 mb-2">Weight: {pokemon.weight}</p>
                    </div>

                    {pokemon.sprites && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Sprites</h2>
                            <div className="flex flex-wrap">
                                {Object.keys(pokemon.sprites).map((key) => {
                                    if (pokemon.sprites[key] && typeof pokemon.sprites[key] === "string") {
                                        return (
                                            <div key={key} className="m-2">
                                                <img src={pokemon.sprites[key]} alt={key} className="w-20 h-20" />
                                                <p className="text-center text-gray-600">{capitalize(key.replace(/_/g, " "))}</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    )}

                    {pokemon.stats && pokemon.stats.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Stats</h2>
                            <div className="flex flex-wrap">
                                {pokemon.stats.map((stat) => (
                                    <div key={stat.stat.name} className="w-1/2 my-2">
                                        <span className="bg-amber-600 shadow-md p-2 text-white rounded-md">{capitalize(stat.stat.name)}</span><span className="bg-amber-800 ml-1 shadow-md text-white p-2 rounded-md">{stat.base_stat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {pokemon.types && pokemon.types.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Types</h2>
                            <div className="flex flex-wrap">
                                {pokemon.types.map((type) => (
                                    <div key={type.type.name} className="w-1/2">
                                        {capitalize(type.type.name)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {pokemon.abilities && pokemon.abilities.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                            <div className="flex flex-wrap">
                                {pokemon.abilities.map((ability) => (
                                    <div key={ability.ability.name} className="w-1/2">
                                        {capitalize(ability.ability.name)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {pokemon.moves && pokemon.moves.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Moves</h2>
                            <div className="flex flex-wrap">
                                {pokemon.moves.slice(0, 10).map((move) => (
                                    <div className="my-1 px-2 py-3 bg-neutral-200 text-gray-600 w-1/2" key={move.move.name}>
                                        {capitalize(move.move.name)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    );
};

export default PokemonDetail;
