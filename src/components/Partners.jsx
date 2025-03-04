import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import part1 from "../assets/logos/Brunel University London.png";
import part2 from "../assets/logos/Charles Darwin University Scholarships.png";
import part3 from "../assets/logos/Deakin University.png";
import part6 from "../assets/logos/Macquarie University.png";
import part7 from "../assets/logos/MURDOCH UNIVERSITY.png";
import part8 from "../assets/logos/RMIT.png";
import part4 from "../assets/logos/UNSW Scholarships.png";
import part5 from "../assets/logos/University of Technology - Sydney.png";
import part9 from "../assets/logos/Victoria University.png";
import part10 from "../assets/logos/Western Sydney University.png";
import part11 from "../assets/images/logo21.webp";
import partRight from "../assets/images/partnerlogoright.webp";
const Partners = () => {
  const Partners = styled.section`
    width: 100%;
    .customcenter {
      justify-content: center;
      align-items: center;
    }
    .card-background {
      background-size: cover;
      background-position: center;
      transition: transform 0.3s ease;
      position: relative;
      overflow: hidden;
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
        &::after {
          left: 100%;
        }
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));
        transition: left 0.5s;
      }
    }
    h3 {
      font-size: 40px;
      font-weight: 700;
      @media (max-width: 450px) { font-size: 24px; }
      @media (min-width: 768px) and (max-width: 1024px) { font-size: 28px; }
    }
    .logimg-div {
      background-color: #eef1f3;
      width: 250px;
      height: 80px;
      display: flex;
      img {
        margin: auto;
        width: 20vw !important;
        @media (max-width: 450px) { max-width: 106px !important; }
        @media (min-width: 450px) and (max-width: 768px) { max-width: 120px !important; }
        @media (min-width: 768px) and (max-width: 1024px) { max-width: 106px !important; }
        @media (min-width: 992px) and (max-width: 1024px) { max-width: 120px !important; }
        @media (min-width: 1024px) and (max-width: 1440px) { max-width: 156px !important; }
      }
      @media (max-width: 450px) { width: 195px; }
      @media (min-width: 768px) and (max-width: 1024px) { width: 195px; }
    }
    .partners-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      width: 100%;
      margin-top: 1rem;
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 450px) {
        grid-template-columns: 1fr;
      }
    }
    .btm-red { border-bottom: 3.5px solid red; }
    .customWidth {
      max-width: 105%;
      @media (min-width: 768px) and (max-width: 992px) { max-width: 116%; }
    }
    .removeMobile {
      @media (max-width: 768px) { display: none !important; }
    }
  `;

  const partners = [
    { src: part1, alt: "La Trobe University" },
    { src: part2, alt: "La Trobe University" },
    { src: part3, alt: "Deakin University" },
    { src: part4, alt: "Deakin University" },
    { src: part5, alt: "Deakin University" },
    { src: part6, alt: "Deakin University" },
    { src: part7, alt: "Deakin University" },
    { src: part8, alt: "Deakin University" },
    { src: part9, alt: "Deakin University" },
    { src: part10, alt: "Deakin University" },
    { src: part11, alt: "Deakin University" }
  ];

  return (
    <Partners>
      <Container className="my-4">
        <Row className="customCenter">
          <Col md={7} className="d-flex align-items-center justify-content-center flex-column">
            <h3 className="text-start">
              <span className="btm-red">Top</span> Universities
            </h3>
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="logimg-div card-background">
                  <img src={partner.src} alt={partner.alt} className="img-fluid" style={{ maxWidth: "200px" }} />
                </div>
              ))}
              <div className="logimg-div card-background customcenter">
                <h5><span className="part5">& many more...</span></h5>
              </div>
            </div>
          </Col>
          <Col md={5} className="d-flex align-items-center justify-content-center removeMobile custom768">
            <div className="text-center">
              <img src={partRight} alt="Student" className="img-fluid customWidth" />
            </div>
          </Col>
        </Row>
      </Container>
    </Partners>
  );
};

export default Partners;
