import { useState } from "react";
import PropTypes from "prop-types";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const [current, setCurrent] = useState(currentPage);

  const handleGo = () => {
    console.log('Current', current);
    if (current > 0 && current <= totalPages) {
      onPageChange(current);
    }
  };

  const setCurrentPage = (e) => {
    setCurrent(e.target.value);
  }

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
      <input
        type="number"
        value={current}
        onChange={(e) => setCurrentPage(e)}
        className="px-2 py-1 border rounded"
      />
      <button
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
        onClick={handleGo}
      >
        Go
      </button>
    </div>
  );
};
Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
