import { Component } from 'react'
import SingleBlog from '../components/SingleBlog'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sass/style.scss";
import productdata from '../data/productdata'
import { Col, Container, Row, Button, } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
 class ProductList extends Component{
 
  
  render(){
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    
      var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
     <Container>
       <div className='container text-center'>
         
       <Col className='m-5'><img  src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/170x112/logo_1495459622__89079.original.png" alt="" /></Col>
       <Col className='d-flex justify-content-center' ><ul className='d-flex gap-3'>
        
        <li>ACCESSORIES</li>
        <span className='border-end border-dark'></span>
        <li>ELECTRONIC</li>
        <span className='border-end border-dark'></span>
        <li>CLOTHING</li>
        <span className='border-end border-dark'></span>
        <li>FURNTURE</li>
        <span className='border-end border-dark'></span>
        <li>GIFT</li>
        <span className='border-end border-dark'></span>
        <li>JEWELRY</li>
        </ul></Col>
        
       
           <Col className='d-flex justify-content-center ' >
            
     <Carousel  style={{width:'1200px'}} className="Carousel">
                    
      <Carousel.Item  interval={2000}>
        <img
          className="d-block w-100"
          src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/1920w/carousel/15/Main-Banner-01.jpg?c=2"
          alt="First slide"
        />
        <Carousel.Caption className='Caption'>
          <h2>KEEP IN TOUCH WITH CLOTHES</h2>
          <h4>UP TO 70% SALE</h4>
          <Button variant='dark' className='rounded-0'>READ MORE</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/1280w/carousel/19/banner-02_2.jpg?c=2"
          alt="Second slide"
        />
        <Carousel.Caption className='Caption'>
          <h2>FASHION WEEK STYLE STREET</h2>
          <h4>UP TO 45% SALE TRENDS AND LOOKS</h4>
          <Button variant='dark' className='rounded-0'>READ MORE</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/1280w/carousel/17/banner-03.jpg?c=2"
          alt="Third slide"
        />
        <Carousel.Caption className='Caption'>
          <h2>WOMEN CLOTHES WIDE COLLECTION</h2>
          <h4>UP TO 70% SALE</h4>
          <Button variant='dark' className='rounded-0'>READ MORE</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>\
    
           </Col>
           <Row className='Box mt-5'>
           <Col md={6} >
            <img src="https://minimal-demo.mybigcommerce.com/product_images/uploaded_images/sub-banner-01.jpg" alt="" />
           <div className='item1'>
           <h2>CLASSICAL SUITS</h2>
            <p>LARGEST COLLECTION</p>
           </div>
           
           
           </Col>
           <Col md={6}>
           <img src="https://minimal-demo.mybigcommerce.com/product_images/uploaded_images/sub-banner-02.jpg" alt="" />
           <div className='item2'>  
            <h2>BEAUTIFUL DRESSES</h2>
           <p>NOW IN STORE</p>
           </div>
           
           </Col>
           </Row>
    
        
         </div>
    
      <Row className='mt-5'>
       
        <Slider {...settings}>
          {productdata.map((fd, i) => {
            return (
            
                <SingleBlog 
                 title={fd.title}
                image={fd.image}
                price={fd.price}
                key={i}
                id={fd.id} />
              
             
            );
          })}
        </Slider>
      </Row>
      <div>
        <h4 className='text-center my-4'> OUR LATEST NEWS </h4>
        <Slider {...setting} className="Slider">
          <div>
            <img   src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/original/uploaded_images/b4.jpg?t=1495518152" alt="" />
            <h5>Architecto Beatae</h5>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque similique vel, </p>
          </div>
          <div>
          <img src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/original/uploaded_images/b1.jpg?t=1495518532" alt="" />
          <h5>Architecto Beatae</h5>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque similique vel, </p>
          </div>
          <div>
          <img src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/original/uploaded_images/b2.jpg?t=1495518492" alt="" />
          <h5>Architecto Beatae</h5>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque similique vel, </p>
          </div>
          <div>
          <img src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/original/uploaded_images/b1.jpg?t=1495518532" alt="" />
             <h5>Architecto Beatae</h5>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque similique vel, </p>
          </div>
          <div>
          <img src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/original/uploaded_images/b6.jpg?t=1495518272" alt="" />
          <h5>Architecto Beatae</h5>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque similique vel, </p>
          </div>
          <div>
          <img src="https://cdn11.bigcommerce.com/s-lyihjg/images/stencil/original/uploaded_images/b4.jpg?t=1495518152" alt="" />
          <h5>Architecto Beatae</h5>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque similique vel, </p>
          </div>
         
        </Slider>
      </div>
     
     </Container>
    )
}
}

export default ProductList
