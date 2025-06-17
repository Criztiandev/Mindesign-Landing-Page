"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Dribbble, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      className="bg-white py-16 px-6 lg:px-12 border-t border-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo and Social Media */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-[#303030]">
              min<span className="text-[#75fbc0]">designs</span>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Dribbble, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="w-8 h-8 bg-[#303030] rounded-full flex items-center justify-center text-white hover:bg-[#75fbc0] hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Design Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#ff69b4] rounded-full"></div>
              <h3 className="text-lg font-bold text-[#303030]">Design</h3>
            </div>

            <ul className="space-y-3">
              {["Web Design", "Brand Guidelines", "Logo Design", "Animation"].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-[#303030]/70 hover:text-[#ff69b4] transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Marketing Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#75fbc0] rounded-full"></div>
              <h3 className="text-lg font-bold text-[#303030]">Marketing</h3>
            </div>

            <ul className="space-y-3">
              {["SEO", "Google Ads (SEM)", "Social Media Ads", "NFT Marketing", "Web Analytics"].map(
                (service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-[#303030]/70 hover:text-[#75fbc0] transition-colors duration-300 text-sm"
                    >
                      {service}
                    </a>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Development Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#ffd700] rounded-full"></div>
              <h3 className="text-lg font-bold text-[#303030]">Development</h3>
            </div>

            <ul className="space-y-3">
              {["Web Development", "Web Hosting", "Web Maintenance", "API Development"].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-[#303030]/70 hover:text-[#ffd700] transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources and About Us */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#303030]">Resources</h3>
              <ul className="space-y-2">
                {["Blog", "Downloads", "Portfolio"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-[#303030]/70 hover:text-[#75fbc0] transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#303030]">About Us</h3>
              <ul className="space-y-2">
                {["Locations", "Contact Us", "Terms & Conditions"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-[#303030]/70 hover:text-[#75fbc0] transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <motion.div
              className="space-y-3 pt-4 border-t border-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-[#303030]">Sydney / Cairns</p>
              <div className="space-y-1">
                <a
                  href="mailto:info@mindesigns.com.au"
                  className="text-sm text-[#303030]/70 hover:text-[#75fbc0] transition-colors duration-300 block"
                >
                  info@mindesigns.com.au
                </a>
                <a
                  href="tel:+61469706567"
                  className="text-sm text-[#303030]/70 hover:text-[#75fbc0] transition-colors duration-300 block"
                >
                  +61 469 706 567
                </a>
                <a
                  href="tel:+61435920802"
                  className="text-sm text-[#303030]/70 hover:text-[#75fbc0] transition-colors duration-300 block"
                >
                  +61 435 920 802
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
