import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePokemon } from "../features/pokemon/pokemonSlice";
import Loader from "../components/Loader";

const TypeDetail = () => {
    const { id } = useParams();
    const { type, isLoading } = useSelector((state) => state.pokemonData);

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
        type && (
            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold mb-2">{capitalize(type.name)}</h1>
                        <p className="text-gray-700 mb-2">Height: {type.height}</p>
                        <p className="text-gray-700 mb-2">Weight: {type.weight}</p>
                    </div>

                    {type.sprites && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Sprites</h2>
                            <div className="flex flex-wrap">
                                {Object.keys(type.sprites).map((key) => {
                                    if (type.sprites[key] && typeof type.sprites[key] === "string") {
                                        return (
                                            <div key={key} className="m-2">
                                                <img src={type.sprites[key]} alt={key} className="w-20 h-20" />
                                                <p className="text-center text-gray-600">{capitalize(key.replace(/_/g, " "))}</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    )}

                    {type.stats && type.stats.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Stats</h2>
                            <ul className="list-disc list-inside">
                                {type.stats.map((stat) => (
                                    <li key={stat.stat.name}>
                                        {capitalize(stat.stat.name)}: {stat.base_stat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {type.types && type.types.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Types</h2>
                            <ul className="list-disc list-inside">
                                {type.types.map((type) => (
                                    <li key={type.type.name}>{capitalize(type.type.name)}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {type.abilities && type.abilities.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                            <ul className="list-disc list-inside">
                                {type.abilities.map((ability) => (
                                    <li key={ability.ability.name}>{capitalize(ability.ability.name)}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {type.moves && type.moves.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Moves</h2>
                            <ul className="list-none">
                                {type.moves.slice(0, 10).map((move) => (
                                    <li className="my-1 px-2 py-3 bg-neutral-200 text-gray-600" key={move.move.name}>{capitalize(move.move.name)}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        )
    );
};

export default TypeDetail;
