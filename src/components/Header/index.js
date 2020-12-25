import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import ApartmentIcon from '@material-ui/icons/Apartment'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.primary.light,
    backgroundColor: theme.palette.background.paper,
    '& a': {
      textDecoration: 'none',
      ':hover': 'none',
    },
  },
  homeLink: {
    color: theme.palette.primary.dark,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    flexGrow: 1,
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
  },

  title: {
    flexGrow: 1,
    color: theme.palette.primary.dark,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  userAvatar: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      '& span.username': {
        display: 'none',
      },
    },
  },
  appMenu: {
    borderColor: theme.palette.grey[300],
    // backgroundColor: theme.palette.grey[50],
  },
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid',
  },
})((props) => (
  <Menu
    elevation={1}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))
const mapStateToProps = (state) => ({ user: state.user, dispatch: state.dispatch })
const Header = (props) => {
  const classes = useStyles()
  const { user, dispatch } = props
  const handleLogout = () => {
    dispatch({
      type: 'user/LOGOUT',
    })
    setAnchorEl(null)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar} elevation={1}>
        <Toolbar className={classes.toolBar}>
          <Button href="/" className={classes.homeLink}>
            <ApartmentIcon className={classes.icon} />{' '}
          </Button>
          <Typography variant="h5" color="inherit" noWrap className={classes.title}>
            {/* TODO: should display Name from contants list */}
            Offer1 Real Estate
          </Typography>
          {user.authorized ? (
            <div>
              <Button
                startIcon={<AccountCircle />}
                onClick={handleMenu}
                color="inherit"
                className={classes.userAvatar}
              >
                <span className="username">{user.name}</span>
              </Button>
              <StyledMenu
                id="menu-appbar"
                elevation={1}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.appMenu}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>LogOut</MenuItem>
              </StyledMenu>
            </div>
          ) : (
            <Button color="primary" variant="outlined" className={classes.link} href="#/auth/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default withRouter(connect(mapStateToProps)(Header))
