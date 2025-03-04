import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  const Futer = styled.footer`
    background-color: #fdca3e;
    .card-background {
      background-size: cover;
      background-position: center;
      transition: transform 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .card-background:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    .card-background::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.1)
      );
      transition: left 0.5s;
    }
    .card-background:hover::after {
      left: 100%;
    }
    .showMob {
      display: none;
    }
    .customClass {
      padding-top: 1rem;
    }
    .customClass h3 {
      font-size: 30px;
    }
    .customButton button {
      border: none;
      font-size: 20px;
      padding: 8px 22px;
      border-radius: 40px;
      background-color: #122345;
      color: white;
    }
    @media (max-width: 450px) {
      .customClass h3 {
        font-size: 16px;
      }
      .customButton button {
        font-size: 15px;
      }
      .hideMob {
        display: none;
      }
      .showMob {
        display: block;
      }
      .RegisterNow h1 {
        margin: 10px 0;
        font-weight: 700;
        color: #122345;
        font-size: 22px;
      }
    }
    /* @media only screen and (max-width: 650px) and (orientation: landscape) {
      .customClass h3 {
        font-size: 20px;
      }
      .customButton button {
        font-size: 15px;
      }
    } */
    @media (min-width: 450px) and (max-width: 768px) {
      .hideMob {
        display: none;
      }
      .showMob {
        display: block;
      }
      .RegisterNow h1 {
        margin: 10px 0;
        font-weight: 700;
        color: #122345;
        font-size: 22px;
      }
    }
  `;
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Futer>
      <div className="hideMob">
        <Row>
          <Col className="w-100 text-center  customClass">
            <h3>Seize the opportunities to elevate your education!</h3>
          </Col>
        </Row>
        <Row>
          <Col className="w-100 text-center pb-2 customButton">
            <button className="card-background" onClick={handleScrollToTop}>
              Register Now
            </button>
          </Col>
        </Row>
      </div>
      <div className="showMob">
        <Row>
          <Col className="w-100 text-center  RegisterNow">
            <h1 onClick={handleScrollToTop}>Register Now</h1>
          </Col>
        </Row>
      </div>
    </Futer>
  );
};

export default Footer;
