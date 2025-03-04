"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

// Import university logos
import part1 from "../assets/logos/anu.png";
import part2 from "../assets/logos/Charles Darwin University Scholarships.png";
import part3 from "../assets/logos/Deakin University.png";
import part4 from "../assets/logos/UNSW Scholarships.png";
import part5 from "../assets/logos/University of Technology - Sydney.png";
import part6 from "../assets/logos/Macquarie University.png";
import part7 from "../assets/logos/MURDOCH UNIVERSITY.png";
import part8 from "../assets/logos/RMIT.png";
import part9 from "../assets/logos/Victoria University.png";
import part10 from "../assets/logos/Western Sydney University.png";
import part11 from "../assets/logos/cqu university.png";
import part12 from "../assets/logos/james-cook-university.png";
import part13 from "../assets/logos/La Trobe University.png";
import part14 from "../assets/logos/uq.png";
import part15 from "../assets/logos/su.png";
import part16 from "../assets/logos/monash-university.png";

const PartnersShowcase = styled.section`
  background: linear-gradient(135deg, #f6f9fc 0%, #e9f2ff 100%);
  padding: 4rem 0;
  overflow: hidden;

  .title {
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 2rem;
    color: #2d3748;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #4a90e2, #63b3ed);
    }
  }

  .partners-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    perspective: 1000px;
  }

  .partner-card {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

      .hover-content {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .partner-logo {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      transition: all 0.3s ease;
    }
  }

  .hover-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(74, 144, 226, 0.9);
    color: #ffffff;
    padding: 1rem;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease;
    text-align: center;
  }

  .featured-partner {
    grid-column: span 2;
    grid-row: span 2;

    .partner-logo {
      height: 100%;
    }

    .hover-content {
      font-size: 1.1rem;
    }
  }

  .more-button {
    display: block;
    width: 200px;
    margin: 2rem auto 0;
    padding: 1rem;
    background: linear-gradient(45deg, #4a90e2, #63b3ed);
    color: #ffffff;
    text-align: center;
    border-radius: 30px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  .many-more-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #4a90e2, #63b3ed);
  }

  .many-more {
    color: #ffffff;
    font-weight: 600;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    .partners-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .partners-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .featured-partner {
      grid-column: span 2;
      grid-row: span 1;
    }
  }
`;

const PartnerCard = ({ partner, isFeatured }) => (
  <motion.div
    className={`partner-card ${isFeatured ? "featured-partner" : ""}`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="partner-logo">
      <img src={partner.src || "/placeholder.svg"} alt={partner.alt} />
    </div>
    <div className="hover-content">
      <p>{partner.text}</p>
    </div>
  </motion.div>
);

const ManyMoreCard = () => (
  <motion.div
    className="partner-card many-more-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="partner-logo many-more">
      <h3>& many more...</h3>
    </div>
  </motion.div>
);

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [featuredPartner, setFeaturedPartner] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch partners
    const fetchedPartners = [
      { src: part1, alt: "ANU", text: "25% tuition fee waiver per year" },
      {
        src: part2,
        alt: "Charles Darwin University",
        text: "Scholarship Up to 30%",
      },
      { src: part3, alt: "Deakin University", text: "25% Merit Scholarship" },
      {
        src: part4,
        alt: "UNSW",
        text: "Tuition Fee Discounts for international students",
      },
      { src: part5, alt: "UTS", text: "Scholarships Up to $40,000" },
      {
        src: part6,
        alt: "Macquarie University",
        text: "Early Acceptance Scholarship – $10,000/year",
      },
      { src: part7, alt: "Murdoch University", text: "Scholarship Upto 20%" },
      { src: part8, alt: "RMIT", text: "20% Tuition Fee Reduction" },
      {
        src: part9,
        alt: "Victoria University",
        text: "Scholarships Up to 30%",
      },
      {
        src: part10,
        alt: "Western Sydney University",
        text: "Scholarship Up to $6,000",
      },
      { src: part11, alt: "CQU University", text: "Scholarships of A $20M+" },
      {
        src: part12,
        alt: "James Cook University",
        text: "Scholarships Upto 30%",
      },
      {
        src: part13,
        alt: "La Trobe University",
        text: "Scholarships Upto 15 to 25% based on academic merit",
      },
      { src: part14, alt: "UQ", text: "A$10,000 per year" },
      { src: part15, alt: "SU", text: "Scholarships Up to $40,000" },
      {
        src: part16,
        alt: "Monash University",
        text: "20% Tuition Fee Reduction",
      },
    ];
    setPartners(fetchedPartners);
    setFeaturedPartner(
      fetchedPartners[Math.floor(Math.random() * fetchedPartners.length)]
    );
  }, []);

  return (
    <PartnersShowcase>
      <Container>
        <h2 className="title">Our Top University Partners</h2>
        <motion.div
          className="partners-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {featuredPartner && (
              <PartnerCard
                key="featured"
                partner={featuredPartner}
                isFeatured={true}
              />
            )}
            {partners
              .filter((p) => p !== featuredPartner)
              .map((partner, index) => (
                <PartnerCard key={index} partner={partner} isFeatured={false} />
              ))}
            <ManyMoreCard />
          </AnimatePresence>
        </motion.div>
      </Container>
    </PartnersShowcase>
  );
};

export default Partners;
