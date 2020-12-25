import mock from '../mock'
import buildings from '../../../../homes.json'
const cities = buildings.map((b) => b.property.address.city)

mock.onGet('/api/buildings').reply((request) => {
  // TODO: check authentication
  return [200, buildings]
})

mock.onGet('/api/building').reply((request) => {
  // TODO: check authentication
  const roomId = request.params.roomId
  const building = buildings.find((b) => b.id.toString() === roomId)
  return [200, building]
})

mock.onGet('/api/cities').reply((request) => {
  // TODO: check authentication
  return [200, cities]
})
