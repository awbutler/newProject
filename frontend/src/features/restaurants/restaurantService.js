import axios from 'axios'

const API_URL = 'api/restaurant'

const createRestaurant = async (restaurantData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, restaurantData, config)

  return response.data
}

const restaurantService = {
  createRestaurant,
}

export default restaurantService
