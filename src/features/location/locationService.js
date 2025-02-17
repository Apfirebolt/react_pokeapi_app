import { toast } from "react-toastify";
import axiosInstance from "../../plugins/interceptor";

// Get location data
const getLocation = async (params) => {
  try {
    const response = await axiosInstance.get("location", {
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

// Get single location
const getSingleLocation = async (locationId) => {
  try {
    const response = await axiosInstance.get("location/" + locationId);

    return response.data;
  } catch (err) {
    let errorMessage = "Something went wrong";
    if (err.response.status === 401) {
      errorMessage = "Unauthorized access, please login again.";
    }
    toast.error(errorMessage);
  }
};

const locationService = {
  getLocation,
  getSingleLocation,
};

export default locationService;
