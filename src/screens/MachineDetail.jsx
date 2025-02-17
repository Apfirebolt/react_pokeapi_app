import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleMachine } from "../features/machine/machineSlice";
import Loader from "../components/Loader";

const MachineDetail = () => {
  const { id } = useParams();
  const { machine, isLoading } = useSelector((state) => state.machineData);

  const dispatch = useDispatch();

  const capitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  useEffect(() => {
    dispatch(getSingleMachine(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

return (
    machine && (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 bg-white shadow-md rounded-md px-2 py-3">Machine Details</h2>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">ID:</h3>
                    <p>{machine.id}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Item:</h3>
                    <p>{capitalize(machine.item && machine.item.name)}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Move:</h3>
                    <p>{capitalize(machine.move && machine.move.name)}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Version Group:</h3>
                    <p>{capitalize(machine.version_group && machine.version_group.name)}</p>
                </div>
            </div>
        </div>
    )
);
};

export default MachineDetail;
