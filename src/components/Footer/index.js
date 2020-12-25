import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(6),
    '& .title': {
      color: theme.palette.background.default,
    },
    '& p': {
      color: theme.palette.secondary.light,
    },
    // marginTop: theme.spacing(10),
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" className="title">
          Offer1 Real Estate
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          This is testing project for Offer1
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}

export default Footer
