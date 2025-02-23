import { toast } from "react-toastify";
import axiosInstance from "../../plugins/interceptor";

// Get item data
const getItem = async (params) => {
  try {
    const response = await axiosInstance.get("item", {
      params: {
        offset: params.offset,
        limit: params.limit,
      },
    });
    return response.data;
  } catch (err) {
    let errorMessage = "Something went wrong";
    if (err.response.status === 401) {
      errorMessage = "Unauthorized access, please login again.";
    }
    toast.error(errorMessage);
  }
};

// Get single item
const getSingleItem = async (itemId) => {
  try {
    const response = await axiosInstance.get("item/" + itemId);

    return response.data;
  } catch (err) {
    let errorMessage = "Something went wrong";
    if (err.response.status === 401) {
      errorMessage = "Unauthorized access, please login again.";
    }
    toast.error(errorMessage);
  }
};

const itemService = {
  getItem,
  getSingleItem,
};

export default itemService;
