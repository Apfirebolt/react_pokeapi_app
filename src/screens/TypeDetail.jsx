import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleType } from "../features/type/typeSlice";
import Loader from "../components/Loader";

const TypeDetail = () => {
  const { id } = useParams();
  const { type, isLoading } = useSelector((state) => state.typeData);

  const dispatch = useDispatch();

  const capitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  useEffect(() => {
    dispatch(getSingleType(id));
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
          </div>

          {type.damage_relations && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Damage Relations</h2>
              <div className="flex flex-wrap">
                {Object.keys(type.damage_relations).map((key) => (
                  <div key={key} className="m-2">
                    <h3 className="text-lg font-medium">
                      {capitalize(key.replace(/_/g, " "))}
                    </h3>
                    <ul className="list-disc list-inside">
                      {type.damage_relations[key].map((relation) => (
                        <li key={relation.name}>{capitalize(relation.name)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {type.pokemon && type.pokemon.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Pokemon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {type.pokemon.map((poke) => (
                  <div
                    key={poke.pokemon.name}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-medium">
                      {capitalize(poke.pokemon.name)}
                    </h3>
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

export default TypeDetail;
