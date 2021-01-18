import { Carousel } from 'react-bootstrap';
import React from 'react';
import img1 from '../img/dog1.jpg'
import img2 from '../img/dog2.jpg'
import img3 from '../img/dog3.jpg'
import ShopByCategories from '../component/ShopByCategories';
import { Typography } from '@material-ui/core';






const Home = () => {
        return (
        <div>
           <Dog/>
           <br/>
                <Typography style = {{textAlign:'center'}} variant= 'h3'> What You Need To deliver ?   </Typography>
           <ShopByCategories/>
        </div>
    );
}

export default Home;

const Dog = () => {
    const imgStyle = {
        height:"80vh"
     }
    return (
        <div>
             <Carousel>
                <Carousel.Item interval={1000}>
                    <img style = {imgStyle}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style = {imgStyle}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style = {imgStyle}
                        className="d-block w-100"
                        src= {img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}