import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Travel Wiki</title>
        <meta name="description" content="Read the privacy policy of Travel Wiki. Learn how we collect, use, and protect your personal information when you use our travel services." />
        
        
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-25">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Privacy Policy</h1>
        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-4">Your privacy is important to us. This policy explains how we collect, use, and protect your information at Travel Wiki. By using our website, you consent to the practices described below.</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>We collect only necessary information for booking, communication, and improving our services.</li>
            <li>Your data is never sold or shared with third parties without your explicit consent.</li>
            <li>We use secure technologies and industry best practices to protect your information.</li>
            <li>You have the right to access, update, or request deletion of your personal data at any time.</li>
            <li>For questions or requests, please contact our support team at <span className="text-emerald-700 underline">privacy [at] travelwiki [dot] com</span>.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-emerald-700 mb-2">Cookies & Tracking</h2>
          <p className="text-lg text-gray-700 mb-4">We may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can manage your cookie preferences in your browser settings.</p>
        </section>
      </div>
    </>
  );
}