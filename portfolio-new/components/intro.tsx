"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
// import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
//   const { ref } = useSectionInView("Home", 0.5);
//   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
    //   ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.p
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.3] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          >
          {/* <span className="font-bold">This portfolio is built using Next.js, Framer Motion, Typescript, Tailwind CSS, Email</span>.<br /> */}
       </motion.p>
      <div className="flex items-center justify-center">
        <div className="relative">

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {/* no need to mention the public folder in the path when using static assets like images in Next.js. */}
            <Image
              src="/me.jpg"
              alt="Varsha Seshashayee Hindupur portrait"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-30 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h5
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.3] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
        <span className="font-bold">Hello, I'm Varsha.</span> <br /> I'm a{" "}
        <span className="font-bold">Full-Stack developer</span> with{" "}
        <span className="font-bold">5+ years</span> of industry experience in{" "}
        <span className="font-bold">Software Testing, </span>
        <span className="font-bold">Software Development</span>,{" "} and{" "}
        <span className="font-bold">Data Engineering</span>. <br />
      </motion.h5>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-purple-200 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-200 active:scale-105 transition"
        //   onClick={() => {
        //     setActiveSection("Contact");
        //     setTimeOfLastClick(Date.now());
        //   }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-red-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/VarshaHindupurResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-purple-200 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/varsha-hindupur/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-red-100 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/varshahindupur09"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}