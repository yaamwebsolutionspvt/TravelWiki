import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsAndCondition() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Travel Wiki</title>
        <meta name="description" content="Read the terms and conditions for using Travel Wiki. Learn about booking policies, user responsibilities, and our commitment to your travel experience." />
        
        
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-30">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Terms and Conditions</h1>
        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-4">Welcome to Travel Wiki. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>All bookings are subject to availability and confirmation. Prices may change without prior notice.</li>
            <li>Travel Wiki is not responsible for any loss, injury, or damage during your trip. We recommend purchasing travel insurance.</li>
            <li>Users are responsible for providing accurate information during booking and communication.</li>
            <li>By using our website, you agree to our privacy policy and all applicable laws.</li>
            <li>Travel Wiki reserves the right to update these terms at any time. Continued use of the site constitutes acceptance of the new terms.</li>
            <li>For detailed terms or questions, please contact our support team at <span className="text-emerald-700 underline">support [at] travelwiki [dot] com</span>.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-emerald-700 mb-2">User Responsibilities</h2>
          <p className="text-lg text-gray-700 mb-4">Users must ensure that all information provided is accurate and up-to-date. Any misuse of the website or fraudulent activity will result in termination of access.</p>
        </section>
      </div>
    </>
  );
}