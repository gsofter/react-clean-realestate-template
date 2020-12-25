import React, { useState, useEffect } from 'react'
import RoomList from './RoomList'
import * as api from '../../services/api'

const RoomListWrapper = () => {
  const [buildings, setBuildings] = useState([])
  const [cities, setCities] = useState([])
  const fetchBuildings = async () => {
    const res = await api.getAllBuildings()
    setBuildings(res)
  }

  const fetchCities = async () => {
    const res = await api.getCities()
    setCities(res)
  }
  useEffect(() => {
    fetchBuildings()
    fetchCities()
  }, [])
  return <RoomList buildings={buildings} cities={cities} />
}
export default RoomListWrapper
