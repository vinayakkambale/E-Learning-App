import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Accelerate your learning with our Quick Learning feature, designed for efficient knowledge absorption, ensuring rapid progress and mastery of concepts in record time.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Experience unparalleled support with our 24/7 assistance feature, ensuring you have guidance and assistance whenever you need it, guaranteeing uninterrupted learning.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Receive industry-recognized certifications upon course completion, validating your skills and enhancing your credibility in the job market, opening doors to new opportunities.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;