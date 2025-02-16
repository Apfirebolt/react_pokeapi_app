import { toast } from "react-toastify";
import axiosInstance from "../../plugins/interceptor";

// Get move data
const getMove = async (search = "", page = 1) => {
  try {
    if (search) {
      const response = await axiosInstance.get(
        `move?page=${page}&search=${search}`
      );
      return response.data;
    }
    const response = await axiosInstance.get(`move?page=${page}`);
    return response.data;
  } catch (err) {
    let errorMessage = "Something went wrong";
    if (err.response.status === 401) {
      errorMessage = "Unauthorized access, please login again.";
    }
    toast.error(errorMessage);
  }
};

// Get single move
const getSingleMove = async (moveId) => {
  try {
    const response = await axiosInstance.get("move/" + moveId);

    return response.data;
  } catch (err) {
    let errorMessage = "Something went wrong";
    if (err.response.status === 401) {
      errorMessage = "Unauthorized access, please login again.";
    }
    toast.error(errorMessage);
  }
};

const moveService = {
  getMove,
  getSingleMove,
};

export default moveService;
