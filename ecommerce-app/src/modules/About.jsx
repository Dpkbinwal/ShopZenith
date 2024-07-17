import React from 'react';

const About = () => {
  return (
    <><div>
    <div className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        This is our great Achievement
      </p>
    </div>
  </div>
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-9 text-gray-900">About Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl leading-7 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae libero euismod,
            consequat lorem vel, venenatis justo. Integer eget nunc at velit rutrum posuere.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          <div className="flex flex-col items-center">
            <img className="w-32 h-32 rounded-full mb-6" src="https://tse4.mm.bing.net/th?id=OIP.wEsBe2udHBieFeZVmus8qAHaHk&pid=Api&P=0&h=220" alt="Team Member" />
            <h3 className="text-xl font-medium text-gray-900">Our Team</h3>
            <p className="mt-2 text-base text-gray-500">
              Meet the team behind ShopZenith! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vitae libero euismod, consequat lorem vel, venenatis justo.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-32 h-32 rounded-full mb-6" src="https://tse4.mm.bing.net/th?id=OIP.bOVXGAT_7hBlm4OlrNCgCgHaHa&pid=Api&P=0&w=300&h=300" alt="Mission" />
            <h3 className="text-xl font-medium text-gray-900">Our Mission</h3>
            <p className="mt-2 text-base text-gray-500">
              Our mission is to provide high-quality products and exceptional service to our customers.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-32 h-32 rounded-full mb-6" src="https://tse1.mm.bing.net/th?id=OIP.QkNLsst-uEBFQIaUhE4e5AHaFZ&pid=Api&P=0&w=300&h=300" alt="Values" />
            <h3 className="text-xl font-medium text-gray-900">Our Values</h3>
            <p className="mt-2 text-base text-gray-500">
              Integrity, Innovation, and Customer Satisfaction are at the core of everything we do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
