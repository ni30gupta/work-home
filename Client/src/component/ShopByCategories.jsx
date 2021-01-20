import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      '& > *': {
        margin: theme.spacing(2),
        width: theme.spacing("auto"),
        height: theme.spacing(10),
        padding:theme.spacing(0,5),
        textAlign:'center'
      }
    
    },
  }));

  const useHover = makeStyles(()=> ( {
      roots : {
        "&:hover": {
            transisition: `transform scale(0.8) 500ms`,
        }
      }
  }
    
  ))



export default function ShopByCategories() {

  const classes = useStyles();
  const hov = useHover();



    return (
        <div className={classes.root}>
            <Paper className={hov.roots} style = {{background:'#dfb692' }} elevation={5}  >
            <Typography style  = {{position: 'relative', top: '25%'}} variant = 'h4'> Milk Bottle</Typography>
            </Paper>

            <Paper style = {{background:'#2e978e'}} elevation={5}  >
            <Typography style  = {{position: 'relative', top: '25%'}} variant = 'h4'> Grocery</Typography>
            </Paper>

            <Paper style = {{background:'#ff7f50'}} elevation={5}  >
            <Typography style  = {{position: 'relative', top: '25%'}} variant = 'h4'> e commerce</Typography>
            </Paper>

            <Paper style = {{background:'#5e0645'}} elevation={5}  >
            <Typography style  = {{position: 'relative', top: '25%'}} variant = 'h4'> Food </Typography>
            </Paper>

            <Paper style = {{background:'#41533b'}} elevation={5}  >
            <Typography style  = {{position: 'relative', top: '25%'}} variant = 'h4'> Cake</Typography>
            </Paper>

            <Paper style = {{background:'#c32f2d'}} elevation={5}  >
            <Typography style  = {{position: 'relative', top: '25%'}} variant = 'h4'>Anything Else?</Typography>
            </Paper>

            

        </div>
    )
}
