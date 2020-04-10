
import React from 'react';

import { Card, CardContent, Typography, Grid,} from '@material-ui/core';

import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

import recoveredmain from "../../images/recovered.jpg"

import infectedmain from "../../images/infected.jpg"
import deathmain from "../../images/sad.png"



const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
if(!confirmed){
  return 'loading ..'
}

return (
  

  <div className={styles.container}> 
 
  <Grid container spacing={3} justify="center">
  
  <Grid item component ={Card} xs={12} md ={3} className={cx(styles.card, styles.infected)}>
    
    <CardContent>
    <img className={styles.imager} src ={infectedmain} alt="infectedmain" />
      <Typography color="textPrimary" variant= "h5" gutterBottom> Infected</Typography>
<Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator=','/> </Typography>
      <Typography color="textPrimary"> {new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant="h6" > Number of recorded infected cases of COVID-19 </Typography>
    </CardContent>
  </Grid>
  <Grid item component ={Card} xs={12} md ={3} className={cx(styles.card, styles.recovered)}>
    <CardContent>
    <img className={styles.imager} src ={recoveredmain} alt="recoveredmain" />
      <Typography color="textPrimary" variant= "h5" gutterBottom> Recovered</Typography>
      <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=','/> </Typography>
      <Typography color="textPrimary">  {new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant="h5" > Number of recoveries from COVID-19 </Typography>
    </CardContent>
  </Grid>
  <Grid item component ={Card} xs={12} md ={3} className={cx(styles.card, styles.deaths)}>
    <CardContent>
    <img className={styles.imager} src ={deathmain} alt="deathmain" />
      <Typography color="textPrimary" variant= "h5" gutterBottom> Deaths</Typography>
      <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=','/> </Typography>
      <Typography color="textPrimary"> {new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant="h5" > Number of deaths caused by COVID-19 </Typography>
    </CardContent>
  </Grid>
  
  </Grid>
 
  </div>
 
)
}
export default Cards;

