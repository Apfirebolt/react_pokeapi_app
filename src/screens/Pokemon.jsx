import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonData } from "../features/pokemon/pokemonSlice";
import Loader from "../components/Loader";

const Home = () => {
  const { pokemonList, isLoading } = useSelector((state) => state.pokemonData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonData());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="my-5 text-center text-3xl text-blue-900">
        Pokemon
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-neutral-100 border border-neutral-300">
          <thead>
            <tr>
              <th className="p-4 border-b-2 border-gray-300 text-left leading-4 text-blue-900">
                #
              </th>
              <th className="p-4 border-b-2 border-gray-300 text-left leading-4 text-blue-900">
                Name
              </th>
              <th className="p-4 border-b-2 border-gray-300 text-center leading-4 text-blue-900">
                URL
              </th>
            </tr>
          </thead>
          <tbody>
            {pokemonList &&
              pokemonList.results &&
              pokemonList.results.map((pokemon, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 capitalize">
                    {pokemon.name}
                  </td>
                  <td className="py-3 px-4 border-b text-center border-gray-300">
                    {pokemon.url}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Home;
