import React from "react";
import "../src/coursespage2.css";
import Header from "../src/components/Header/Header";
import CoursesCardPage from "../src/CoursesCardPage";
import { Container, Row, Col } from "reactstrap";
import courseImg4 from "../src/assets/program.jpg";
import courseImg5 from "../src/assets/web-design.png";
import courseImg6 from "../src/assets/datasci.jpg";
import courseImg7 from "../src/assets/cybersec.jpg";
import courseImg8 from "../src/assets/cloudcomp.jpg";
import courseImg9 from "../src/assets/appdev.jpg";
import Footer from "./components/Footer/Footer";

const coursesData = [
  {
    id: "04",
    title: " Programming Fundamentals for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg4,
  },

  {
    id: "05",
    title: "Web Development and Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg5,
  },

  {
    id: "06",
    title: "Data Science and Analytics 2024",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg6,
  },
  {
    id: "07",
    title: " Cybersecurity Essentials",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg7,
  },

  {
    id: "08",
    title: "Cloud Computing",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg8,
  },

  {
    id: "09",
    title: "Mobile app development 2024",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg9,
  },
];

const CoursesPage = () => {
  return (
    <>
      <Header />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="course__top d-flex justify-content-between align-items-center">
                <div className="course__top__left w-50">
                  <h2>Our Popular Courses</h2>
                  <p>
                    "Explore diverse courses: Programming, Web Dev, Data
                    Science, Cybersecurity, Cloud Computing, and Mobile App Dev.
                    Enhance your skills today!"
                  </p>
                </div>

                <div className="w-50 text-end">
                  <button className="btn">See All</button>
                </div>
              </div>
            </Col>
            {coursesData.map((item) => (
              <Col lg="4" md="6" sm="6">
                <CoursesCardPage key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default CoursesPage;
