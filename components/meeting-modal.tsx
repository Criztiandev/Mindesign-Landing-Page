"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  X,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MeetingModal = ({ isOpen, onClose }: MeetingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.error(
      "Opps! This feature is not available yet, Please try again later.",
      {
        duration: 5000,
        position: "top-right",
      }
    );
    onClose();
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <h2 className="text-2xl font-black text-[#303030]">
                    Schedule a Meeting
                  </h2>
                  <p className="text-[#303030]/70 mt-1">
                    Let&apos;s discuss your project and how we can help
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-[#303030] hover:bg-gray-100 rounded-full p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#303030] mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#303030] mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#303030] mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all"
                      placeholder="+61 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#303030] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#303030] mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="development">Web Development</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#303030] mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all"
                    >
                      <option value="">Select budget</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Meeting Preferences */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#303030] mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#303030] mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all"
                    >
                      <option value="">Select time</option>
                      <option value="9am">9:00 AM</option>
                      <option value="10am">10:00 AM</option>
                      <option value="11am">11:00 AM</option>
                      <option value="1pm">1:00 PM</option>
                      <option value="2pm">2:00 PM</option>
                      <option value="3pm">3:00 PM</option>
                      <option value="4pm">4:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#303030] mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#75fbc0] focus:border-transparent transition-all resize-none"
                    placeholder="Describe your project goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 py-3 border-[#303030] text-[#303030] hover:bg-[#303030] hover:text-white transition-all"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 py-3 bg-[#75fbc0] hover:bg-[#75fbc0]/90 text-black font-medium transition-all"
                  >
                    Schedule Meeting
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MeetingModal;
