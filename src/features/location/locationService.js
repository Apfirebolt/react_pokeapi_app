import { toast } from 'react-toastify'
import axiosInstance from '../../plugins/interceptor'

// Get location data
const getLocation = async (search = '', page = 1) => {
    try {
        if (search) {
            const response = await axiosInstance.get(`location?page=${page}&search=${search}`)
            return response.data
        }
        const response = await axiosInstance.get(`location?page=${page}`)
        return response.data
    } catch (err) {
        let errorMessage = 'Something went wrong'
        if (err.response.status === 401) {
            errorMessage = 'Unauthorized access, please login again.'
        }
        toast.error(errorMessage)
    }
}

// Get single location
const getSingleLocation = async (locationId) => {
    try {
        const response = await axiosInstance.get('location/' + locationId)
    
        return response.data
    } catch (err) {
        let errorMessage = 'Something went wrong'
        if (err.response.status === 401) {
            errorMessage = 'Unauthorized access, please login again.'
        }
        toast.error(errorMessage)
    }
}

const locationService = {
    getLocation,
    getSingleLocation,
}

export default locationService