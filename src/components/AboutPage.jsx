import Header from './Header/Header'
import Footer from "../components/Footer/Footer"
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import video from "../../src/assets/aboutvid.mp4"

import chooseImg from "../assets/about1.jpg"
import "../components/about1.css"

import ReactPlayer from "react-player";

const AboutPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
    <Header/>

    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              "Choose us for our commitment to excellence in education. Our platform offers diverse courses, personalized learning experiences, and flexible schedules to meet your needs. With interactive content and expert guidance, we empower learners to achieve their goals. Join us to embark on a journey of growth and success in your educational endeavors."
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url={video}
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Footer/>
    
    
    </>
  )
}

export default AboutPage
