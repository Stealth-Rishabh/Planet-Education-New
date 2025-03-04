import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button, Row, Col } from "react-bootstrap";

import background from "../assets/images/Newbanner.png";
import backgroundResp from "../assets/images/bannerbackResp1.webp";
import logo from "../assets/images/logo-new.webp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flag from "../assets/images/leftBotimg.webp";
import Vadodara from "../assets/images/Vadodara.png";
import Ahmedabad from "../assets/images/Ahmedabad.png";
import Chennai from "../assets/images/Chennai.png";

// import {
//   faCalendarAlt,
//   faClock,
//   faMapMarkerAlt,
// } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.section`
  width: 100%;
  min-height: 906px;
  background: #fff url(${background});
  background-repeat: no-repeat;
  background-size: 100%;

  .onlyMob {
    display: none;
  }

  .left {
    margin-top: 5rem;
  }
  .paddingForm {
    padding: 0 25px;
  }
  .borderRad input {
    border-radius: 0px;
  }
  .borderRad select {
    border-radius: 0px;
  }
  .borderRad {
    border-radius: 0px;
  }

  .textCenter {
    text-align: center;
  }
  .form-container {
    background-color: #f5c543;
    padding: 8px 20px;
    position: relative;
    clip-path: polygon(
      80px 0,
      100% 0,
      100% calc(100% - 80px),
      calc(100% - 80px) 100%,
      0 100%,
      0 80px
    );
  }
  .form-title {
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
    text-align: center;
  }
  .form-control {
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    padding: 12px;
    width: 100%;
  }
  .submit-button {
    background-color: #152a68;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
  }
  .error-message {
    color: red;
    font-size: 12px; /* Smaller font size */
    margin-bottom: 10px; /* Adjust spacing */
  }
  .logo {
    width: 240px;
    padding: 1rem;
  }
  .bannerCont {
    width: 100%;
    display: flex;
    padding-left: 100px;
    gap: 100px;
    padding-right: 100px !important;
  }
  .left .l1 {
    font-size: 5vw;
    font-weight: 400;
    color: white;
    margin-bottom: 1rem;
    top: -2rem;
    font-family: "Montserrat", sans-serif;
    position: relative;
    left: -1rem;
  }
  .left .l2 {
    font-size: 3vw;
    font-weight: 600;
    color: white;
    line-height: 4vw;
    margin-bottom: 0px;
    font-family: "Poppins", sans-serif;
    position: relative;
    left: -1rem;
    top: -2rem;
    text-shadow: -2px 2px 2px #f5c543;
  }
  .left .l3 {
    font-size: 69px;
    font-weight: 800;
    color: #f7cb3b;
    margin-bottom: 0px;
    width: max-content;
  }

  .lresp1,
  .lresp2 {
    display: none;
  }
  .right .form {
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .form .form_h2 {
    font-weight: bold;
    font-size: 19px;
    padding-top: 35px;
    text-align: center;
  }
  .margin-bottom {
    margin-bottom: 10px;
  }
  .formButton {
    font-size: 16px;
  }
  .fntSize {
    font-size: 13px;
  }
  @media (max-width: 450px) {
    min-height: 810px;
    background-image: url(${backgroundResp});
    background-size: 100%;
    object-fit: cover;
    .hideMob {
      display: none;
    }
    .onlyMob {
      display: block;
    }
    .paddingForm {
      padding: 0;
    }

    .fntSize {
      font-size: 11px;
    }
    .lresp1,
    .lresp2 {
      display: block;
    }
    .lresp1 {
      font-size: 26px;
      font-weight: 400;
      color: white;
      margin-bottom: 0px;
      text-align: center;
    }
    .lresp2 {
      font-size: 2rem;
      font-weight: 700;
      color: #f7cb3b;
      line-height: 42px;
      text-align: center;
    }
    .l1,
    .l2,
    .l3 {
      display: none;
    }
    .bannerCont {
      flex-direction: column;
      padding-left: 0px;
      gap: 20px !important;
      justify-content: center;
      padding-right: 0px !important;
    }
    .logo {
      width: 190px;
      padding: 0.5rem;
    }

    .form .form_h2 {
      font-weight: bold;
      font-size: 18px;
      padding-top: 32px;
      text-align: center;
    }
    .right {
      margin-left: 50px;
    }
  }
  @media (max-width: 1450px) {
    .left .l3 {
      font-size: 61px;
    }
    .bannerCont {
      gap: 180px;
    }
    .l3 {
      width: max-content;
    }
  }
  @media (min-width: 1600px) {
    min-height: 1132px;
    .bannerCont {
      width: 100%;
      display: flex;
      gap: 340px;
      padding-top: 50px;
    }
    .form {
      margin-right: 40px;
    }
    .right {
      margin-left: -75px;
    }
    .overrideWidth {
      width: 100%;
    }

    .left .l3 {
      font-size: 79px;
      font-weight: 800;
      color: #f7cb3b;
    }
    .form .form_h2 {
      font-weight: 700;
      font-size: 23px;
    }
    .formButton {
      font-size: 20px;
    }
    .fntSize {
      font-size: 16px;
    }
  }
  @media (min-width: 450px) and (max-width: 768px) {
    min-height: 610px;
    background-image: url(${backgroundResp});
    background-size: 100%;
    object-fit: cover;
    .bannerCont {
      flex-direction: column;
      padding-left: 0px;
      gap: 20px !important;
      justify-content: center;
    }
    .lresp1,
    .lresp2 {
      display: block;
      text-align: center;
    }
    .l1,
    .l2,
    .l3 {
      display: none;
    }

    .form-row {
      justify-content: center;
    }
    .lresp1 {
      font-size: 33px;
      margin-bottom: 0px;
      color: white;
    }
    .lresp2 {
      font-size: 48px;
      font-weight: 700;
      color: #f7cb3b;
      line-height: 42px;
      text-align: center;
    }
    .right {
      margin-bottom: 15px;
    }
  }
  @media (min-width: 575px) and (max-width: 650px) {
    .overrideWidth {
      width: 72%;
    }
  }
  @media (min-width: 650px) and (max-width: 768px) {
    .overrideWidth {
      width: 61%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 610px;
    background-image: url(${backgroundResp});
    background-size: 100%;
    object-fit: cover;
    padding-bottom: 4rem;
    .bannerCont {
      flex-direction: column;
      padding-left: 0px;
      gap: 20px !important;
      justify-content: center;
    }
    .lresp1,
    .lresp2 {
      display: block;
      text-align: center;
    }
    .l1,
    .l2,
    .l3 {
      display: none;
    }

    .form-row {
      justify-content: center;
    }
    .lresp1 {
      font-size: 33px;
      margin-bottom: 0px;
      color: white;
    }
    .lresp2 {
      font-size: 48px;
      font-weight: 700;
      color: #f7cb3b;
      line-height: 42px;
      text-align: center;
    }
    .right {
      margin-bottom: 15px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1150px) {
    min-height: 625px;
    .bannerCont {
      gap: 10px;
      justify-content: space-between;
    }
    .overrideWidth {
      width: 90%;
    }

    .left .l3 {
      font-size: 34px;
      font-weight: 800;
      color: #f7cb3b;
      margin-bottom: 0px;
      width: max-content;
    }

    .form-control {
      margin-bottom: 13px;
      border: none;
      padding: 7px;
      width: 100%;
    }
  }
  @media (min-width: 1150px) and (max-width: 1330px) {
    min-height: 701px;
    .bannerCont {
      gap: 10px;
      justify-content: space-between;
    }
    .overrideWidth {
      width: 90%;
    }

    .left .l3 {
      font-size: 42px;
      font-weight: 800;
      color: #f7cb3b;
      margin-bottom: 0px;
      width: max-content;
    }

    .form-control {
      margin-bottom: 13px;
      border: none;
      padding: 7px;
      width: 100%;
    }
  }
  @media (min-width: 1330px) and (max-width: 1440px) {
    min-height: 800px;
    .bannerCont {
      gap: 10px;
      justify-content: space-between;
    }
    .overrideWidth {
      width: 90%;
    }

    .left .l3 {
      font-size: 52px;
      font-weight: 800;
      color: #f7cb3b;
      margin-bottom: 0px;
      width: max-content;
    }
  }
  @media (width: 1024px) {
    .overrideWidth {
      width: 50%;
    }
  }

  .flag {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    .flag {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .left {
      margin-top: 0rem;
    }
  }

  @media (min-width: 320px) and (max-width: 374px) {
    .hPmNGO .logimg-div img {
      width: 20vw !important;
    }
  }
  .text_abroad {
    background: #f5c543;
    padding: 0 1rem;
  }
`;
const Banner = styled.div`
  background-color: #ffffff;
  color: #000000;
  padding: 30px;
  font-family: Arial, sans-serif;
  margin: 14vw auto 0;
  text-align: center;

  @media (max-width: 1024px) {
    margin: 0rem auto;
  }
`;

const Title = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

// const Amount = styled.span`
//   font-size: 6vw;
//   font-weight: bold;
//   text-shadow: 1.5px 3px 7.5px black;
//   color: #ffff00;
// `;

const RedTextContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column; /* Stack vertically on smaller screens */
    align-items: center; /* Center items on mobile */
    gap: 1rem; /* Reduce gap on mobile */
  }
`;

// const List = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   max-width: 525px;
//   margin: 0 auto;

//   @media (max-width: 1024px) {
//     max-width: 500px; /* Full width on mobile */
//     text-align: left;
//     padding-left: 15px; /* Add padding for mobile */
//   }
//`;

// const ListItem = styled.li`
//   margin-bottom: 12px;
//   padding-left: 30px;
//   position: relative;
//   font-size: 1.5rem;
//   text-align: left;
//   line-height: 1.6;

//   &:before {
//     content: "▶";
//     color: white;
//     position: absolute;
//     left: 0;
//     top: 0.2em;
//   }

//   @media (max-width: 1024px) {
//     padding-left: 25px;
//     font-size: 1.2rem;
//   }
// `;

// const EventBox = styled.div`
//   background-color: #ffffff;
//   color: #000000;
//   padding: 22.5px;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   max-width: 500px;
//   flex-wrap: wrap;
//   justify-content: flex-start;

//   @media (max-width: 1024px) {
//     width: 100%; /* Full width on mobile */
//     padding: 15px;
//     flex-direction: column; /* Stack items vertically on mobile */
//     align-items: center; /* Center content on mobile */
//   }
// `;

// const EventItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const EventDetails = styled.p`
//   margin: 7.5px 0;
//   font-size: 1.5rem;
//   font-weight: bold;

//   @media (max-width: 1024px) {
//     font-size: 1.2rem;
//   }
// `;

const LandingBanner = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    education: "",
    country: "",
    level: "",
    exam: "",
    city: "Vadodara", // Default city value set to "Vadodara"
  });

  const [phoneError, setPhoneError] = useState("");
  const [digitError, setDigitError] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Manage submit button state

  const validatePhoneStart = (value) => {
    if (value && !/^[6-9]/.test(value)) {
      setPhoneError("Phone number must start with 6, 7, 8, or 9");
    } else {
      setPhoneError("");
    }
  };

  const validatePhoneLength = (value) => {
    if (value.length !== 10) {
      setDigitError("Phone number must be of 10 digits");
    } else {
      setDigitError("");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "fullname") {
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        setError("Name can only contain letters and spaces.");
        return;
      }
    }

    if (name === "contact") {
      const sanitizedValue = value.replace(/\D/g, "");
      validatePhoneStart(sanitizedValue);

      setFormData((prevState) => ({
        ...prevState,
        [name]: sanitizedValue.slice(0, 10),
      }));
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError(""); // Clear any error message
  };

  const handleBlur = (e) => {
    if (e.target.name === "contact") {
      validatePhoneLength(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsSubmitting(true); // Disable the submit button

    if (phoneError || digitError) {
      setError("Please correct the errors before submitting.");
      setIsSubmitting(false); // Re-enable the submit button
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.fullname)) {
      setError("Name can only contain letters and spaces.");
      setIsSubmitting(false); // Re-enable the submit button
      return;
    }

    try {
      // Prepare the data to send
      const formDataToSend = new FormData();
      formDataToSend.append("contact-name", formData.fullname);
      formDataToSend.append("contact-email", formData.email);
      formDataToSend.append("contact-phone", formData.contact);
      formDataToSend.append("contact-company", "Vadodara");
      formDataToSend.append("contact-subject", formData.country);
      formDataToSend.append("contact-message", formData.education);

      // Add hidden fields dynamically
      formDataToSend.append("referrer_name", document.referrer || "direct");
      formDataToSend.append("keyword", "Scholarship Program");
      formDataToSend.append("source", "Landing Page");
      formDataToSend.append("orderid", "1040"); // Hardcoded or dynamically generated
      formDataToSend.append("sitename", "GujratPlaneted");
      formDataToSend.append("campaign_url", window.location.href);
      formDataToSend.append("campaign_name", "Study Abroad Campaign");
      formDataToSend.append("network", "Organic");

      // Send the data to the PHP server
      const response = await fetch(
        "https://stealthlearn.in/planeteducation/submit.php",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      // Check if the response is valid JSON
      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        throw new Error("Unexpected response format, not JSON.");
      }

      // Handle the JSON response
      if (response.ok && result.status === "success") {
        setSuccessMessage("Form submitted successfully!");
        // Redirect to the thank you page
        window.location.href = "thankyou.html";
      } else {
        setError(result.message || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error.message || "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <Wrapper>
      <div className="catch">
        <img className="logo" src={logo} alt="Logo" />
        <div className="bannerCont justify-content-end">
          {/* <div className="left mt-4">
            <p
              style={{ fontWeight: 800, color: "#fccf03", top: 0, left: 0 }}
              className="l1 pb-0 mb-0"
            >
              Study Abroad
            </p>
            <p className="text-white fs-2 mt-0">
              Apply to the World’s Top 300 Universities in
            </p>
            <p className="text-white fs-1 mt-0">
              Check your scholarship Eligibility On
            </p>
            <p
              style={{
                fontWeight: 800,
                color: "#fccf03",
                top: 0,
                left: 0,
                fontSize: "3rem",
              }}
              className="l1 pb-0 mb-0"
            >
              Global Scholarships Day
            </p>
            <p className="lresp1">Study Abroad</p>
            <p className="lresp2">
              Attend Planet's Biggest Roadshow in your City
            </p>
            <img className="flag" src={flag} alt="flags" />
          </div> */}
          <div className="right">
            <div className="form">
              <Row className="form-row">
                <Col
                  className="overrideWidth"
                  xs={10}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={12}
                >
                  <div className="form-container">
                    <h2 className="form_h2 paddingForm">Register Now</h2>
                    <Form
                      className="textCenter paddingForm"
                      onSubmit={handleSubmit}
                    >
                      {error && <p className="error-message">{error}</p>}
                      {phoneError && (
                        <p className="error-message">{phoneError}</p>
                      )}
                      {digitError && (
                        <p className="error-message">{digitError}</p>
                      )}
                      {successMessage && (
                        <p style={{ color: "green" }}>{successMessage}</p>
                      )}
                      <Form.Group
                        controlId="formName"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          type="text"
                          placeholder="Name"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInput}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        controlId="formEmail"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInput}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        controlId="formPhoneNumber"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          type="tel"
                          placeholder="Phone Number"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInput}
                          onBlur={handleBlur}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        controlId="formLocation"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          type="text"
                          placeholder="Vadodara"
                          name="city"
                          value="Vadodara"
                          disabled
                          readOnly
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        controlId="formLocation"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          as="select"
                          name="country"
                          value={formData.country}
                          onChange={handleInput}
                          required
                        >
                          <option value="">
                            Your Preferred Study Destination
                          </option>
                          <option value="Australia">Australia</option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">UK</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        controlId="formEducationLevel"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          as="select"
                          name="education"
                          value={formData.education}
                          onChange={handleInput}
                          required
                        >
                          <option value="">Current Level of Education</option>
                          <option value="12th Pass">12th Pass</option>
                          <option value="Graduate">Graduate</option>
                          <option value="Post Graduate">Post Graduate</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        controlId="formStudyLevel"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          as="select"
                          name="level"
                          value={formData.level}
                          onChange={handleInput}
                          required
                        >
                          <option value="">Preferred Study Level</option>
                          <option value="Graduate">Graduate</option>
                          <option value="Post Graduate">Post Graduate</option>
                          <option value="Doctorate">Doctorate</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        controlId="formExam"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          as="select"
                          name="exam"
                          value={formData.exam}
                          onChange={handleInput}
                          required
                        >
                          <option value="">
                            Have you taken up IELTS/PTE/TOEFL exam?
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </Form.Control>
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="margin-bottom formButton borderRad"
                        style={{
                          backgroundColor: "#152A68",
                          borderColor: "#152A68",
                        }}
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      {/* <ScholarshipBanner /> */}
    </Wrapper>
  );
};

export default LandingBanner;

// function ScholarshipBanner() {
//   return (
//     <Banner>
//       <Title>Events</Title>
//       <RedTextContainer>
//         <img src={Ahmedabad} alt="Ahmedabad Event" />
//         <img src={Vadodara} alt="Vadodara Event" />
//         <img src={Chennai} alt="Chennai Event" />
//       </RedTextContainer>
//     </Banner>
//   );
// }
