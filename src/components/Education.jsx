import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import eduRight from "../assets/images/educationRight.webp";
import { ImCheckboxChecked } from "react-icons/im";

const Education = () => {
  const StyledContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #122345;
    padding: 40px 0;

    .customBoot {
      padding-left: 150px;
    }
    @media (width: 768px) {
      .customLandscape {
        width: 100% !important;
      }
    }
    @media (max-width: 450px) {
      .customHeight {
        margin-right: 0;
        height: auto;
      }
      .customBoot {
        padding-left: 0px;
        width: 100%;
      }
      .hideMob {
        display: none;
      }
    }
    @media (min-width: 1600px) {
      .customHeight {
        height: auto;
      }
    }
    /* @media only screen and (max-width: 650px) and (orientation: landscape) {
      .customBoot {
        padding-left: 0px;
      }
      .customLandscape {
        width: 64%;
      }
    } */
    @media (min-width: 450px) and (max-width: 768px) {
      .customBoot {
        padding-left: 0px;
        /* width: 100%; */
      }
      .hideMob {
        display: none;
      }
      .customHeight {
        margin-top: 0px;
        margin-right: 0px;
      }
    }
    @media (min-width: 768px) and (max-width: 861px) {
      .customBoot {
        padding-left: 0px;
      }
    }
    @media (min-width: 861px) and (max-width: 1024px) {
      .customBoot {
        padding-left: 50px;
      }
    }
  `;

  const ContentBox = styled.div`
    /* width: 50%; */
    background-color: white;
    padding: 20px;
    margin-top: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    margin-right: -90px; /* Adjust this value to overlap more or less */
    h2 {
      font-size: 35px;
      color: #122345;
      font-weight: 700;
    }
    @media (max-width: 450px) {
      margin-top: 0px;

      h2 {
        font-size: 25px;
        font-weight: 600;
      }
    }
    @media (min-width: 1600px) {
      h2 {
        font-size: 53px;
        font-weight: 600;
      }
    }
    @media (min-width: 768px) and (max-width: 900px) {
      h2 {
        font-size: 16px;
        font-weight: 600;
      }
    }

    @media (min-width: 900px) and (max-width: 1024px) {
      h2 {
        font-size: 20px;
        font-weight: 600;
      }
    }
    @media (min-width: 450px) and (max-width: 768px) {
      h2 {
        font-size: 25px;
        font-weight: 600;
      }
    }
    @media (min-width: 1024px) and (max-width: 1328px) {
      h2 {
        font-size: 23px;
        font-weight: 600;
      }
    }
  `;

  const ImageBox = styled.div`
    position: relative;
    z-index: 0;
  `;

  const Image = styled.img`
    width: 84%;
    height: auto;
    @media (max-width: 450px) {
      width: 100%;
      margin-top: 40px;
    }
    @media (min-width: 1600px) {
      width: 80%;
    }
    @media (min-width: 768px) and (max-width: 862px) {
      width: 90%;
    }
    @media (min-width: 862px) and (max-width: 1024px) {
      width: 79%;
    }
    @media (min-width: 1024px) and (max-width: 1328px) {
      width: 95%;
    }
  `;

  const List = styled.ul`
    list-style: none;
    padding: 0;
  `;

  const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 18px;
    & > svg {
      margin-right: 10px;
    }
    .icon {
      color: #122345;
    }
    @media (max-width: 450px) {
      font-size: 16px;
      .customW {
        width: 15px;
        height: 15px;
      }
      .moreW {
        width: 18px;
        height: 18px;
      }
    }
    @media (min-width: 1600px) {
      font-size: 26px;
    }
    @media (min-width: 768px) and (max-width: 900px) {
      font-size: 10px;
    }
    @media (min-width: 900px) and (max-width: 1024px) {
      font-size: 10px;
    }
    @media (min-width: 450px) and (max-width: 768px) {
      font-size: 16px;
    }
    @media (min-width: 1024px) and (max-width: 1328px) {
      font-size: 14px;
    }
  `;
  return (
    <StyledContainer>
      <Row className="justify-content-center customBoot">
        <Col xs={10} md={4} lg={4} className="customLandscape override768">
          <ContentBox className="customHeight">
            <h2>The Global Education Fair Advantage</h2>
            <List>
              <ListItem>
                <ImCheckboxChecked className="icon customW" />
                Meet Top 50 Global Universities
              </ListItem>
              <ListItem>
                <ImCheckboxChecked className="icon customW" />
                On-the-spot profile evaluation
              </ListItem>
              <ListItem>
                <ImCheckboxChecked className="icon customW" />
                Free Career Counselling by Sr. Experts
              </ListItem>
              <ListItem>
                <ImCheckboxChecked className="icon customW" />
                Expert assistance on Education loans & Visas
              </ListItem>
              <ListItem>
                <ImCheckboxChecked className="icon moreW" />
                Direct interaction with the university delegates
              </ListItem>
              <ListItem>
                <ImCheckboxChecked className="icon moreW" />
                Scholarships available up to 50% on Tuition Fees
              </ListItem>
            </List>
          </ContentBox>
        </Col>
        <Col xs={10} md={6} className="hideMob">
          <ImageBox>
            <Image src={eduRight} alt="Education Fair" />
          </ImageBox>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Education;
