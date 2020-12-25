import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import IconButton from '@material-ui/core/IconButton'

export const TwitterButton = ({ ...props }) => {
  return (
    <IconButton aria-label="twitter" {...props}>
      <TwitterIcon fontSize="default" />
    </IconButton>
  )
}

export const FacebookButton = ({ ...props }) => {
  return (
    <IconButton aria-label="facebook" {...props}>
      <FacebookIcon fontSize="default" />
    </IconButton>
  )
}
