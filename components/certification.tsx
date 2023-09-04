"use client"; 
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const certificateData = [
  {
    title: "IOT Certificate",
    description: "Certificate in Internet of Things",
    image: "./IOT.jpg",
    fileLink: "https://drive.google.com/file/d/1zBLz__utjeEXUtcj9qrZFXOwKpwMxQN-/view?usp=drive_link",
  },
  {
    title: "Python Certificate",
    description: "Certificate in Python Programming",
    image: "./Python.jpg",
    fileLink: "https://drive.google.com/file/d/1FdJDCEILFBwrfA4lJI9jxcP64A5OxgIv/view?usp=drive_link",
  },
  {
    title: "Data Analytics using Python Certificate",
    description: "Certificate in Data Analytics using Python Programming",
    image: "./DAP.jpg",
    fileLink: "https://drive.google.com/file/d/1hNL1a_ZFQgstKp5cdIbdn_NaG3XhZEwL/view?usp=drive_link",
  },
];

export default function Certifications() {
  return (
    // <Motion.section
    // <motion.section 
    //    id="contact" 
    //    ref={ref} 
    //    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" 
    <motion.section 
    id="certification" 
    // ref={ref} 
    // className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" 
    // initial={{ 
    //   opacity: 0, 
    // }} 
    // whileInView={{ 
    //   opacity: 1, 
    // }} 
    // transition={{ 
    //   duration: 1, 
    // }} 
    // viewport={{ 
    //   once: true, 
    // }} 
  > 
    <section id="certificaton" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Certifications</SectionHeading>
      <div>
        {certificateData.map((certificate, index) => (
          <div key={index} className="certificate">
            <img
              src={certificate.image}
              alt={certificate.title}
              style={{ width: "auto", height: "200px" }}
            />
            <p>{certificate.title}</p>
            <a href={certificate.fileLink} target="certification" rel="noopener noreferrer">
              Certificate PDF
            </a>
            <p>{certificate.description}</p>
          </div>
        ))}
      </div>
    </section>
    </motion.section>
  );
}
