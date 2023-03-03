import React, { Component } from 'react'
import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';




class SingleBlog extends Component{
    
    
  render(){
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      

    return (
     
   <>
          

          
      <Container>
      <Card style={{ width: '16rem' }} className="border-0">
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body className='body text-center'>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        
          
          />
          <Card.Title className='Title'>{this.props.title}</Card.Title>
          <Card.Text className='Text'>
          ${this.props.price}.00
          </Card.Text>
         

        </Card.Body>
       </Card> 
      </Container>
       
     
       
   
   </>
      
     
     
      
          )
  }
}



export default SingleBlog