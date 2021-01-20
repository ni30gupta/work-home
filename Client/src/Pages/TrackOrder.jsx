import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(25),
      height: theme.spacing(16),
    },
  },
}));

export default function TrackOrder() {
  const classes = useStyles();

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div className={classes.root}>
      <Paper elevation={5} onClick = {handleClick} >
         <a href="https://www.rivigo.com/#tracking-consignment" target="example"> 
           <img style = {{objectFit: "fill", width:'100%', height:'100%'}} 
           src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/h8b4fuazszztgzr6jo1l" alt=""/>
           </a> 
      </Paper>
      <Paper elevation={5} onClick = {handleClick} >
         <a href="https://web1.spoton.co.in/spotoncontracker.html" target="example"> 
           <img style = {{objectFit: "fill", width:'100%', height:'100%'}} 
           src="https://content3.jdmagicbox.com/comp/delhi/g5/011pxx11.xx11.140307163748.k3g5/catalogue/spoton-courier-mayapuri-industrial-area-phase-2-delhi-courier-services-spoton-2pptduv.jpg?clr=523314" alt=""/>
           </a> 
      </Paper>
      <Paper elevation={5} onClick = {handleClick} >
         <a href="https://www.gatikwe.com/docket-tracker/" target="example"> 
           <img style = {{objectFit: "fill", width:'100%', height:'100%'}} 
           src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1467328648/wpnzsm4yqgtrjsyhstn7.png" alt=""/>
           </a> 
      </Paper>
      <Paper elevation={5} onClick = {handleClick} >
         <a href="https://www.fedex.com/en-in/tracking.html" target="example"> 
           <img style = {{objectFit: "fill", width:'100%', height:'100%'}} 
           src="https://assets.centralindex.com/W/48/bc620b4c8499363ab6f9939413841926.jpg" alt=""/>
           </a> 
      </Paper>
      <Paper elevation={5} onClick = {handleClick} >
         <a href="https://www.rivigo.com" target="example"> 
           <img style = {{objectFit: "fill", width:'100%', height:'100%'}} 
           src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/h8b4fuazszztgzr6jo1l" alt=""/>
           </a> 
      </Paper>
      
      
      

    </div>
  );
}