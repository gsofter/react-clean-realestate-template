import apiClient from '../axios'

export async function getAllBuildings() {
  return apiClient
    .get('/buildings')
    .then((response) => {
      return response.data || []
    })
    .catch((err) => console.log(err))
}

export async function getBuilding(id) {
  return apiClient
    .get(`/building`, { params: { roomId: id } })
    .then((response) => {
      return response.data ?? {}
    })
    .catch((err) => console.log(err))
}

export async function getCities(id) {
  return apiClient
    .get(`/cities`)
    .then((response) => {
      return response.data || []
    })
    .catch((err) => console.log(err))
}
