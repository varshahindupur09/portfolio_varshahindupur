"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
//   const { ref } = useSectionInView("About");

  return (
    <motion.section
    //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* <SectionHeading>About me</SectionHeading> */}
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium text-blue-600">Bachelor of Engineering in Information Technology</span>, I decided to pursue my
        passion for programming and joined Infosys where I learnt programming, data structures and algorithms, as well as learnt{" "}
        <span className="font-medium text-green-600">full-stack web development and software testing</span>.{" "}
        <span className="italic text-purple-600">My favorite part of programming is the
        problem-solving aspect</span>. I <span className="underline text-red-500">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium text-indigo-600">
          Python, Django, React, Next.js, Node.js, MongoDB, Relational Database Management, AWS, Nginx, Redis, Kubernetes, Airflow
        </span>
        . I am also familiar with backend services such as REST and Asynchronous APIs building, system design, and software architectures. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium text-orange-600">full-time position</span> as a software
        developer or software tester or data engineer, as I've gained skills to excel in all these three areas.
      </p>

      <p>
        <span className="italic text-teal-600">My hobbies are</span> watching movies, fitness, and exploring new places. I also enjoy{" "}
        <span className="font-medium text-yellow-600">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium text-pink-600">Stock Market, Machine Learning, Artificial Intelligence</span>. I'm also
        learning how to play volleyball on weekends.
      </p>
    </motion.section>
  );
}