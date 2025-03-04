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
      max-width: 250px;
      width: 100%;
      height: 80px;
      display: flex;
      position: relative;
      img {
        margin: auto;
        // width: 20vw !important;
        transition: opacity 0.3s ease;
        @media (max-width: 450px) { max-width: 106px !important; width: 100%!important; }
        @media (min-width: 450px) and (max-width: 768px) { max-width: 120px !important; width: 100%!important; }
        @media (min-width: 768px) and (max-width: 1024px) { max-width: 106px !important; width: 100%!important; }
        @media (min-width: 992px) and (max-width: 1024px) { max-width: 120px !important; width: 100%!important; }
        @media (min-width: 1024px) and (max-width: 1440px) { max-width: 156px !important; width: 100%!important; }
      }
      .hover-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 10px;
        text-align: center;
        font-size: 14px;
      }
      &:hover {
        img {
          opacity: 0.3;
        }
        .hover-text {
          opacity: 1;
        }
      }
      @media (max-width: 450px) { max-width: 195px; width: 100%; }
      @media (min-width: 768px) and (max-width: 1024px) { max-width: 195px; width: 100%; }
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
    { src: part1, alt: "Brunel University London", text: "Scholarship Up to 30% Dummy" },
    { src: part2, alt: "Charles Darwin University", text: "Scholarship Up to 30%" },
    { src: part3, alt: "Deakin University", text: "25% Merit Scholarship" },
    { src: part4, alt: "UNSW", text: "Tuition Fee Discounts for international students" },
    { src: part5, alt: "UTS", text: "Scholarships Up to $40,000" },
    { src: part6, alt: "Macquarie University", text: "Early Acceptance Scholarship – $10,000/year" },
    { src: part7, alt: "Murdoch University", text: "Scholarship Upto 20%" },
    { src: part8, alt: "RMIT", text: "20% Tuition Fee Reduction" },
    { src: part9, alt: "Victoria University", text: "Scholarships Up to 30%" },
    { src: part10, alt: "Western Sydney University", text: "Scholarship Up to $6,000" },
    { src: part11, alt: "University", text: "Transforming Lives Through Education" }
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
                  <img src={partner.src} alt={partner.alt} className="img-fluid" />
                  <div className="hover-text">{partner.text}</div>
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
