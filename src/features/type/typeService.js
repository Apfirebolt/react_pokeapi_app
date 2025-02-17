import { toast } from 'react-toastify'
import axiosInstance from '../../plugins/interceptor'

// Get type data
const getType = async (params) => {
    try {
        const response = await axiosInstance.get('type', {
            params: {
                offset: params.offset,
                limit: params.limit,
            },
        })
        return response.data
    } catch (err) {
        let errorMessage = 'Something went wrong'
        if (err.response && err.response.status === 401) {
            errorMessage = 'Unauthorized access, please login again.'
        }
        toast.error(errorMessage)
    }
}

// Get single Type
const getSingleType = async (typeId) => {
    try {
        const response = await axiosInstance.get('type/' + typeId)
    
        return response.data
    } catch (err) {
        let errorMessage = 'Something went wrong'
        if (err.response && err.response.status === 401) {
            errorMessage = 'Unauthorized access, please login again.'
        }
        toast.error(errorMessage)
    }
}

const typeService = {
    getType,
    getSingleType,
}

export default typeService