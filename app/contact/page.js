import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          I'd love to hear from you! Feel free to reach out through any of the platforms below.
        </p>
        <div className="space-y-8">
          {/* Email Section */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Image src="/envelope-regular.svg" alt="Email icon" width={30} height={30} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-lg text-gray-600">
                <a
                  href="mailto:havanurusrisurya@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  havanurusrisurya@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* LinkedIn Section */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Image src="/linkedin-brands.svg" alt="LinkedIn icon" width={30} height={30} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">LinkedIn</h2>
              <p className="text-lg text-gray-600">
                <a
                  href="https://www.linkedin.com/in/srisuryahavanuru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/srisuryahavanuru
                </a>
              </p>
            </div>
          </div>

          {/* GitHub Section */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Image src="/github-brands.svg" alt="GitHub icon" width={30} height={30} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">GitHub</h2>
              <p className="text-lg text-gray-600">
                <a
                  href="https://github.com/its-srisurya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/its-srisurya
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
