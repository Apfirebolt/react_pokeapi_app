import { toast } from "react-toastify";
import axiosInstance from "../../plugins/interceptor";

// Get machine data
const getMachine = async (params) => {
    try {
        const response = await axiosInstance.get("machine", {
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

// Get single machine
const getSingleMachine = async (machineId) => {
    try {
        const response = await axiosInstance.get("machine/" + machineId);
        return response.data;
    } catch (err) {
        let errorMessage = "Something went wrong";
        if (err.response.status === 401) {
            errorMessage = "Unauthorized access, please login again.";
        }
        toast.error(errorMessage);
    }
};

const machineService = {
    getMachine,
    getSingleMachine,
};

export default machineService;
