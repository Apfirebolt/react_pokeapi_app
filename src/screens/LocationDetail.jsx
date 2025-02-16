import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleLocation } from "../features/location/locationSlice";
import Loader from "../components/Loader";

const LocationDetail = () => {
  const { id } = useParams();
  const { location, isLoading } = useSelector((state) => state.locationData);

  const dispatch = useDispatch();

  const capitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  useEffect(() => {
    dispatch(getSingleLocation(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    location && (
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-2">
              {capitalize(location.name)}
            </h1>
            <p className="text-gray-700 mb-2">Region: {location.region && capitalize(location.region.name)}</p>
          </div>

          {location.areas && location.areas.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Areas</h2>
              <ul className="list-disc list-inside">
                {location.areas.map((area) => (
                  <li key={area.name}>{capitalize(area.name)}</li>
                ))}
              </ul>
            </div>
          )}

          {location.game_indices && location.game_indices.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Game Indices</h2>
              <ul className="list-disc list-inside">
                {location.game_indices.map((gameIndex) => (
                  <li key={gameIndex.game_index}>
                    Game Index: {gameIndex.game_index}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default LocationDetail;
