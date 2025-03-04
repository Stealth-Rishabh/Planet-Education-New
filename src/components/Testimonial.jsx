/* eslint-disable no-dupe-keys */
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import test1 from "../assets/images/testimonial1.webp";
import test2 from "../assets/images/testimonial2.webp";
import test3 from "../assets/images/testimonial3.webp";
import test4 from "../assets/images/testimonial4.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrowImage from "../assets/images/leftarrow.webp";
import rightArrowImage from "../assets/images/rightarrow.webp";

const TestimonialSection = styled.section`
  /* background-color: #eef1f3; */
  .customFlex {
    justify-content: center;
  }
  .in-heading {
    font-size: 30px;
    font-weight: 700;
  }
  h2 {
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    padding: 15px 0;
    color: #122345;
  }

  .slider-container .slick-prev,
  .slider-container .slick-next {
    z-index: -1;
  }

  .slider-container .slick-prev {
    left: 10px;
  }

  .slider-container .slick-next {
    right: 10px;
  }

  .slider-container .slick-prev:before,
  .slider-container .slick-next:before {
    color: transparent;
    font-size: 1px;
  }
  .slider-container {
    position: relative;
    padding: 0 40px;
  }
  .slick-arrow .slick-prev::before {
    content: "";
    font-size: 0px !important;
  }
  .slick-prev::before {
    content: "" !important;
    font-size: 0px !important;
  }
  .slick-prev {
    font-size: 0px !important;
  }
  @media (max-width: 450px) {
    .hideResp {
      display: none;
    }
    .in-heading {
      font-size: 20px;
      font-weight: 600;
      text-align: left;
    }
    /* h2 {
      font-size: 28px;
    } */
  }
  @media only screen and (max-width: 650px) and (orientation: landscape) {
    .hideResp {
      display: none;
    }
  }
  @media (min-width: 450px) and (max-width: 768px) {
    .in-heading {
      font-size: 24px;
    }
  }
`;
const ArrowDiv = styled.div`
  display: block;
  background: url(${(props) => props.image}) no-repeat;
  background-size: 80px;
  border-radius: 50%;
  padding: 50px;
  margin-right: 38px;
  width: 20px;
  height: 20px;
  color: white;
  z-index: 999999;

  &:before {
    content: "" !important;
    font-size: 0px !important;
  }
  &:hover {
    display: block;
    background: url(${(props) => props.image}) no-repeat;
    background-size: 80px;

    border-radius: 50%;
    padding: 50px;
    margin-right: 38px;
    width: 20px;
    height: 20px;
    color: white;
    z-index: 999999;
  }
`;
const ArrowDivv = styled.div`
  display: block;
  background: url(${(props) => props.image}) no-repeat;
  background-size: 80px;

  border-radius: 50%;
  padding: 50px;
  margin-left: 38px;
  width: 10px;
  height: 10px;
  color: white;
  z-index: 999999;

  &:before {
    content: "" !important;
    font-size: 0px !important;
  }
  &:hover {
    display: block;
    background: url(${(props) => props.image}) no-repeat;
    background-size: 80px;
    border-radius: 50%;
    padding: 50px;
    margin-left: 38px;
    width: 10px;
    height: 10px;
    color: white;
    z-index: 999999;
  }
`;

