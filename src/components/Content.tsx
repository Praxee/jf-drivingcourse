import React from 'react'
import logo from '../resources/driving-school.png'
import { Box, Container, Grid } from '@mui/material'
// Icons
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const iconColor = '#085aa5'

let Content = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        justifyContent='space-between'
        id='grid-content'
        container
        columnSpacing={4}
      >
        <Grid item xs={12} lg={3} sm={6}>
          <CalendarTodayIcon sx={{fontSize: 60, color: iconColor}} />
          <h3>Plages Horaires</h3>
          <p>Je donne mes cours les vendredis et samedis par tranches de 2h.</p>
        </Grid>
        <Grid item xs={12} lg={3} sm={6}>
          <AttachMoneyIcon sx={{fontSize: 60, color: iconColor}} />
          <h3>Tarifs</h3>
          <p>
            Je demande 90€ par séances de 2h. À régler sur place ou par virement
            bancaire.
          </p>
        </Grid>
        <Grid item xs={12} lg={3} sm={6}>
          <MapOutlinedIcon sx={{fontSize: 60, color: iconColor}} />
          <h3>Point de rendez-vous</h3>
          <p>
            Le point de rendez-vous pour mes cours est{' '}
            <a href='https://goo.gl/maps/WviVnwxAva7pNQLG9' target={'_blank'}>
              Drive-Cool
            </a>
            .
          </p>
        </Grid>
        <Grid item xs={12} lg={3} sm={6}>
          <DirectionsCarIcon sx={{fontSize: 70, color: iconColor}} />
          <h3>Véhicules</h3>
          <p>
            Le véhicule utilisé pour les cours est équipé des doubles commandes.
            Possibilité d'utiliser votre véhicule pour la préparation à l'examen.
          </p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Content