import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-30">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Refund Policy</h1>
      <p className="text-lg text-gray-700 mb-4">This is our refund policy for bookings made through Travel Wiki.</p>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Refunds are processed according to the terms agreed at the time of booking.</li>
        <li>Requests for refunds must be made in writing to our support team.</li>
        <li>Processing times may vary depending on the payment method.</li>
        <li>For detailed information, please contact our support team.</li>
      </ul>
    </div>
  );
}
