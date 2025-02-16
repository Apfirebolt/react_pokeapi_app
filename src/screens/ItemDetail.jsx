import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleItem } from "../features/item/itemSlice";
import Loader from "../components/Loader";

const ItemDetail = () => {
  const { id } = useParams();
  const { item, isLoading } = useSelector((state) => state.itemData);

  const dispatch = useDispatch();

  const capitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  useEffect(() => {
    dispatch(getSingleItem(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    item && (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-2">{capitalize(item.name)}</h1>
            <p className="text-gray-700 mb-2">Cost: {item.cost}</p>
          </div>

          {item.attributes && item.attributes.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Attributes</h2>
              <ul className="list-disc list-inside">
                {item.attributes.map((attribute) => (
                  <li key={attribute.name}>{capitalize(attribute.name)}</li>
                ))}
              </ul>
            </div>
          )}

          {item.effect_entries && item.effect_entries.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Effect Entries</h2>
              <ul className="list-disc list-inside">
                {item.effect_entries.map((entry) => (
                  <li key={entry.effect}>{entry.effect}</li>
                ))}
              </ul>
            </div>
          )}

          {item.sprites && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Sprites</h2>
              <img
                src={item.sprites.default}
                alt={item.name}
                className="h-24 w-32"
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ItemDetail;
