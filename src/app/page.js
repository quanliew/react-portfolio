'use client'

import { BsFillMoonStarsFill } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { useState } from "react";


export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark": ""}>
      <main className="dark:bg-slate-500">
        <section className="min-h-screen px-5 bg-gradient-to-b from-slate-300 to-white dark:from-slate-800 dark:to-slate-500 ">
            <nav className=" flex py-10 justify-between ">
              <p className="  text-2xl font-pacifico dark:text-gray-400">developedbydarren</p>
              <ul className="flex item-center">
                <li className="p-2 cursor-pointer text-2xl dark:text-slate-400" onClick={() =>setDarkMode(!darkMode)}><BsFillMoonStarsFill /></li>
                <Button href="/public/Resume.pdf" variant="outline" className="bg-gradient-to-b dark:from-slate-700 dark:to-slate-600 dark:text-slate-400">Resume</Button>
              </ul>
            </nav>
            <div className=" container text-center p-10 my-10 dark:text-slate-300">
              <h3 className="text-3xl font-bold py-3 font-ubuntubold">DR. DARREN LIEW</h3>
              <p className="text-sm m-1">Software and Web Developer, Medical Doctor</p>
              <p className="text-xs m-3 leading-6 text-gray-600 dark:text-gray-400">A trained doctor from Malaysia looking into venturing into software and web development. Self-taught programmer in HTML, CSS, React, Python, Tailwind CSS, SQL.</p>
              <div className="p-5">
                <ul className="flex flex-wrap item-center text-4xl justify-center gap-12 text-gray-500 dark:text-gray-400" >
                  <li><a href="https://www.linkedin.com/in/darren-liew-jia-quan/"><FaLinkedin /></a> </li>
                  <li><a href="https://github.com/quanliew28"><FaGithub /></a></li>
                  <li><a href="mailto:darrenliew96@gmail.com"><MdOutlineAlternateEmail /></a></li>
                </ul>
              </div> 
              <Image src="/profilepicture.png" alt="Picture of the author" width={500} height={500} className="mx-auto drop-shadow-2xl my-5" />
            </div>
        </section>
        <hr className="my-10 mx-2"></hr>
        <section className=" dark:text-slate-200">
          <p className="text-center py-5 font-bold text-2xl font-ubuntu ">Tech Stack</p>
          <ul className="flex flex-wrap items-center text-4xl gap-5 justify-center p-12">
            <li className=" text-amber-600 dark:text-slate-400" alt="html5"><FaHtml5 /></li>
            <li className=" text-yellow-400 dark:text-slate-400"><FaCss3Alt /></li>
            <li className=" text-yellow-300 dark:text-slate-400"><IoLogoJavascript /></li>
            <li className=" text-lime-600 dark:text-slate-400"><FaPython /></li>
            <li className=" text-blue-600 dark:text-slate-400"><FaReact /></li>
            <li className="text-blue-800 dark:text-slate-400"><SiTailwindcss /></li>
            <li className="dark:text-slate-400"><DiMysql /></li>
            <li className="dark:text-slate-400"><TbBrandNextjs /></li>
          </ul>
        </section>
      </main>
    </div>
    
  );
}