const TestimonialSlider = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <ArrowDiv
        className={className}
        image={rightArrowImage}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <ArrowDivv
        className={className}
        image={leftArrowImage}
        onClick={onClick}
      />
    );
  }
  const H2 = styled.h2`
    margin-bottom: 0;
    @media (max-width: 450px) {
      padding: 10px 0;
    }
    h2 {
      font-size: 35px;
      font-weight: 700;
      text-align: center;
      padding: 15px 0;
      color: #122345;
      /* background-color: #eef1f3; */
      margin-bottom: 0;
      padding-bottom: 10px;
      /* margin-top: 30px; */
      @media (max-width: 450px) {
        font-size: 28px;
        padding: 10px 0;
      }
      @media (min-width: 450px) and (max-width: 768px) {
        font-size: 24px;
      }
    }
    .underline {
      position: relative;
      cursor: pointer;
    }
    .underline::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 4px;
      width: 0%;
      background-color: #122345;
      transition: all ease 1s;
      @media (max-width: 450px) {
        height: 3px;
      }
    }
    .underline:hover::after {
      width: 100%;
    }
  `;
  // const h2Style = {
  //   fontSize: "35px",
  //   fontWeight: 700,
  //   textAlign: "center",
  //   padding: "15px 0",
  //   color: "#122345",s
  //   // backgroundColor: "#eef1f3",
  //   marginBottom: "0",
  //   paddingBottom: "10px",
  //   marginTop: "30px",
  // };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl: true,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <H2>
        <div className="testiTitle">
          <h2>
            <span className="underline">Our Success Stories</span>
          </h2>
        </div>
      </H2>

      <Slider className="slider-container" {...settings}>
        <TestimonialSection>
          <Container>
            <Row>
              <Col className="text-center text-md-left">
                <Row className="customFlex">
                  <Col lg={10}>
                    <Row>
                      <Col xs={4} lg={5}>
                        <img className="w-100" src={test1} alt="" />
                      </Col>
                      <Col xs={7} lg={7}>
                        <div className="tText pt-4">
                          <h3 className=" in-heading">Hemanth Rajkumar</h3>
                          <p className="text-muted text-start">
                            "At first when I heard about planet education and
                            being a new consultancy in Chennai I was hesitant.
                            Later I went for a meeting with Mr. Vaasantosh, and
                            I would say, planet Education would be your right
                            choice to go to if you want a hassle-free procedure.
                            Now I am a student at UTS, Sydney and all the credit
                            goes to planet education."
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </TestimonialSection>
        <TestimonialSection>
          <Container>
            <Row>
              <Col className="text-center text-md-left">
                <Row className="customFlex">
                  <Col lg={10}>
                    <Row>
                      <Col xs={4} lg={5}>
                        <img className="w-100" src={test3} alt="" />
                      </Col>
                      <Col xs={7} lg={7}>
                        <div className="tText pt-4">
                          <h3 className="in-heading">Pramash Panchal</h3>
                          <p className="text-muted text-start">
                            “ Hi, my name is Pramash Panchal and Thanks to the
                            whole team for the right guidance because of which I
                            got my admission in Canada. I have visited many
                            consultancies but found planet education to be the
                            best as their team is ndeed helpful and provide the
                            best guidance. Thanks to their team that I got my
                            visa in just 15 days. ”
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </TestimonialSection>
        <TestimonialSection>
          <Container>
            <Row>
              <Col className="text-center text-md-left">
                <Row className="customFlex">
                  <Col lg={10} className="">
                    <Row>
                      <Col xs={4} lg={5}>
                        <img className="w-100" src={test2} alt="" />
                      </Col>
                      <Col xs={7} lg={7}>
                        <div className="tText pt-4">
                          <h3 className="in-heading">Prachit Desai</h3>
                          <p className="text-muted text-start">
                            “I got admission in Campus Coventry with the
                            progression degree of Bsc Honors of Aviation
                            Management, which is ranked No. 13 in the entire
                            United Kingdom. With the help of Urvi ma’am, Monal
                            ma’am & all the other staff, I didn’t face any
                            problem with Visa and admission process. I am very
                            proud to say that I got my visa in just 64 hours...”
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </TestimonialSection>
        <TestimonialSection>
          <Container>
            <Row>
              <Col className="text-center text-md-left">
                <Row className="customFlex">
                  {/* <Col lg={12}>
                    <Row>
                      <Col xs={4} lg={5}>
                        <img className="w-100" src={test3} alt="" />
                      </Col>
                      <Col xs={7} lg={7}>
                        <div className="tText pt-4">
                          <h3 className="in-heading">Pramash Panchal</h3>
                          <p className="text-muted text-start">
                            “Thanks to the whole team for the right guidance
                            because of which I got my admission in Canada. I
                            have visited many consultancies but have not got
                            such a positive reply so thanks to Planet Education
                            I got my visa in just 15 days..”
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col> */}
                  <Col lg={10} className="">
                    <Row>
                      <Col xs={4} lg={5}>
                        <img className="w-100" src={test4} alt="" />
                      </Col>
                      <Col xs={7} lg={7}>
                        <div className="tText pt-4">
                          <h3 className=" in-heading">Smit Shah</h3>
                          <p className="text-muted text-start">
                            “So the process started back in January when I
                            started my search for Overseas Education consultancy
                            and my friend recommended me Planet Education, so
                            then after I took the counseling, and I selected
                            Griffith University. It took time to get my COE but
                            the counselor was pretty confident and I received my
                            COE and the entire process went smooth.”
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </TestimonialSection>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
