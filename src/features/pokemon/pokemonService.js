import { toast } from 'react-toastify'
import axiosInstance from '../../plugins/interceptor'

// Get pokemon data
const getPokemon = async (params) => {
  try {
    const response = await axiosInstance.get('pokemon', {
      params: {
        offset: params.offset,
        limit: params.limit,
      },
    })
    return response.data
  } catch (err) {
    let errorMessage = 'Something went wrong'
    if (err.response.status === 401) {
      errorMessage = 'Unauthorized access, please login again.'
    }
    toast.error(errorMessage)
  }
}

// Get single Pokemon
const getSinglePokemon = async (pokemonId) => {
  try {
    const response = await axiosInstance.get('pokemon/' + pokemonId)
  
    return response.data
  } catch (err) {
    let errorMessage = 'Something went wrong'
    if (err.response.status === 401) {
      errorMessage = 'Unauthorized access, please login again.'
    }
    toast.error(errorMessage)
  }
}

const pokemonService = {
  getPokemon,
  getSinglePokemon,
}

export default pokemonService