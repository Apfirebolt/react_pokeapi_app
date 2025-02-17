import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTypeData } from "../features/type/typeSlice";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const Type = () => {
  const { typeList, isLoading } = useSelector((state) => state.typeData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  const onPageChange = (page) => {
    setCurrentPage(Number(page));
    dispatch(
      getTypeData({
        offset: (page - 1) * itemsPerPage,
        limit: itemsPerPage,
      })
    );
  };

  const goToDetail = (url) => {
    // https://pokeapi.co/api/v2/move/12/
    const id = url.split("/")[6];
    navigate(`/type/${id}`);
  };

  useEffect(() => {
    dispatch(
      getTypeData({
        offset: 0,
        limit: itemsPerPage,
      })
    );
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="my-2 text-center text-3xl text-blue-900 bg-white shadow-md rounded-md px-2 py-3">Type</h1>
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
            {typeList &&
              typeList.results &&
              typeList.results.map((type, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {index + 1 + (currentPage - 1) * itemsPerPage}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 capitalize">
                    {type.name}
                  </td>
                  <td
                    className="py-3 px-4 border-b text-center border-gray-300 hover:text-amber-500 transition-all duration-200 cursor-pointer"
                    onClick={() => goToDetail(type.url)}
                  >
                    {type.url}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalItems={typeList.count}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </main>
  );
};

export default Type;
