// import React from "react";
// import styled from "styled-components";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import why1 from "/images/why1n.png";
// import why2 from "/images/why2n.png";
// import why3 from "/images/why3n.png";
// import why4 from "/images/why4n.png";
// import why5 from "/images/why5n.png";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const cardData = [
//   {
//     text: "45,000+ Dreams Launched",
//     image: why1,
//   },
//   {
//     text: "High visa success ratio",
//     image: why2,
//   },
//   {
//     text: "25+ years of experience",
//     image: why3,
//   },
//   {
//     text: "Extensive network of top universities",
//     image: why4,
//   },
//   {
//     text: "Personalized guidance and support",
//     image: why5,
//   },
// ];

// const WhyPlanet = () => {
//   const Planet = styled.section`
//     .hideOnPc {
//       display: none !important;
//     }
//     .overridecss {
//     }
//     h2 {
//       font-size: 35px;
//       font-weight: 700;
//       color: #122345;
//     }
//     .card-background {
//       background-size: cover;
//       background-position: center;
//       transition: transform 0.3s ease;
//       position: relative;
//       overflow: hidden;
//     }
//     .card-background:hover {
//       transform: scale(1.1);
//       cursor: pointer;
//     }
//     .card-background::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: -100%;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(
//         120deg,
//         rgba(255, 255, 255, 0.5),
//         rgba(255, 255, 255, 0.1)
//       );
//       transition: left 0.5s;
//     }
//     .card-background:hover::after {
//       left: 100%;
//     }

//     .bg-overlay {

//       padding: 35px;
//       border-radius: 5px;

//       bottom: 20px;
//       width: 100%;

//     }

//     .card-body {
//       height: 100%;
//       display: flex;
//       align-items: flex-end;
//     }

//     .card-text {
//       color: white;
//       margin: 0;
//     }
//     .customDimension {
//       width: 264px;
//       height: 330px;
//     }
//     @media (max-width: 450px) {
//       .overridecss {
//         justify-content: center !important;
//         margin-left: 0;
//         margin-right: 0;
//       }
//       .customDimension {
//         width: 285px;
//         height: 281px;
//       }
//       h2 {
//         font-size: 30px;
//       }
//       .card-background:hover {
//         transform: initial;
//       }
//       .hideOnMobile {
//         display: none;
//       }
//       .hideOnPc {
//         display: block;
//       }
//     }
//   `;
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <Planet>
//         <Container className="my-5 hideOnMobile">
//           <h2 className="text-center mb-4">Why Planet Education?</h2>
//           <Row className="justify-content-between overridecss">
//             {cardData.map((card, index) => (
//               <Col key={index} md={6} lg={2} className="mb-4 customDimension">
//                 <Card
//                   className=" text-white card-background"
//                   style={{
//                     backgroundImage: `url(${card.image})`,
//                     width: "264px",
//                     height: "330px",
//                     border: "none",
//                   }}
//                 >
//                   <Card.Body className="d-flex align-items-end">
//                     <Card.Text className="text-center w-100 bg-overlay">
//                       {card.text}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </Planet>
//       <div className="hideOnPc">
//         <h2 className="text-center mb-4 hideOnPc">Why Planet Education?</h2>
//         <Slider {...settings}>
//           <Planet className="hideOnPc">
//             <Container className="my-5">
//               <Row className="justify-content-between overridecss">
//                 {cardData.map((card, index) => (
//                   <Col
//                     key={index}
//                     md={6}
//                     lg={2}
//                     className="mb-4 customDimension"
//                   >
//                     <Card
//                       className=" text-white card-background"
//                       style={{
//                         backgroundImage: `url(${card.image})`,
//                         width: "264px",
//                         height: "330px",
//                         border: "none",
//                       }}
//                     >
//                       <Card.Body className="d-flex align-items-end">
//                         <Card.Text className="text-center w-100 bg-overlay">
//                           {card.text}
//                         </Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </Container>
//           </Planet>
//           <Planet>
//             <Container className="my-5">
//               <Row className="justify-content-between overridecss">
//                 {cardData.map((card, index) => (
//                   <Col
//                     key={index}
//                     md={6}
//                     lg={2}
//                     className="mb-4 customDimension"
//                   >
//                     <Card
//                       className=" text-white card-background"
//                       style={{
//                         backgroundImage: `url(${card.image})`,
//                         width: "264px",
//                         height: "330px",
//                         border: "none",
//                       }}
//                     >
//                       <Card.Body className="d-flex align-items-end">
//                         <Card.Text className="text-center w-100 bg-overlay">
//                           {card.text}
//                         </Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </Container>
//           </Planet>
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default WhyPlanet;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import why1 from "../assets/images/why1n.png";
import why2 from "../assets/images/why2n.png";
import why3 from "../assets/images/why3n.png";
import why4 from "../assets/images/why4n.png";
import why5 from "../assets/images/why5n.png";
import why6 from "../assets/images/why6.webp";
import why7 from "../assets/images/why7.webp";
import why8 from "../assets/images/why8.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    text: "35,000+ Dreams Launched",
    image: why5,
  },
  {
    text: "High visa success ratio",
    image: why3,
  },
  {
    text: "25+ years of experience",
    image: why4,
  },
  {
    text: "Extensive network of top universities",
    image: why2,
  },
  {
    text: "Personalized guidance and support",
    image: why1,
  },
  {
    text: "25 offices worldwide",
    image: why6,
  },
  {
    text: "350+ partner universities",
    image: why7,
  },
  {
    text: "10+ years of experienced faculty & counsellors",
    image: why8,
  },
];

