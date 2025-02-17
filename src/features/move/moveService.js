import { toast } from "react-toastify";
import axiosInstance from "../../plugins/interceptor";

// Get move data
const getMove = async (params) => {
  try {
    const response = await axiosInstance.get('move', {
      params: {
        offset: params.offset,
        limit: params.limit,
      },
    })
    return response.data
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
