import React from "react"; 
 import { FaSchool } from "react-icons/fa"; 
 import { LuGraduationCap } from "react-icons/lu"; 
 import corpcommentImg from "@/public/corpcomment.png"; 
 import rmtdevImg from "@/public/rmtdev.png"; 
import link from "next/link";
import wordanalyticsImg   from "@/public/wordanalytics.png";
  
 export const links = [ 
   { 
     name: "Home", 
     hash: "#home", 
   }, 
   { 
     name: "About", 
     hash: "#about", 
   }, 
   { 
     name: "Projects", 
     hash: "#projects", 
   }, 
   { 
     name: "Skills", 
     hash: "#skills", 
   },
    {
      name:"certification",
      hash:"#certification"
   },
   { 
     name: "Education", 
     hash: "#experience", 
   }, 
   { 
     name: "Contact", 
     hash: "#contact", 
   }, 
 ] as const; 
  
 export const experiencesData = [ 
   { 
     title: "National Institute of Technology Patna ( NIT - Patna )", 
     location: "Patna, Bihar, India", 
     description: 
       "B.Tech  - Electronics & Communication Engineering (ECE) - 6.82 CGPA", 
     icon: React.createElement(LuGraduationCap), 
     date: "2020 - 2024 (Ongoing)", 
   }, 
   { 
     title: "M. S. Memorial public School", 
     location: "Motihari, Bihar, India", 
     description: 
       "CBSE - 73.8% ( 10th+2 / XII )", 
     icon: React.createElement(FaSchool), 
     date: "2016 - 2018", 
   }, 
   { 
     title: "Modern Indian School", 
     location: "Kathmandu, Nepal", 
     description: 
    "CBSE - 10 CGPA  ( 10th / X - Matriculation )", 
     icon: React.createElement(FaSchool), 
     date: "2014 - 2016", 
   }, 
 ] as const; 
  // export const certificateData = [
  //   {
  //     title : "IOT",
  //     description :"hi"
  //   }
  // ] as const;
  const certificateData = [
    {
      title: "IOT Certificate",
      description: "Certificate in Internet of Things",
      image: "./IOT.jpg",
      link: "https://drive.google.com/file/d/1zBLz__utjeEXUtcj9qrZFXOwKpwMxQN-/view?usp=drive_link",
    },
    {
      title: "Python Certificate",
      description: "Certificate in Python Programming",
      image: "./Python.jpg",
      link: "https://drive.google.com/file/d/1FdJDCEILFBwrfA4lJI9jxcP64A5OxgIv/view?usp=drive_link",
    },
    {
      title: "Data Analytics using Python Certificate",
      description: "Certificate in Data Analytics using Python Programming",
      image: "./DAP.jpg",
      link: "https://drive.google.com/file/d/1hNL1a_ZFQgstKp5cdIbdn_NaG3XhZEwL/view?usp=drive_link",
    },
  ] as const;
 export const projectsData = [ 
   { 
     title: "Youtube Clone", 
     description: 
       "I made youtube clone using React JS, TailwindCSS & Rapid API. It has features like searching, playing videos and full responsive. ", 
     tags: ["React.JS", "Tailwind", "rapid api"], 
     imageUrl: corpcommentImg, 
     image: "./corpcommentImg.png",
     link:"https://rustam-youtube-clone.netlify.app/",
    //  _fileLink: "https://rustam-youtube-clone.netflify.app/",
     get fileLink() {
       return this.link;
     },
     set fileLink(value) {
       this.fileLink = value;
     },
   }, 
  { 
     title: "East Central Railway ( ECR - Indian Railway )", 
     description: 
       "Industrial Training project, to make clickable Interactive (ECR)-Railway station map website", 
     tags: ["React Js", "html", "javascript", "Css"], 
     imageUrl: rmtdevImg, 
     link:"https://drive.google.com/file/d/1dCpfY0UQeUNrXzwywF92u7LJlVW0ZsZX/view?usp=drive_link/",
   }, 
  //  { 
  //    title: "Word Analytics", 
  //    description: 
  //      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.", 
  //    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"], 
  //    imageUrl: wordanalyticsImg, 
  //  }, 
 ] as const; 
  
 export const skillsData = [ 
   "HTML", 
   "CSS", 
   "JavaScript", 
   "C++", 
   "React JS", 
   "SQL", 
   "Python", 
   "Git", 
   "Tailwind CSS", 
   "Data Structures & Algorithms (DSA)", 
   "Matplotlib", 
   "NumPy", 
   "Sci Py", 
   "OpenCV", 
  //  "Express", 
  //  "PostgreSQL", 
  //  "Python", 
  //  "Django", 
  //  "Framer Motion", 
 ] as const;