const WhyPlanet = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Planet = styled.section`
    background-color: #eef1f3;
    .overridecss {
    }
    .customFont {
      font-size: 18px;
    }
    .section-heading {
      padding-top: 40px;
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
    h2 {
      font-size: 35px;
      font-weight: 700;
      color: #122345;
    }
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
      z-index: 999999;
    }
    .grid-container {
      grid-template-columns: repeat(4, minmax(0, 1fr));
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

    .bg-overlay {
      padding: 35px;
      border-radius: 5px;
      bottom: 20px;
      width: 100%;
    }

    .card-body {
      height: 100%;
      display: flex;
      align-items: flex-end;
    }

    .card-text {
      color: white;
      margin: 0;
    }
    .customDimension {
      width: 264px;
      height: 330px;
    }
    @media (max-width: 450px) {
      .section-heading {
        padding-top: 20px;
        margin-bottom: 0px !important;
      }
      .customFont {
        font-size: 16px;
      }
      .overridecss {
        justify-content: center !important;
        margin-left: 0;
        margin-right: 0;
      }
      .customDimension {
        width: 285px;
        height: 281px;
      }
      h2 {
        font-size: 28px;
        font-weight: 700;
      }
      .card-background:hover {
        transform: initial;
      }
    }
    @media (min-width: 450px) and (max-width: 768px) {
      .section-heading {
        font-size: 24px;
      }
    }
    @media (min-width: 990px) and (max-width: 1200px) {
      .customEvenly {
        justify-content: space-evenly !important;
      }
    }
  `;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "0px",
  // };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rtl: true,
        },
      },
    ],
  };

  return (
    <Planet>
      <Container className="">
        <h2 className="text-center mb-4 section-heading">
          <span className="underline">Why Planet Education?</span>
        </h2>
        {isMobile ? (
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index}>
                <Card
                  className="text-white card-background mx-auto"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    width: "264px",
                    height: "330px",
                    border: "none",
                    backgroundColor: "#eef1f3",
                  }}
                >
                  <Card.Body className="d-flex align-items-end">
                    <Card.Text className="text-center w-100 bg-overlay customFont">
                      {card.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        ) : (
          <Row className="d-grid grid-container overridecss backgrey customEvenly">
            {cardData.map((card, index) => (
              <Col
                key={index}
                md={6}
                lg={2}
                xl={2}
                className="mb-4 customDimension"
              >
                <Card
                  className="text-white card-background customDimension"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    width: "264px",
                    height: "330px",
                    border: "none",
                    backgroundColor: "#eef1f3",
                  }}
                >
                  <Card.Body className="d-flex align-items-end">
                    <Card.Text className="text-center w-100 bg-overlay customFont">
                      {card.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Planet>
  );
};

export default WhyPlanet;
