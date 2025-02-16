import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleItem } from "../features/item/itemSlice";
import Loader from "../components/Loader";

const ItemDetail = () => {
    const { id } = useParams();
    const { item, isLoading } = useSelector((state) => state.itemData);

    const dispatch = useDispatch();

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
                    <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
                    <p className="text-gray-700 mb-2">Cost: {item.cost}</p>
                    <h2 className="text-xl font-semibold mb-2">Effect</h2>
                </div>
            </div>
        )
    );
};

export default ItemDetail;
