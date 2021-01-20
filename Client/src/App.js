import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import Product from './Pages/Product'
import TrackOrder from './Pages/TrackOrder'
import BulkInquiry from './Pages/BulkInquiry'
import Navbar from './component/Navbar'


export default function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>   
      <Switch>
        <Route path = "/" exact   component = {Home}></Route>
        <Route path = "/contactus" component = {ContactUs}></Route>
        <Route path = "/product" component = {Product}></Route>
        <Route path = "/trackorder" component = {TrackOrder}></Route>
        <Route path = "/bulkinquiry" component = {BulkInquiry}></Route>
      </Switch>
      </Router>
    </div>
  )
}
