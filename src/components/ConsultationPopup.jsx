import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle,
} from 'lucide-react';

const ConsultationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowPopup(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/xbladzab', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        // Reset form
        e.target.reset();
        // Close popup after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Error submitting form
      setIsSubmitting(false);
      // You could add error handling here if needed
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white w-full max-w-lg max-h-[90vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-all duration-200 group"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-0 max-h-[90vh]">
          {/* Header */}
          <div className="  px-4 py-10 text-white relative" style={{backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1756716748/dal_lake_lbrmla.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 opacity-50"></div>
            <div className="relative z-10">
            <div className="flex justify-center mb-3">
              {/* <img 
                src="dal_lake.jpg" 
                alt="Kashmir Travel" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
              /> */}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-center">Plan Your Kashmir Adventure</h2>
            <p className="text-xs sm:text-sm text-blue-100 text-center mt-1">
              Let’s discuss how we can assit you with your travel needs.
            </p>
            </div>
          </div>

          {/* Body */}
          <div className="px-4 py-4">
            {/* Benefits */}
            {/* <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { icon: <Users className="w-4 h-4 text-blue-600" />, label: 'Expert Team' },
                { icon: <Award className="w-4 h-4 text-green-600" />, label: 'Satisfied Customers' },
                { icon: <Sparkles className="w-4 h-4 text-purple-600" />, label: 'Free Strategy' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex p-2 rounded-full bg-gray-100 mb-1">{item.icon}</div>
                  <p className="text-xs text-gray-600">{item.label}</p>
                </div>
              ))}
            </div> */}

            {/* Form or Submission Message */}
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="bg-green-100 rounded-full p-3 inline-flex mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Thank You!</h3>
                <p className="text-sm text-gray-600 mb-2">
                  We'll contact you within 24 hours.
                </p>
                <div className="flex justify-center items-center text-xs text-green-600 font-medium">
                  <Clock className="w-4 h-4 mr-1" />
                  Fast Response Guaranteed
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="space-y-3"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
                />
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="Tell us about your Trip"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200 flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Scheduling...
                    </>
                  ) : (
                    <>
                      Schedule Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Trust Indicators */}
            {!isSubmitted && (
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex flex-wrap justify-center gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-1" />
                  No Spam
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-1" />
                  100% Free
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-1" />
                  Quick Response
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;