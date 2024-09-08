"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/navbar";
import { AnimatedCreators } from "./ui/animated-creators";
import { motion } from "framer-motion";
import BookDemoButton from "./ui/book-demo-button";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function HeroSection() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image: "/creator-1.png",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image: "/creator-2.png",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: "/creator-3.png",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image: "/creator-4.png",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image: "/creator-5.png",
    },
  ];
  return (
    <div className="h-screen w-full">
      <BackgroundGradientAnimation>
    <div className="w-full h-screen bg-neutral-900 flex flex-col items-center justify-center">
        <Navbar className="top-2" />
        <div className="max-h-screen absolute flex flex-col items-center justify-self-center mx-auto py-40">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center"
          >

            <BookDemoButton />
          </motion.div>
            <h2 className="text-7xl font-bold text-center px-64 mt-5">
              <span className="text-center">Monetize your group</span>
              <br />
              <span className="text-center">chat in seconds</span>
            </h2>
            <p className="text-center text-xl text-gray-400 mt-3 mb-10">
              Connect Discord, WhatsApp & Slack. 0% platform fees
            </p>
            <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center"
          >

            <div className="flex items-center justify-center">
              <button className="bg-[#1261ff] hover:bg-blue-500 border border-blue-500 z-10 rounded-full px-4 py-2 mr-2 font-bold cursor-pointer">
                Get started free
              </button>
              <button className="border border-[#29292c] z-10 hover:bg-gray-600 bg-gray-700 rounded-full px-4 py-2 font-bold cursor-pointer">
                See features
              </button>
            </div>
          </motion.div>
            <div className="flex flex-row items-center justify-center mt-10 w-full">
              <AnimatedCreators items={people} />
            </div>
            <p className="text-center text-sm text-gray-400 mt-1">
              Join 2000+ creators
            </p>
          </motion.div>
        </div>
        <ShootingStars />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={10}
          className="w-full h-screen"
          particleColor="#FFFFFF"
        />
    </div>
      </BackgroundGradientAnimation>
      </div>
  );
}
