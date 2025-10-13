import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import Typed from "typed.js"; // Import Typed.js library
import { HashRouter as Router } from "react-router-dom";

export const Banner = () => {
  // Create a ref for the text element that you want to animate
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js once the component is mounted
    const toRotate = ["Web Developer", "Front-End Developer", "UI/UX Designer"];
    const options = {
      strings: toRotate,
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      startDelay: 1000, // delay before typing starts in milliseconds
      backDelay: 1000, // delay before backspacing starts in milliseconds
      loop: true, // loop the animation indefinitely
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    // Cleanup function
    return () => {
      typed.destroy(); // destroy Typed.js instance when the component unmounts
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{"Deepak Erati"}</h1>
              <span className="wrap">
                {"{ "}
                <span ref={textRef}></span> {/* Use the textRef for Typed.js */}
                {"}"}
              </span>
              <p>
               As a dedicated Full Stack and Mobile Application Developer, I am passionate about creating digital experiences that are both visually engaging and seamlessly functional. I enjoy transforming ideas into interactive products that deliver value, combining thoughtful design with efficient development practices.Constantly seeking to learn and grow, I explore new technologies and creative approaches to refine my work and stay aligned with modern industry trends. With a strong focus on user experience and detail, I aim to build products that not only look great but also make a real impact in the digital world.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header" style={{ width: "682px", height: "614px" }} />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
