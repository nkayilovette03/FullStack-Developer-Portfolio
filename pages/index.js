/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-sync-scripts */
import emailjs from "emailjs-com";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import React, { useState } from "react";
import Portfolio from "../components/Portfolio";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

import Gallery from "../components/Gallery";
import Interests from "../components/Interests";
import Services from "../components/Services";
import Spinner from "../components/Spinner";
import AppTypewriter from "../components/Typewriter";
import { sortByDate } from "../utils";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => {
    return import("../components/ThemeToggle");
  },
  { ssr: false }
);

const SocialLinks = dynamic(
  () => {
    return import("../components/SocialLinks");
  },
  { ssr: false }
);

// posts : Portfolio
// post : Articles
export default function Home({ posts, post }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  function sendEmail(e) {
    setIsLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5gvjy8p",
        "template_dboojen",
        e.target,
        "user_4nvcDg3le1Yk7qJ5DGgDq"
      )
      .then((result) => {
        if (result) {
          // setLoading(true)
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          // setSent(true)
        }
      }, setIsLoading(false))
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  }

  return (
    <div className="all">
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Personal Portfolio | Chacodaar</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* Favicon */}
        <link href="img/Logo.png" rel="icon" />
        <link href="img/Logo.png" rel="apple-touch-icon" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <header id="header">
        <div className="container">
          <p style={{ fontSize: "20px" }}>👋 Hey I Am</p>

          <div className="typewriter ml-0 mt-0">
            <div className="writer">
              <AppTypewriter
                strings={[
                  "Nkayi Lovette Chacodaar M.",
                  "A Front-End Developer",
                  "A Mobile Developer",
                  "A Web Developer",
                  "A Photographer",
                ]}
                wrapperClassName="typewriterWrapper"
                cursorClassName="typewriterCursor"
              />
            </div>
          </div>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className={router.pathname === "/" ? "active" : ""}>
                <a href="/">Home</a>
              </li>
              <li className={router.pathname === "/#about" ? "active" : ""}>
                <Link href="#about">About</Link>
              </li>
              <li className={router.pathname === "/#resume" ? "active" : ""}>
                <Link href="#resume">Resume</Link>
              </li>
              <li className={router.pathname === "/#shop" ? "active" : ""}>
                <Link href="#shop">Shop</Link>
              </li>
              <li className={router.pathname === "/#gallery" ? "active" : ""}>
                <Link href="#gallery">Gallery</Link>
              </li>
              <li className={router.pathname === "/#services" ? "active" : ""}>
                <Link href="#services">Services</Link>
              </li>
              <li className={router.pathname === "/#portfolio" ? "active" : ""}>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li className={router.pathname === "/#contact" ? "active" : ""}>
                <Link href="#contact">Contact</Link>
              </li>
              {/* <Link href={downloadFile}> */}
              <div style={{ marginLeft: "20px", marginTop: "-3px" }}>
                {/* <a href={resume} download="Resume"> */}
                <a
                  id="download"
                  download="Lovette's_Resume.pdf"
                  href="/files/resume.pdf"
                >
                  <button className="download_button">Download CV</button>
                </a>
                {/* </a> */}
              </div>
              {/* <PDFViewer pdfUrl={pdfUrl} /> */}

              {/* </Link> */}
              <li
                style={{
                  display: "flex",
                }}
              >
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          <SocialLinks />
        </div>
      </header>

      <section id="about" className="about">
        {/* About Me */}
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="img/me1.png"
                className="img-fluid"
                alt=""
                width="100%"
              />
            </div>
            <div
              className="col-lg-8 pt-4 pt-lg-0 content mb-5"
              data-aos="fade-left"
            >
              <h3>UI/UX, Web &amp; Mobile App Developer</h3>
              <p>
                I wanted to become a software developer while I was studying my
                degree. My first experience coding was at university and I found
                that I loved it. While at university{" "}
                <span>
                  Though University was not my main priority as coding
                </span>{" "}
                I also took a year out to complete an internship in a large
                organisation and found that to be a very rewarding experience
              </p>
              <p>
                From those two things I pursued a career as a developer in a
                large organisation and wound up applying for the Coding
                challenge program during my last year of university. I was
                successful and have been working at <span>Vagaly LLC </span>for
                just over 2 years now and i just recently quited my Job due to
                my movement to the United States. I am currently a developer and
                I do a bit of everything, from mobile development to web
                application development and little bit into AWS and other basic
                Designing skills.
              </p>
              <p className="">
                Have your website, mobile app, and graphic images designed and
                developed by one of the top guru, I am impatient to be hired for
                your job.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Birthday:</strong> 16 April 2002
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Website:</strong> https://dvtechweb.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Phone:</strong>
                      <a href="tel:+13013263087"> +1 301 326 3087 </a>
                      <p />
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Location:</strong> Silver Spring, MD 20905
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Degree:</strong> HND
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Work Email:</strong> nkayilovette@yahoo.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Freelance:</strong>{" "}
                      <span
                        style={{
                          background: "#333",
                          padding: "1px 10px",
                        }}
                      >
                        Available
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <span>
                <i className="fa fa-quote-left" /> Often when I’m working I’ll
                be learning something new so I might spend some time with some
                more senior developers to ask questions and learn from their
                experiences. Some days I will work from home because all of my
                meetings can be done remotely with the technology provided by my
                job. <i className="fa fa-quote-right" />
              </span>
              <p>
                What kind of software do you need? I build mobile/wearable apps,
                desktop software, web/cloud solutions, and more. Not sure what
                kind of software development service you need?{" "}
                <a href="#contact">Contact me</a> to schedule a free
                consultation.
              </p>
            </div>
          </div>
        </div>
        {/* End About Me */}

        {/* Counts */}
        <div className="counts container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="count-box">
                <i className="icofont-simple-smile"></i>
                <span data-toggle="counter-up">232</span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="icofont-document-folder"></i>
                <span data-toggle="counter-up">81</span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-live-support"></i>
                <span data-toggle="counter-up">11,563</span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-users-alt-5"></i>
                <span data-toggle="counter-up">3</span>
                <p>Companies Worked For</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Counts */}

        {/* Skills */}
        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">80%</i>
                </span>
                {/* <div className='progress-bar-wrap'> */}
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%", height: "5px" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                {/* </div> */}
                {/* <div
                  className='progress-bar bg-danger'
                  role='progressbar'
                  style={{ width: '20%', height: '5px' }}
                  aria-valuenow='20'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Python <i className="val">50%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  ReactJS, NextJS <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  FLUTTER <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  NodeJs <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  MongoDB <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  PHP <i className="val">25%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  WordPress/CMS <i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Photoshop, XD, Figma <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  AntDesign <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  React Native <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Firebase <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  GIT <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Freelance || Remote <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  NextJS <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    style={{ height: "5px" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Skills */}

        {/* Interests */}
        <div className="interests container">
          <div className="section-title">
            <h2>Interests</h2>
          </div>

          <Interests />
        </div>
        {/* End Interests */}

        {/* Quotes */}
        <div className="testimonials container  testimonialSection">
          <div className="section-title">
            <h2>Favourite Quotes</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>
      {/* End About Section */}

      {/* Resume Section */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Me</h4>
                <p>
                  Innovative and deadline-driven Software Developer with 3+
                  years of experience in designing, intergrating some few APIs
                  and developing user-centered digital material from initial
                  concept to final, polished deliverable.
                </p>
                <p>
                  <ul>
                    <li>Silver Spring MD, 20905 USA</li>
                    <li>(+1)301-326-3087</li>
                    <li>nkayilovette@yahoo.com</li>
                  </ul>
                </p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>O-Level and A-Level</h4>
                <h5>2015 - 2018</h5>
                <p>GBHS( Government Bilingual High School Bojongo)</p>
                <p>
                  I started college in 2011 and i studied{" "}
                  <span style={{ color: "#29cc61" }}>
                    Art and Sciences and finally based on studying Arts at the
                    high school, i had O-Level and A-Level certificates and i
                    was done with college from there.
                  </span>
                </p>
              </div>
              <div className="resume-item">
                <h4>Higher National Diploma(HND) &amp; Degree</h4>
                <h5>2019 - 2020</h5>
                <p>
                  London Institute of Information System Technology,
                  IMIT(Institute of Management Information Technology)
                </p>
                <p>
                  I started deep formation at the university in 2019 and i
                  studied{" "}
                  <span style={{ color: "#29cc61" }}>
                    Information System Technology
                  </span>{" "}
                  though i was not really like focus in school due to one things
                  and others.
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Software Development &amp; Graphic Design</h4>
                <h5>2020 - 2021</h5>
                <p>
                  <span>London Institute of Information System Technology</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>
                  Computing &amp; Information Technology &amp; Some Little
                  Graphic Design
                </h4>
                <h5>2019 - Present</h5>
                <p>
                  <span>
                    CAMEROON, Douala, Bonaberi, Quart Etage | Eco Bank{" "}
                  </span>
                </p>
                <p>
                  <ul>
                    <li>
                      Worked under the design, development, and implementation
                      of the software development, layout, and production
                      communication materials team at Vagaly LLC
                    </li>
                    <li>
                      Delegated tasks to the 3 members of the design team and
                      provided reports on all aspects of the project.{" "}
                    </li>
                    <li>
                      I learned plenty from the company i worked there( Vagaly
                      LLC). I learned things like ReactJS, React Native, git
                      commands and how to be focused and do the needy.
                    </li>
                    <li>
                      I learned how to work in a team by doing so, i was to
                      supervise the commit of every individual at the office so
                      everyone could "git pull", "git commit -m", "git push",
                      that was to make sure everyone could track the progress of
                      the Project and know who is responsible for what so ever.
                      It was really amazing working as such.
                    </li>
                    <li>
                      Oversee the efficient use of production project budgets
                      ranging from $2,000 - $40,000 and more.
                    </li>
                    <li>
                      I am pretty sure of myself i got a lot potentials and
                      plenty of aim at my age and how i was brought up it really
                      amaze me. <em>I am very proud of myself the way i am.</em>
                    </li>
                    <li>
                      Are u ready for the challenges? What an insane question i
                      am already ready! | `I Am Silly`
                    </li>
                  </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>Graphic design specialist</h4>
                <h5>2020 - Present</h5>
                <p>
                  <span>
                    CAMEROON, Douala, Bonaberi, Quart Etage | Home Practice
                  </span>
                </p>
                <p>
                  <ul>
                    <li>
                      Developed few marketing programs ( few logos,
                      presentations, and advertisements).
                    </li>
                    <li>
                      Managed up to 3 projects or tasks at a given time while
                      under pressure
                    </li>
                    <li>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </li>
                    <li>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section */}
      {/* Gallery Section */}

      {/* Shop Section */}
      <section id="shop" className="shop">
        <div className="container">
          <div className="section-title">
            <h2>Shop</h2>
            <p>Check My Shop</p>
          </div>
        </div>
      </section>
      <section id="gallery" className="galleryContainer">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>My Photography Gallery</p>
          </div>
          <div className="row">
            <Gallery />
          </div>
        </div>
      </section>
      {/* End Gallery Section */}
      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>My Services</p>
          </div>

          <Services />
        </div>
      </section>
      {/* End Services Section */}

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Design</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {posts.map((portfolio, index) => (
              <Portfolio key={index} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>My Address</h3>
                <p> Silver Spring MD, 20905, USA</p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a
                    href="https://instagram.com/thedev.init"
                    target="_blank"
                    className="instagram"
                  >
                    <i className="icofont-instagram"></i>
                  </a>
                  <a
                    href="https://facebook.com/chris.chacodaar"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                  <a
                    href="https://github.com/nkayilovette03"
                    target="_blank"
                    className="github"
                  >
                    <i className="icofont-github"></i>
                  </a>
                  <a
                    href="https://twitter.com/@chacodaar"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-twitter"></i>
                  </a>
                  <a
                    href="https://open.spotify.com/user/zvjq73c6I01e2m0qeg7Ifgohn?si=S9ZbLYK2RcGj3Pp3gAeiiA"
                    target="_blank"
                    className="google-plus"
                  >
                    <i className="icofont-spotify"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/nkayi-lovette-8ab976205"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>nkayilovette@yahoo.com</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p>+1 301 326 3087</p>
              </div>
            </div>
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
          {isLoading ? (
            <Spinner />
          ) : (
            <form
              action=""
              method="post"
              role="form"
              className="php-email-form mt-4"
              onSubmit={sendEmail}
            >
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="validate"></div>
              </div>
              {/* helo */}
              {/* <div className='mb-3'>
              {loading ? (
                <>
                  <div className='loading'>Loading..</div>
                </>
              ) : (
                ''
              )}
              {errorMessage ? (
                <>
                  <div className='error-message'></div>
                </>
              ) : (
                ''
              )}
              {sent ? (
                <>
                  <div className='sent-message'>
                    Your message has been sent. Thank you!
                  </div>
                </>
              ) : (
                ''
              )}
            </div> */}
              <div className="text-center">
                <button type="submit" disabled={isLoading}>
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      {/* <div className='credits'>
        Designed by <Link href='/'>Chacodaar(CUI) </Link>
      </div> */}

      <script src="lib/jquery/jquery.min.js"></script>
      <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="lib/jquery.easing/jquery.easing.min.js"></script>
      {/* <script src='lib/php-email-form/validate.js'></script> */}
      <script src="lib/waypoints/jquery.waypoints.min.js"></script>
      <script src="lib/counterup/counterup.min.js"></script>
      <script src="lib/owl.carousel/owl.min.js"></script>
      <script src="lib/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="lib/venobox/venobox.min.js"></script>

      {/* Template Main JS File */}
      <script src="js/main.js"></script>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the post directory
  const files = fs.readdirSync(path.join("portfolios"));

  // Get slug frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("portfolios", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
