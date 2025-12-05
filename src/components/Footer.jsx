import React, { useMemo, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SEOHeading, SEOContent, SEOImage, SEOParagraph, SEOList } from '../utils/seoUtils.jsx';
import EmailObfuscated from './EmailObfuscated';

const logo = "https://res.cloudinary.com/dw1sh368y/travelwiki/public/logo.webp";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const res = await fetch("https://formspree.io/f/xbladzab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          type: 'newsletter_subscription',
          source: 'footer'
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setEmail('');
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Memoize the logo element to prevent re-renders
  const logoElement = useMemo(() => (
    <SEOImage
      src={logo}
      alt="Kashmir Tourism - Best Kashmir Tour Packages & Holiday Deals"
      keyword="Kashmir Tourism"
      className="h-24 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
      loading="lazy"
      decoding="async"
    />
  ), []);

  // Memoize the newsletter form to prevent re-renders
  const newsletterForm = useMemo(() => (
    <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 w-full max-w-sm">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 min-w-[200px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-green-500 focus:border-green-500 text-base shadow-sm transition-all"
        aria-label="Email address for newsletter"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? 'animate-pulse' : ''}`}
        aria-label="Subscribe to newsletter"
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-600 text-sm font-medium">✅ Successfully subscribed!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-sm font-medium">❌ Subscription failed. Please try again.</p>
      )}
    </form>
  ), [email, isSubmitting, submitStatus, handleNewsletterSubmit]);

  return (
    <SEOContent
      semantic="footer"
      className="bg-gradient-to-br from-slate-50 to-gray-100 border-t mt-16 shadow-lg"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16 items-start">

        {/* Logo/Branding */}
        <div className="space-y-6 md:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-center md:justify-start">
            {logoElement}
          </div>
          <div className="text-center md:text-left">
            <SEOHeading
              level={2}
              keyword="Kashmir Tourism"
              className="text-green-700 font-bold text-2xl lg:text-3xl mb-2"
            >
              Kashmir Tourism 2025
            </SEOHeading>
            <SEOParagraph
              keyword="Kashmir Tourism"
              className="text-yellow-600 font-semibold text-base lg:text-lg"
            >
              Your Gateway to Paradise on Earth
            </SEOParagraph>
            <SEOParagraph
              keyword="Kashmir Tour Packages"
              className="text-gray-600 text-sm lg:text-base mt-3 leading-relaxed"
            >
              Leading Kashmir tourism company offering best tour packages for <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Srinagar</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Gulmarg</Link>, <Link to="/places-to-visit-in-pahalgam" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Pahalgam</Link>,
              <Link to="/places-to-visit-in-sonamarg" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Sonamarg</Link>, and <Link to="/leh-ladakh-packages" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Ladakh</Link>. Expert guides, best prices, unforgettable experiences.
            </SEOParagraph>

            {/* SEO-friendly keywords */}
            <div className="mt-4 text-xs text-gray-500">
              <p>
                <strong>Services:</strong> <Link to="/packages-listing" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Kashmir tour packages</Link>, <Link to="/kashmirtourpackages/kashmir-honeymoon-tour" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">honeymoon tours</Link>, <Link to="/kashmirtourpackages/kashmir-family-tour" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">family packages</Link>,
                adventure tours, cultural tours, <Link to="/leh-ladakh-packages" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Ladakh trips</Link>, <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">houseboat stays</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">skiing tours</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-6 md:col-span-1 lg:col-span-1">
          <SEOHeading
            level={3}
            keyword="Kashmir Tourism"
            className="text-xl lg:text-2xl font-bold mb-4 text-gray-800"
          >
            Stay Connected
          </SEOHeading>
          <SEOParagraph
            keyword="Kashmir Tour Packages"
            className="mb-6 text-sm lg:text-base text-gray-700 leading-relaxed"
          >
            Subscribe to our newsletter and never miss exclusive deals and travel updates.
          </SEOParagraph>
          {newsletterForm}
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <SEOHeading
            level={3}
            keyword="Kashmir Tour Packages"
            className="text-xl lg:text-2xl font-bold mb-4 text-gray-800"
          >
            Quick Links
          </SEOHeading>
          <div className="grid grid-cols-1 gap-2">
            <SEOHeading
              level={4}
              keyword="Kashmir Tour Packages"
              className="font-semibold text-gray-700 mb-2"
            >
              Tour Packages
            </SEOHeading>
            <SEOList
              items={[
                <Link to="/packages-listing" className="hover:text-green-600 transition-colors duration-200">Kashmir Tour Packages</Link>,
                <Link to="/leh-ladakh-packages" className="hover:text-green-600 transition-colors duration-200">Ladakh Tour Packages</Link>,
                <Link to="/kashmirtourpackages/honeymoon" className="hover:text-green-600 transition-colors duration-200">Kashmir Honeymoon Packages</Link>,
                <Link to="/kashmirtourpackages/family" className="hover:text-green-600 transition-colors duration-200">Kashmir Family Packages</Link>
              ]}
              className="space-y-1 text-sm"
            />

            <SEOHeading
              level={4}
              keyword="Kashmir Destinations"
              className="font-semibold text-gray-700 mb-2 mt-4"
            >
              Destinations
            </SEOHeading>
            <SEOList
              items={[
                <Link to="/places-to-visit/srinagar" className="hover:text-green-600 transition-colors duration-200">Srinagar Tourism</Link>,
                <Link to="/places-to-visit/gulmarg" className="hover:text-green-600 transition-colors duration-200">Gulmarg Tourism</Link>,
                <Link to="/places-to-visit/pahalgam" className="hover:text-green-600 transition-colors duration-200">Pahalgam Tourism</Link>,
                <Link to="/places-to-visit/sonamarg" className="hover:text-green-600 transition-colors duration-200">Sonamarg Tourism</Link>
              ]}
              className="space-y-1 text-sm"
            />
          </div>
        </div>

        {/* Important Links & Social */}
        <div className="space-y-6">
          <SEOHeading
            level={3}
            keyword="Kashmir Tourism"
            className="text-xl lg:text-2xl font-bold mb-4 text-gray-800"
          >
            Important Links
          </SEOHeading>
          <SEOList
            items={[
              <Link to="/about-us" className="hover:text-green-600 transition-colors duration-200">About Kashmir Tourism</Link>,
              <Link to="/terms-and-condition" className="hover:text-green-600 transition-colors duration-200">Terms and Conditions</Link>,
              <Link to="/privacy-policy" className="hover:text-green-600 transition-colors duration-200">Privacy Policy</Link>,
              <Link to="/refund-policy" className="hover:text-green-600 transition-colors duration-200">Refund Policy</Link>,
              <Link to="/contact" className="hover:text-green-600 transition-colors duration-200">Contact Us</Link>
            ]}
            className="space-y-2"
          />

          <div className="mt-6">
            <SEOHeading
              level={4}
              keyword="Kashmir Tourism"
              className="font-semibold text-gray-700 mb-3"
            >
              Follow Us
            </SEOHeading>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/travel_wikiofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/travelwikiofficiall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <SEOHeading
            level={3}
            keyword="Kashmir Tourism Contact"
            className="text-xl lg:text-2xl font-bold mb-4 text-gray-800"
          >
            Contact Info
          </SEOHeading>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FaPhoneAlt className="text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600 text-sm">+91 8899971960</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600 text-sm">
                  <EmailObfuscated user="info" domain="travelwiki" tld="in" asLink className="underline" />
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Address</p>
                <p className="text-gray-600 text-sm">Srinagar, Kashmir, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2025 Travel Wiki. All rights reserved. | Best Kashmir Tourism Company
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms-and-condition" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Terms</Link>
              <Link to="/privacy-policy" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Privacy</Link>
              <Link to="/refund-policy" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Refund</Link>
            </div>
            <a
              href="https://yaamwebsolutions.com"
              className="text-gray-400 hover:text-[#4169E1] text-sm transition-colors duration-300 block"
              target="_blank"
              rel="noopener"
            >
              Crafted with ❤️ by <span className="font-semibold">Yaam Web Solutions</span> – Your Partner in Digital Excellence
            </a>
          </div>
        </div>
      </div>
    </SEOContent>
  );
}
