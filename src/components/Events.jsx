import React from "react";
import styled from "styled-components";
import one from "../assets/images/event2n.webp";
import two from "../assets/images/event3new.webp";
import three from "../assets/images/event1.webp";

const Events = () => {
  const Events = styled.section`
    width: 100%;
    .cont {
      width: 100%;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: center;
    }
    h2 {
      font-size: 35px;
      font-weight: 700;
      color: #122345;
      text-align: center;
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
    }
    .underline:hover::after {
      width: 100%;
    }
    img {
      width: 25%;
    }
    @media (max-width: 450px) {
      /* background-color: #eef1f3;
      padding: 20px 0; */
      .cont {
        flex-direction: column;
      }
      img {
        width: 60%;
      }
      h2 {
        font-size: 28px;
        font-weight: 700;
      }
      .underline::after {
        height: 3px;
      }
    }
    @media (min-width: 450px) and (max-width: 520px) {
      .cont {
        flex-direction: column;
      }
      img {
        width: 60%;
      }
    }
    @media (min-width: 450px) and (max-width: 768px) {
      h2 {
        font-size: 24px;
        font-weight: 700;
      }
    }
  `;
  return (
    <>
      <Events>
        <div className="eventsTitle">
          <h2>
            <span className="underline">Events</span>
          </h2>
        </div>
        <div className="cont">
          <img src={three} alt="" />
          <img src={one} alt="" />
          <img src={two} alt="" />
        </div>
      </Events>
    </>
  );
};

export default Events;
