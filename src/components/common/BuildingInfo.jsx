import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import * as utils from '../../services/utils'

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  rootContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '1.5em',
  },
  sectionsContainer: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  sectionPanel: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    borderTop: '1px solid rgba(0,0,0,.1)',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      '& .title': {
        marginBottom: theme.spacing(2),
      },
    },
  },
  commonInfoContainer: {
    // padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  infoPanel: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    '& .title': {
      marginBottom: '1em',
    },
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0.6em',
    borderBottom: '1px solid rgba(0,0,0,.1)',
    '& .buildinfo_label': {
      color: theme.palette.secondary.light,
    },
    '& .buildinfo_info': {
      color: theme.palette.secondary.dark,
    },
  },
  infoRowNoBorder: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0.6em',
    '& .buildinfo_label': {
      color: theme.palette.secondary.light,
    },
    '& .buildinfo_info': {
      color: theme.palette.secondary.dark,
    },
  },
}))

export const InfoRow = ({ data, border = true }) => {
  const classes = useStyles()
  const infoRowClassName = border ? classes.infoRow : classes.infoRowNoBorder
  if (typeof data.info === 'string' || !data.info || data.info === undefined || data.info === '')
    return (
      <Grid container className={infoRowClassName}>
        <Grid item xs={6} sm={6} md={4}>
          <Typography variant="body2" className="buildinfo_label">
            {data.label}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={8}>
          <Typography variant="caption" className="buildinfo_info">
            {data.info ?? ''}
          </Typography>
        </Grid>
      </Grid>
    )
  const infos = Object.keys(data.info)
    .filter((key) => key !== 'id')
    .map((key) => data.info[key])
  return (
    <Grid container className={infoRowClassName}>
      <Grid item xs={6} sm={6} md={4}>
        <Typography variant="body2" className="buildinfo_label pull-left">
          {data.label}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={8}>
        <div className="buildinfo_info">
          {infos.map((subInfo, index) => (
            <Typography variant="caption" key={index}>
              {subInfo}
            </Typography>
          ))}
        </div>
      </Grid>
    </Grid>
  )
}

export const BuildingInfo = ({ building }) => {
  const classes = useStyles()
  const addressInfos = [
    {
      label: 'Address',
      info: building.property.address.addressLine1,
    },
    {
      label: 'City',
      info: building.property.address.city,
    },
    {
      label: 'State',
      info: building.property.address.state,
    },
  ]
  const ownerInfos = [
    {
      label: 'Name',
      info:
        building.property.primaryOwner.user.firstName +
        building.property.primaryOwner.user.lastName,
    },
    {
      label: 'email',
      info: building.property.primaryOwner.user.email,
    },
    {
      label: 'phone',
      info: building.property.primaryOwner.user.phone,
    },
    {
      label: 'status',
      info: building.property.primaryOwner.user.status,
    },
  ]

  const escrow = building.escrowCompany
  const escrowCompanyInfos = Object.keys(building.escrowCompany)
    .filter((key) => key !== 'id')
    .map((key) => ({ label: utils.splitCamelCaseToString(key), info: escrow[key] }))

  const titleCompanyInfos = Object.keys(building.titleCompany)
    .filter((key) => key !== 'id')
    .map((key) => ({ label: utils.splitCamelCaseToString(key), info: escrow[key] }))

  return (
    <Grid container className={classes.rootContainer}>
      <Grid item xs={12} md={8} className={classes.sectionsContainer}>
        {/* TODO: here goes sections container */}
        <Grid container className={classes.sectionPanel}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Typography className="title" variant="h5">
              Escrow Company
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            {escrowCompanyInfos.map((info, index) => (
              <InfoRow data={info} border={false} key={index} />
            ))}
          </Grid>
        </Grid>
        <Grid container className={classes.sectionPanel}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Typography className="title" variant="h5">
              Title Company
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            {titleCompanyInfos.map((info, index) => (
              <InfoRow data={info} border={false} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} className={classes.commonInfoContainer}>
        {/* TODO: here goes common info */}
        <div className={classes.infoPanel}>
          <Typography variant="h6" className="title">
            Address
          </Typography>
          {addressInfos.map((info, index) => (
            <InfoRow data={info} key={index} />
          ))}
        </div>
        <div className={classes.infoPanel}>
          <Typography variant="h6" className="title">
            Owner
          </Typography>
          {ownerInfos.map((info, index) => (
            <InfoRow data={info} key={index} />
          ))}
        </div>
      </Grid>
    </Grid>
  )
}
