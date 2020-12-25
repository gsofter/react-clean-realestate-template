import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bodyWrapper: {},
}))
const mapStateToProps = ({ state }) => ({ ...state })
const MainLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className="main-layout">
      <Header />
      <main className={classes.bodyWrapper}>{children}</main>
      <Footer />
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainLayout))
