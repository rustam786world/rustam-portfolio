"use client"; 
  
 import React from "react"; 
 import SectionHeading from "./section-heading"; 
 import { motion } from "framer-motion"; 
 import { useSectionInView } from "@/lib/hooks"; 
  
 export default function About() { 
   const { ref } = useSectionInView("About"); 
  
   return ( 
     <motion.section 
       ref={ref} 
       className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" 
       initial={{ opacity: 0, y: 100 }} 
       animate={{ opacity: 1, y: 0 }} 
       transition={{ delay: 0.175 }} 
       id="about" 
     > 
       <SectionHeading>About me</SectionHeading> 
       <p className="mb-3"> 
         I'm final year <span>B.Tech</span>{" "} 
         <span className="font-medium">Engineering Student</span>,
         at <b>National Institute of Technology Patna</b> in <b>Electronics & Communications Engineering.</b> The course introduced me to the world of Programming through <b>C++</b> and learning {" "} 
         <span className="font-medium">FrontEnd Web Development <b>(React JS)</b></span>.{" "} 
         <span className="italic">My favorite part of programming</span> is the 
         problem-solving. I <span className="underline">love</span> the 
         feeling of finally figuring out a solution to a problem. My core stack 
         is{" "} 
         <span className="font-medium"> <b>
           React.Js, C++, Python, SQL </b> 
         </span> 
         . I am also familiar with <b>NumPy, Sci-Py, Matplotlib</b>, Python libraries. I'm always searching for new technologies to learn and master. I am currently looking for a{" "} 
         <span className="font-medium">Intern / Full-time position</span> as a <b>Software Developer.</b> 
       </p> 
  
       <p> 
         <span className="italic">When I'm not coding</span>, I enjoy listening music, watching movies, and playing chess & loves to paint. I also enjoy{" "} 
         <span className="font-medium">learning new things</span>. 
       </p> 
     </motion.section> 
   ); 
 }