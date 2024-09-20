import React from 'react'
import Header from '../Header/Header'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from '../Footer/Footer';
import "../Service-section/service.css"

const ServicesPage = () => {
 
  return ( <>
    <Header/>

    <div className='bg'>
    
         
    </div>
        <div className="h0"> <h2>Our Services <br />
        behind expertise
        </h2>
    </div>
             
              <div class="card-container">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/8867258/pexels-photo-8867258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Jesico Hawkins</Card.Title>
        <Card.Text>
        "Jesico Hawkins excels in our company, demonstrating exceptional skills, dedication, and contribution. Valued team member, highly recommended for her efforts."
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Project Management</ListGroup.Item>
        <ListGroup.Item>Software Development</ListGroup.Item>
        <ListGroup.Item>technical support</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Check-out</Card.Link>
        <Card.Link href="#">talk to expertise</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Card.Body>
        <Card.Title>Jesico Hawkins</Card.Title>
        <Card.Text>
        "Jesico Hawkins excels in our company, demonstrating exceptional skills, dedication, and contribution. Valued team member, highly recommended for her efforts."
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Project Management</ListGroup.Item>
        <ListGroup.Item>Software Development</ListGroup.Item>
        <ListGroup.Item>technical support</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Check-out</Card.Link>
        <Card.Link href="#">talk to expertise</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/8867477/pexels-photo-8867477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Jesico Hawkins</Card.Title>
        <Card.Text>
        "Jesico Hawkins excels in our company, demonstrating exceptional skills, dedication, and contribution. Valued team member, highly recommended for her efforts."
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Project Management</ListGroup.Item>
        <ListGroup.Item>Software Development</ListGroup.Item>
        <ListGroup.Item>technical support</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Check-out</Card.Link>
        <Card.Link href="#">talk to expertise</Card.Link>
      </Card.Body>
    </Card>
    </div>

    <Footer/>
    
    </>
  )
}

export default ServicesPage
