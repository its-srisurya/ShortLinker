import React from 'react';
import Link from 'next/link';
const about = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700">
          About Shortlinker
        </h1>
        <p className="text-xl text-gray-800 mb-8">
          Shortlinker is a simple and efficient URL shortening service that helps you
          create, manage, and share short links effortlessly. Whether you're sharing
          links on social media, in emails, or anywhere else, Shortlinker makes it
          easy to keep your links concise and user-friendly.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Our mission is to provide a reliable and fast solution for shortening URLs
          while maintaining the highest standards of security and usability.
        </p>
        <Link href="/shorten">  
        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
         Get Started 
        </button>
        </Link>
      </div>
      <div className="mt-12 bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>Fast and reliable URL shortening service.</li>
          <li>Easy-to-use interface for managing your links.</li>
          <li>Secure and privacy-focused platform.</li>
          <li>Perfect for social media, emails, and more.</li>
        </ul>
      </div>
    </div>
  );
};

export default about;