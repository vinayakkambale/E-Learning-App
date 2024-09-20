import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Client-Feedback/TestimonialPage.css'

const testimonials = [
    {
      id: 1,
      name: 'Sarah Thompson',
      content: 'E-Learners transformed my approach to learning. With its diverse courses and flexible schedule, I could finally pursue my passions on my terms.',
      designation: 'CEO, Capgemini',
      imageUrl: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace this URL with your image URL
    },
    {
        id: 1,
        name: 'David Rodriguez',
        content: 'I am amazed by the support and resources provided by E-Learners. The certification I earned helped me land my dream job.',
        designation: 'CEO, Adoobe',
        imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace this URL with your image URL
      },
      {
        id: 1,
        name: 'Emily Chen',
        content: 'E-Learners made learning convenient and engaging. The Quick Learning feature allowed me to grasp complex concepts effortlessly. Highly recommend.',
        designation: 'CEO, Infosys A',
        imageUrl: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace this URL with your image URL
      },
      {
        id: 1,
        name: 'John Smith',
        content: 'E-Learners exceeded my expectations. The all-time support feature was invaluable whenever I faced challenges. Truly a game-changer in online education',
        designation: 'CEO, TCS',
        imageUrl: 'https://images.pexels.com/photos/901424/pexels-photo-901424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace this URL with your image URL
      },
      {
        id: 1,
        name: 'Maria Garcia',
        content: 'As a busy professional, E-Learners flexible schedule was a lifesaver. The certification I obtained boosted my career prospects significantly. Thank you',
        designation: 'CEO, JP Morgan',
        imageUrl: 'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace this URL with your image URL
      },
      {
        id: 1,
        name: 'Ahmed Khan',
        content: 'E-Learners Quick Learning feature revolutionized how I absorb information. Its remarkable how much Ive learned in such a short time. Highly impressed and grateful.',
        designation: 'CEO, Company A',
        imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace this URL with your image URL
      },
    // Add more testimonials as needed
  ];


const TestimonialPage = () => {
  return (
    <div className="container mt-5">
        <h2 className='mb-2'>Testimonials</h2>
    <div className="row">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="col-md-4">
          <div className="card mb-4">
            <img src={testimonial.imageUrl} className="card-img-top" alt={testimonial.name} />
            <div className="card-body">
              <p className="card-text">{testimonial.content}</p>
            </div>
            <div className="card-footer text-muted">
              <small>{testimonial.name}</small>
              <br />
              <small>{testimonial.designation}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TestimonialPage;
