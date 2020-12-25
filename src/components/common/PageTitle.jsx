import React from 'react'
import Typography from '@material-ui/core/Typography'

export const PageTitle = ({ title, type = 1 }) => {
  return (
    <Typography variant="h5" component="h5">
      {title}
    </Typography>
  )
}
