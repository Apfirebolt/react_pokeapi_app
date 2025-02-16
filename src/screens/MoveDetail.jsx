import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleMove } from "../features/move/moveSlice";
import Loader from "../components/Loader";

const MoveDetail = () => {
  const { id } = useParams();
  const { move, isLoading } = useSelector((state) => state.moveData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleMove(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{move.name}</h1>
        <p className="text-gray-700 mb-2">Power: {move.power}</p>
        <p className="text-gray-700 mb-2">PP: {move.pp}</p>
        <p className="text-gray-700 mb-2">Accuracy: {move.accuracy}</p>
        <p className="text-gray-700 mb-4">Type: {move.type.name}</p>
        <h2 className="text-xl font-semibold mb-2">Effect</h2>
        <p className="text-gray-700">{move.effect_entries[0].effect}</p>
      </div>
    </div>
  );
};

export default MoveDetail;
