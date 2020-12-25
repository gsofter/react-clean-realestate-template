import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bodyWrapper: {},
}))
const mapStateToProps = ({ state }) => ({ ...state })
const AuthLayout = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <div className="main-layout">
      <Header />
      <main className={classes.bodyWrapper}>{children}</main>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(AuthLayout))
