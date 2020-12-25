import React, { useEffect, useState } from 'react'
import RoomDetail from './RoomDetail'
import { useParams } from 'react-router-dom'
import * as api from '../../services/api'

const RoomDetailWrapper = ({ props }) => {
  const { roomId } = useParams()
  const [building, setBuilding] = useState(null)
  useEffect(() => {
    const fetch = async () => {
      const res = await api.getBuilding(roomId)
      setBuilding(res)
    }
    fetch()
  }, [roomId])
  return building === null || building === undefined ? '' : <RoomDetail building={building} />
}

export default RoomDetailWrapper
