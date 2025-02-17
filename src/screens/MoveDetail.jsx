import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleMove } from "../features/move/moveSlice";
import Loader from "../components/Loader";

const MoveDetail = () => {
  const { id } = useParams();
  const { move, isLoading } = useSelector((state) => state.moveData);

  const dispatch = useDispatch();

  const capitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  useEffect(() => {
    dispatch(getSingleMove(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    move && (
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="my-2 text-center text-3xl text-blue-900 bg-white shadow-md rounded-md px-2 py-3">{capitalize(move.name)}</h1>
            <p className="text-gray-700 mb-2">Power: {move.power}</p>
            <p className="text-gray-700 mb-2">PP: {move.pp}</p>
          </div>

          {move.type && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Type</h2>
              <p>{capitalize(move.type.name)}</p>
            </div>
          )}

          {move.accuracy && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Accuracy</h2>
              <p>{move.accuracy}</p>
            </div>
          )}

          {move.effect_entries && move.effect_entries.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Effect Entries</h2>
              <ul className="list-disc list-inside">
                {move.effect_entries.map((entry) => (
                  <li key={entry.effect}>{entry.effect}</li>
                ))}
              </ul>
            </div>
          )}

          {move.learned_by_pokemon && move.learned_by_pokemon.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Learned By</h2>
              <ul className="list-none">
                {move.learned_by_pokemon.map((pokemon) => (
                  <li className="my-1 px-2 py-3 bg-neutral-200 text-gray-600" key={pokemon.name}>{capitalize(pokemon.name)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default MoveDetail;
