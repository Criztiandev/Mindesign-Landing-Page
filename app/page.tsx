"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Image from "next/image";
import partnershipData from "@/data/partnership.data";
import HeaderDropdown from "@/components/header-drop-down";
import servicesDropdownItems from "@/data/service.data";
import resourcesDropdownItems from "@/data/resources.data";
import projectData from "@/data/project.data";
import teamMemberData from "@/data/team.data";
import MeetingModal from "@/components/meeting-modal";
import { Fragment, useState } from "react";

export default function HomePage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  const toggleMeetingModal = () => {
    setIsMeetingModalOpen(!isMeetingModalOpen);
  };

  return (
    <Fragment>
      <div className="min-h-screen bg-[#FFF5EE]">
        {/* Header */}
        <motion.header
          className="flex items-center justify-between px-6 py-4 lg:px-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold text-[#303030]">
            min<span className="text-[#75fbc0]">designs</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <HeaderDropdown title="Services" items={servicesDropdownItems} />
            <HeaderDropdown title="Resources" items={resourcesDropdownItems} />
            <span className="text-[#303030] hover:text-[#75fbc0] transition-colors cursor-pointer">
              About Us
            </span>
            <span className="text-[#303030] hover:text-[#75fbc0] transition-colors cursor-pointer">
              Contact Us
            </span>
          </nav>

          <Button className="bg-[#75fbc0] hover:bg-[#75fbc0]/90 text-black font-medium px-6 py-2 rounded-full">
            Discover Portfolio
          </Button>
        </motion.header>

        {/* Large MINDESIGNS Text */}
        <div className="border-t-2 border-b-2 border-black h-[300px] overflow-hidden flex items-center justify-center">
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-[#303030] text-[18rem] hero-text leading-none tracking-wider font-thick-thin px-[20px] pt-[40px] h-[250px]">
              MINDESIGNS
            </div>
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="px-6 lg:px-12 border-b-2 border-black">
          <div className="grid lg:grid-cols-[70%_auto] gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8 border-r-2 border-black pr-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6 border-black mt-12 pb-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#303030] leading-tight">
                  DO YOU WANT TO{" "}
                  <span className="text-[#75fbc0]">
                    GENERATE MORE LEADS AND CUSTOMERS
                  </span>{" "}
                  THROUGH YOUR WEBSITE?
                </h1>

                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-[#303030] leading-tight">
                  YOU ARE IN THE RIGHT PLACE! DESIGN AND MARKETING ARE OUR
                  SPECIALITIES.
                </h2>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-12"
                onClick={toggleMeetingModal}
              >
                <Button className="bg-[#75fbc0] hover:bg-[#75fbc0]/90 text-black font-medium border-2 border-black p-6 rounded-full text-lg">
                  Let's Talk
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Koala Illustration */}
            <motion.div
              className="flex justify-center lg:justify-end border-black"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="bg-[#75fbc0] rounded-3xl p-12 w-full max-w-md aspect-square flex items-center justify-center"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-96 h-96">
                  {/* Koala SVG Illustration */}
                  <Image
                    src="/images/koala-logo.png"
                    alt="Koala"
                    width={800}
                    height={800}
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Partnership Section */}
        <motion.section
          className=" mt-24 bg-[#FFF5EE] overflow-hidden flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-full">
            <div className="relative">
              <motion.div
                className="flex space-x-16 items-center"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of partners */}
                {partnershipData.map((partner) => (
                  <div
                    key={`first-${partner.id}`}
                    className="flex-shrink-0 w-48 h-24 flex items-center justify-center hover:border-[#75fbc0]/30 transition-colors"
                  >
                    <Image
                      src={partner.image ?? ""}
                      alt={partner.id.toString()}
                      width={300}
                      height={300}
                    />
                  </div>
                ))}

                {partnershipData.map((partner) => (
                  <div
                    key={`first-${partner.id}`}
                    className="flex-shrink-0 w-48 h-24 flex items-center justify-center hover:border-[#75fbc0]/30 transition-colors"
                  >
                    <Image
                      src={partner.image ?? ""}
                      alt={partner.id.toString()}
                      width={200}
                      height={200}
                    />
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {partnershipData.map((partner) => (
                  <div
                    key={`second-${partner.id}`}
                    className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#75fbc0]/30 transition-colors"
                  >
                    <Image
                      src={partner.image ?? ""}
                      alt={partner.id.toString()}
                      width={200}
                      height={200}
                    />
                  </div>
                ))}
              </motion.div>

              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#FFF5EE] to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FFF5EE] to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="mt-24 py-20 bg-[#142125] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="px-6 lg:px-12">
            {/* Section Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                FULL SERVICE <span className="text-[#75fbc0]">MARKETING</span>
                <br />& DESIGN AGENCY
              </h2>
            </motion.div>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Design Column */}
              <motion.div
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Design Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      {/* Paper stack */}
                      <rect
                        x="20"
                        y="30"
                        width="60"
                        height="70"
                        rx="4"
                        fill="white"
                        transform="rotate(-10 50 65)"
                      />
                      <rect
                        x="25"
                        y="25"
                        width="60"
                        height="70"
                        rx="4"
                        fill="#ff69b4"
                        transform="rotate(-5 55 60)"
                      />
                      <rect
                        x="30"
                        y="20"
                        width="60"
                        height="70"
                        rx="4"
                        fill="white"
                      />
                      {/* Design lines */}
                      <line
                        x1="40"
                        y1="35"
                        x2="70"
                        y2="35"
                        stroke="#142125"
                        strokeWidth="2"
                      />
                      <line
                        x1="40"
                        y1="45"
                        x2="80"
                        y2="45"
                        stroke="#142125"
                        strokeWidth="2"
                      />
                      <line
                        x1="40"
                        y1="55"
                        x2="65"
                        y2="55"
                        stroke="#142125"
                        strokeWidth="2"
                      />
                      {/* Pencil */}
                      <rect
                        x="85"
                        y="75"
                        width="3"
                        height="20"
                        fill="#ffd700"
                        transform="rotate(45 86.5 85)"
                      />
                      <polygon
                        points="86.5,73 88.5,75 84.5,75"
                        fill="#ff69b4"
                        transform="rotate(45 86.5 74)"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white">DESIGN</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We design brands that are optimised to convert more leads.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Web Design",
                    "Brand Guidelines",
                    "Logo Design",
                    "Animation",
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      className="border border-white/20 rounded-full py-3 px-6 text-white hover:border-[#ff69b4] hover:bg-[#ff69b4]/10 transition-all cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Marketing Column */}
              <motion.div
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Marketing Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      {/* Laptop base */}
                      <rect
                        x="20"
                        y="70"
                        width="80"
                        height="8"
                        rx="4"
                        fill="#666"
                      />
                      {/* Laptop screen */}
                      <rect
                        x="25"
                        y="25"
                        width="70"
                        height="50"
                        rx="3"
                        fill="#333"
                      />
                      <rect
                        x="30"
                        y="30"
                        width="60"
                        height="35"
                        rx="2"
                        fill="white"
                      />
                      {/* Screen content */}
                      <rect
                        x="35"
                        y="35"
                        width="25"
                        height="15"
                        fill="#75fbc0"
                      />
                      <rect x="65" y="35" width="20" height="8" fill="#ddd" />
                      <rect x="65" y="47" width="15" height="6" fill="#ddd" />
                      {/* Floating element */}
                      <rect
                        x="85"
                        y="15"
                        width="20"
                        height="20"
                        rx="3"
                        fill="#75fbc0"
                        transform="rotate(15 95 25)"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white">MARKETING</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We help you strategise a solid online marketing approach.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "SEO Services",
                    "Google Ads (SEM)",
                    "Social Media Ads",
                    "NFT Marketing",
                    "Web Analytics",
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      className="border border-white/20 rounded-full py-3 px-6 text-white hover:border-[#75fbc0] hover:bg-[#75fbc0]/10 transition-all cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Development Column */}
              <motion.div
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Development Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      {/* Server rack */}
                      <rect
                        x="30"
                        y="20"
                        width="60"
                        height="80"
                        rx="4"
                        fill="#333"
                      />
                      {/* Server units */}
                      <rect
                        x="35"
                        y="25"
                        width="50"
                        height="15"
                        rx="2"
                        fill="#555"
                      />
                      <rect
                        x="35"
                        y="45"
                        width="50"
                        height="15"
                        rx="2"
                        fill="#555"
                      />
                      <rect
                        x="35"
                        y="65"
                        width="50"
                        height="15"
                        rx="2"
                        fill="#555"
                      />
                      {/* LED indicators */}
                      <circle cx="40" cy="32" r="2" fill="#00ff00" />
                      <circle cx="40" cy="52" r="2" fill="#ffd700" />
                      <circle cx="40" cy="72" r="2" fill="#00ff00" />
                      {/* Floating coin */}
                      <circle cx="95" cy="25" r="12" fill="#ffd700" />
                      <text
                        x="95"
                        y="30"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#333"
                        fontWeight="bold"
                      >
                        $
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white">
                    DEVELOPMENT
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We offer back and front-end development for all your website
                    needs.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Website Development",
                    "Web Hosting",
                    "Web Maintenance",
                    "API Development",
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      className="border border-white/20 rounded-full py-3 px-6 text-white hover:border-[#ffd700] hover:bg-[#ffd700]/10 transition-all cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Reviews Section */}
        <motion.section
          className="py-20 bg-[#FFF5EE]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="px-6 lg:px-12">
            {/* Section Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#303030] leading-tight">
                MINDESIGNS REVIEWS
              </h2>
            </motion.div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-2 border-[#303030]/20 rounded-2xl p-8 hover:border-[#75fbc0] transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Angelina Geroeva
                    </h3>

                    <p className="text-[#303030]/80 text-base leading-relaxed">
                      Perfect service! The best staff. Highly recommended
                    </p>

                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.1 + starIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          <svg
                            className="w-5 h-5 fill-[#303030]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-20 bg-[#FFF5EE]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="px-6 lg:px-12">
            {/* Section Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#303030] leading-tight">
                OUR PROJECTS
              </h2>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {projectData.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white border-2 border-[#303030]/20 rounded-2xl overflow-hidden hover:border-[#75fbc0] transition-all duration-300 hover:shadow-lg group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#303030]">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {["UX Design", "University", "JavaScript"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#4c3a57]/10 text-[#4c3a57] text-sm rounded-full border border-[#4c3a57]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      className="w-full bg-[#303030] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#75fbc0] hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {index === 0 || index === 4
                        ? "Figma Community"
                        : "View Project"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="py-[150px] bg-[#FFF5EE] border-t-2 border-black border-b-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="px-6 lg:px-12">
            {/* Values Grid */}
            <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
              {/* Collaboration */}
              <motion.div
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Collaboration Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-40 h-40">
                    <Image
                      src="/images/values-1.png"
                      alt="Collaboration"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-black text-[#303030]">
                    Collaboration
                  </h3>
                  <p className="text-[#303030]/80 text-lg leading-relaxed max-w-sm mx-auto">
                    We collaborate with you to understand how your business
                    works and share our knowledge to build an excellent customer
                    experience.
                  </p>
                </div>
              </motion.div>

              {/* Creativity */}
              <motion.div
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Creativity Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-40 h-40">
                    <Image
                      src="/images/values-2.png"
                      alt="Collaboration"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-black text-[#303030]">
                    Market Centered
                  </h3>
                  <p className="text-[#303030]/80 text-lg leading-relaxed max-w-sm mx-auto">
                    Our creative process starts with curiosity about the
                    market’s problems and desires. The more we know, the better
                    we can tailor our strategies.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Creativity Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-40 h-40">
                    <Image
                      src="/images/values-3.png"
                      alt="Collaboration"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-black text-[#303030]">
                    Creativity
                  </h3>
                  <p className="text-[#303030]/80 text-lg leading-relaxed max-w-sm mx-auto">
                    Creativity comes from your vision and business mission. We
                    are here to nurture your creativity and always offer
                    guidance if needed.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="py-[150px] bg-[#FFF5EE]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="px-6 lg:px-12">
            {/* Section Title */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#303030] leading-tight">
                OUR TEAM
              </h2>
            </motion.div>

            {/* Team Grid - Infinite Draggable Scroller */}
            <div className="relative overflow-hidden px-8">
              <motion.div
                className="flex gap-8 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -400, right: 100 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                initial={{ x: 0 }}
                style={{ width: "fit-content" }}
                whileDrag={{ cursor: "grabbing" }}
              >
                {/* First set of team members */}
                {teamMemberData.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="flex-shrink-0 text-center space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Team Member Photo */}
                    <motion.div
                      className="relative cursor-grab active:cursor-grabbing"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-64 h-64 border-2 border-[#303030] rounded-lg relative z-10">
                        <div className="w-full h-full bg-gradient-to-br from-[#ff69b4]/30 via-[#ff69b4]/20 to-[#ff69b4]/40 flex items-center justify-center rounded-lg overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover select-none pointer-events-none"
                            draggable={false}
                          />
                        </div>
                      </div>

                      {/* Drag indicator overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/10 rounded-lg z-20">
                        <div className="bg-white/90 rounded-full p-2 shadow-lg">
                          <svg
                            className="w-6 h-6 text-[#303030]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    {/* Team Member Info */}
                    <div className="space-y-2 pointer-events-none">
                      <h3 className="text-2xl font-black text-[#303030]">
                        {member.name}
                      </h3>
                      <p className="text-[#303030]/80 text-lg font-medium">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#FFF5EE] to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FFF5EE] to-transparent pointer-events-none z-10" />
            </div>

            {/* Drag instruction */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#303030]/60 text-sm">
                ← Click and drag any team member photo to explore →
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>

      <MeetingModal isOpen={isMeetingModalOpen} onClose={toggleMeetingModal} />
    </Fragment>
  );
}
