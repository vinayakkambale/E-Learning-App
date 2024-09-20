import React from 'react'
import '../experiment/experiment.css'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Expi = () => {
  return (
   <>
      <Header /> 
      <div className='bg'></div>
      <div className="content">
          <h1>Our Popular Courses</h1>
        </div>

        <div className='crad'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Python Programming Masterclass</Card.Title>
        <Card.Text>
        Master Python programming with advanced techniques in our comprehensive masterclass designed to enhance your coding proficiency.
        </Card.Text>
        <Button variant="primary">Enroll now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4443181/pexels-photo-4443181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>"Cloud Computing Certification: AWS Essentials</Card.Title>
        <Card.Text>
        Obtain certification in AWS essentials with our comprehensive cloud computing course, equipping you with in-demand skills for modern IT environments
        </Card.Text>
        <Button variant="primary">Enroll now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4531875/pexels-photo-4531875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>"Cybersecurity Fundamentals: Practical Workshop Series</Card.Title>
        <Card.Text>
        Enhance your cybersecurity knowledge with our practical workshop series, covering fundamental concepts and hands-on techniques to protect digital assets
        </Card.Text>
        <Button variant="primary">Enroll now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg" />
      <Card.Body>
        <Card.Title>Data Science Essentials: Hands-On Training Program</Card.Title>
        <Card.Text>
        Gain hands-on experience in essential data science skills through our comprehensive training program, preparing you for real-world challenges
        </Card.Text>
        <Button variant="primary">Enroll now</Button>
      </Card.Body>
    </Card>
        </div>
       
        <Footer />
        </>
      
        
    
  )
}

export default Expi
