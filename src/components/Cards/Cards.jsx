import React from "react";
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from "react-countup";

import styles from './Cards.module.css';

const Cards = ({data: {confirmed, deaths, recovered, lastUpdate}}) =>{
    if(!confirmed) {
        return 'Loading.....'
    }
    if(!recovered){
        return 'Loading...'
    }
    console.log(recovered);
    return(
       <div className={styles.container}>
           <Grid container spacing={3} justifyContent="center">
               <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value} 
                            duration={2.5}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
               </Grid>
               <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of recoveries  from COVID-19</Typography>
                    </CardContent>
               </Grid>
               <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of decesed person from COVID-19</Typography>
                    </CardContent>
               </Grid>
           </Grid>
       </div>
    );

}

export default Cards;