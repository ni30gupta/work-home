import React from 'react';
import {  Typography, Toolbar, AppBar, Fab } from '@material-ui/core'
import {  Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Navbar = () => {
    return (
        <div>
            <AppBar   style = {{display: "flex", flexDirection:"row" ,  backgroundColor : "pink"}} position="static">
                <Toolbar style = {{flex:8}}> </Toolbar>
                <Toolbar style = {{display:"flex",flex:3, justifyContent:"space-evenly"}} >
                   
                        <Link to = "/" > <Typography variant="p" > Home </Typography> </Link>
                        <Link to = "/contactus" > <Typography variant="p" > ContactUs </Typography> </Link>
                        <Link to = "/bulkinquiry" > <Typography variant="p" > Inquiry </Typography> </Link>
                        <Link to = "/trackorder" > <Typography variant="p" > Track </Typography> </Link>
                        <Link to = "/product" > <Typography variant="p" > Product </Typography> </Link>
                  
                </Toolbar>
                <Toolbar style = {{display:'flex' ,flex:1, flexDirection:'column'}} >
                    <Fab  color="primary" aria-label="add" style = {{height:20, width:40 }}>
                     <ShoppingCartIcon variant = "outlined" fontSize="small"  /> 
                     </Fab> 
                     <Typography variant = 'h6' style ={{color : "black"}} >Cart {}</Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
