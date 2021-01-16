import React from 'react';
import {  Typography, Toolbar, AppBar } from '@material-ui/core'
import { BrowserRouter as Router, Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <AppBar   style = {{display: "flex", flexDirection:"row" ,  backgroundColor : "pink"}} position="static">
                <Toolbar style = {{flex:3 }}> </Toolbar>
                <Toolbar style = {{display:"flex",flex:"1", justifyContent:"space-evenly"}} >
                   
                        <Link to = "/" > <Typography variant="p" > Home </Typography> </Link>
                        <Link to = "/contactus" > <Typography variant="p" > ContactUs </Typography> </Link>
                        <Link to = "/bulkinquiry" > <Typography variant="p" > Inquiry </Typography> </Link>
                        <Link to = "/trackorder" > <Typography variant="p" > Track </Typography> </Link>
                        <Link to = "/product" > <Typography variant="p" > Product </Typography> </Link>
                  
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
