"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/constants";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Home = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="mx-auto w-full">
      <Header />

          {/* Hero Section */}
          <Element name="home" className="element">
              
      <motion.section
        className="mt-10 mx-auto px-5 max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-between gap-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        >
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-8 mx-auto md:mx-0"
          variants={fadeIn}
        >
          <h2 className="text-3xl lg:text-6xl font-bold text-center md:text-left lg:w-[700px]">
            Complete Health Care Solutions for Everyone
          </h2>
          <p className="text-xs lg:text-base text-slate-400 text-center md:text-left md:w-[35rem]">
            We're always available for our Patients with emergen problems. You
            can easily reach us 24/7. We focused on highest quality.
          </p>
          <Link
            href="/patients"
            className="rounded-full px-5 py-2 bg-green-500 text-center md:text-center w-[200px] mx-auto md:mx-0 hover:bg-green-700"
            >
            Make Appointment
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center md:justify-end w-full"
          variants={fadeIn}
          >
          <Image
            src="/assets/images/doctor.png"
            alt="doctor"
            width={500}
            height={500}
            className="side-img z-15 max-w-[80%] h-auto"
            />
        </motion.div>
      </motion.section>
            </Element>

          {/* About Section */}
          <Element name="about" className="element">
              
      <motion.section
        className="sub-container my-[60px]"
        id="about"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        >
        <div className="flex mx-auto px-5 items-center flex-col lg:flex-row justify-center gap-[4rem]">
          <motion.div variants={fadeIn}>
            <Image
              src="/assets/images/about-img.jpg"
              alt="aboutImg"
              height={500}
              width={500}
              className="rounded-md"
              />
          </motion.div>

          <motion.div
            className="max-w-[600px] flex flex-col gap-5"
            variants={fadeIn}
            >
            <p className="text-orange-400 font-semibold">Who we are?</p>
            <h2 className="lg:text-6xl font-semibold text-3xl">
              Short story about UFirst
            </h2>
            <p className="text-slate-400 text-xs lg:text-base">
              Ufirst is an online healthcare provider, Offering health solutions
              and advice to over 30,00,000 patients across Philippines.
            </p>
            <p className="text-slate-400 text-xs lg:text-base">
              With a team of licensed doctors and pharmacists, Ufirst aims to
              provide comprehensive medical consultation services for patients
              and doctors alike.
            </p>
            <Button
              type="button"
              className="text-white w-[150px] bg-green-500 hover:bg-green-700"
              >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>
                </Element>

          {/* Services Section */}
          <Element name="services" className="element">
              
      <motion.section
        className="container my-16"
        id="services"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        >
        <motion.p
          className="text-center text-orange-400 font-semibold"
          variants={fadeIn}
          >
          Our Services
        </motion.p>
        <motion.h2
          className="sub-container max-w-screen-lg text-center text-2xl md:text-4xl lg:text-6xl font-semibold"
          variants={fadeIn}
          >
          We Offer Different Services To Improve Your Health
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-5 overflow-hidden">
          {services.map((service) => (
              <motion.div
              key={service.title}
              className="w-[300px] bg-slate-600 hover:bg-green-600"
              variants={fadeIn}
              >
              <Card>
                <CardHeader className="flex flex-col items-center justify-center">
                  <CardTitle>
                    <div className="relative w-[50px] aspect-square">
                      <Image
                        src={service.image}
                        fill
                        alt={service.title}
                        className="object-contain"
                        />
                    </div>
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    {service.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-14-regular text-dark-700 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
          </Element>

      <Footer />
    </div>
  );
};

export default Home;
