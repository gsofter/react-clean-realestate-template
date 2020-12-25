import React from 'react'
import { Card, CardActionArea, Typography, CardContent, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import HotelIcon from '@material-ui/icons/Hotel'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      textDecoration: 'none',
    },
    border: '1px solid',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))
export const BuildingCard = ({ building }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card} elevation={0}>
      <CardActionArea href={`#/room/${building.id}`}>
        <CardMedia
          className={classes.cardMedia}
          image={building.property.primaryImageUrl}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="body1" component="h5">
            {building.titleCompany.name}
          </Typography>
          <Typography variant="caption">{building.property.description}</Typography>
          <div className="row">
            <div className="col-3">
              <span className="icon" style={{ width: '100%' }}>
                <LocationCityIcon fontSize="small" />
              </span>
            </div>
            <div className="col-9">
              <Typography variant="caption">{building.property.address.city}</Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="icon" style={{ width: '100%' }}>
                <HotelIcon fontSize="small" />
              </span>
            </div>
            <div className="col-9">
              <Typography variant="caption">{building.property.numberBedrooms}</Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span className="icon" style={{ width: '100%' }}>
                <AttachMoneyIcon fontSize="small" />
              </span>
            </div>
            <div className="col-9">
              <Typography variant="caption">{building.price}</Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
