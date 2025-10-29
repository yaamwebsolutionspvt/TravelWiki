import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import EmailObfuscated from '../components/EmailObfuscated';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    duration: '',
    travelers: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [submitStatus, setSubmitStatus] = useState(''); // '', 'success', 'error'

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://formspree.io/f/xbladzab", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
        setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        duration: '',
        travelers: '',
        message: ''
      });
        // Hide success after a short delay (optional)
        setTimeout(() => setSubmitStatus(''), 4000);
    } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 4000);
    }
  } catch (err) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 4000);
  }
};

  return (
    <>
      <SEO
        title="Contact Kashmir Tourism 2025 | Book Best Kashmir Tour Packages | Call +91 8899971960"
        description="Contact Kashmir Tourism experts for best Kashmir tour packages, Ladakh trips, honeymoon packages. Get instant quotes for Srinagar, Gulmarg, Pahalgam tours. Call +91 8899971960 or email us for personalized Kashmir travel planning."
        keywords="contact Kashmir tourism, Kashmir tour booking, Ladakh tour booking, Kashmir travel agent, Kashmir packages contact, Kashmir tourism phone number, Kashmir tour inquiry, book Kashmir tour, Kashmir travel planning, Kashmir tour consultant, Kashmir holiday booking, Kashmir honeymoon booking, Kashmir family tour booking, Kashmir adventure tour booking, Kashmir cultural tour booking, Kashmir group tour booking, Kashmir customized tour booking"
      />

      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Contact Kashmir Tourism Experts
              <span className="block text-2xl md:text-3xl font-medium mt-2 text-yellow-300">
                Plan Your Perfect Kashmir & Ladakh Journey
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Get personalized assistance from our Kashmir tourism experts. We specialize in Kashmir tour packages,
              Ladakh adventures, honeymoon trips, family vacations, and customized itineraries.
              Contact us for best prices and authentic experiences.
            </p>

            {/* Contact highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-black">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">📞 Instant Response</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">💰 Best Prices</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">🎯 Customized Tours</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">🏆 Expert Guides</span>
            </div>

            {/* Quick contact buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918899971960"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                📞 Call Now: +91 8899971960
              </a>
              <a
                href="https://wa.me/918899971960?text=Hi, I want to book a Kashmir tour package"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                💬 WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+91 8899971960</p>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        <EmailObfuscated user="info" domain="travelwiki" tld="org.in" asLink className="underline" />
                      </p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Location</h3>
                      <p className="text-gray-600">Bijbihara, Anantnag</p>
                      <p className="text-sm text-gray-500">J&K, India</p>
                  </div>
                </div>
              </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Why Choose Us?</h3>
                  <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Best Price Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Local Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Customized Packages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us Your Travel Requirements</h2>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">How it works:</h3>
                  <ol className="text-sm text-blue-700 space-y-1">
                    <li>1. Tell us details of your holiday plan</li>
                    <li>2. Our Tour Experts will customize the plan and email you with 2-3 hotel options</li>
                    <li>3. Select & book the best deal</li>
                  </ol>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                        Destination
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white form-field-mobile"
                      >
                        <option value="">Select destination</option>
                        <option value="Kashmir">Kashmir</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Kashmir & Ladakh">Kashmir & Ladakh</option>
                        <option value="Gulmarg">Gulmarg</option>
                        <option value="Pahalgam">Pahalgam</option>
                        <option value="Sonamarg">Sonamarg</option>
                        <option value="Leh">Leh</option>
                        <option value="Nubra Valley">Nubra Valley</option>
                        <option value="Pangong Lake">Pangong Lake</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Travel Date
                      </label>
                      <input
                        id="travelDate"
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base form-field-mobile"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                        Duration
                      </label>
                      <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white form-field-mobile"
                      >
                        <option value="">Select duration</option>
                        <option value="3 Days">3 Days</option>
                        <option value="4 Days">4 Days</option>
                        <option value="5 Days">5 Days</option>
                        <option value="6 Days">6 Days</option>
                        <option value="7 Days">7 Days</option>
                        <option value="8+ Days">8+ Days</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
                        No. of Travelers
                      </label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white form-field-mobile"
                      >
                        <option value="">Select travelers</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3-4">3-4 People</option>
                        <option value="5-8">5-8 People</option>
                        <option value="9+">9+ People</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      placeholder="Tell us about your preferences, budget, special requirements, etc."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Send Inquiry
                    </button>
                    <a
                      href="tel:+918899971960"
                      className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                    >
                      Call Now: +91 8899971960
                    </a>
                  </div>

                  {/* Inline submit status messages at bottom */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 rounded-md bg-green-50 p-4" role="status" aria-live="polite">
                      <p className="text-green-800 text-sm font-medium">✅ Thank you! Your inquiry has been submitted successfully.</p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mt-4 rounded-md bg-red-50 p-4" role="status" aria-live="polite">
                      <p className="text-red-700 text-sm font-medium">❌ Submission failed. Please check your connection and try again.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How can I book a tour package?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  You can book by filling out the contact form above, calling us directly, or sending a WhatsApp message. 
                  We'll customize the perfect package for your needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What's included in the tour packages?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our packages include accommodation, meals, transportation, guided tours, and all necessary permits. 
                  Specific inclusions vary by package.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do you provide airport pickup?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Yes, we provide airport pickup and drop-off services from Srinagar and Leh airports for all our tour packages.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What's the best time to visit Kashmir?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Kashmir is beautiful year-round. Spring (March-May) and Autumn (September-November) are ideal for sightseeing, 
                  while winter (December-February) is perfect for snow activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
