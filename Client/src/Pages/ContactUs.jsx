import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContactCard from '../component/ContactCard';
import GoogleMap from '../component/GoogleMap';
// import Maps from './Map';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function ContactUs() {
   


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            
                <Grid item xs={6}> 
                    <Paper className={classes.paper}><GoogleMap/> </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>  <ContactCard/> </Paper>
                </Grid>

            </Grid>
        </div>
    );
}



