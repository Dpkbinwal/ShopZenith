import React from 'react';

const About = () => {
  return (
    <><div>
    <div className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on every order.
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
            <img className="w-32 h-32 rounded-full mb-6" src="https://www.w3schools.com/howto/img_avatar.png" alt="Team Member" />
            <h3 className="text-xl font-medium text-gray-900">Our Team</h3>
            <p className="mt-2 text-base text-gray-500">
              Meet the team behind ShopZenith! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vitae libero euismod, consequat lorem vel, venenatis justo.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-32 h-32 rounded-full mb-6" src="https://imgs.search.brave.com/VO7F4ClwR1TVBGIb205JqAQ97PZWVoJlZ37RJwQWdcM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM5/MzI0MTQ4L3Bob3Rv/L21pc3Npb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUFu/aTMwM1YtdG1OUS1K/cFJEV1I5Q2NjTzN5/WnFJY2VxcktES0FL/Um9uNXc9" alt="Mission" />
            <h3 className="text-xl font-medium text-gray-900">Our Mission</h3>
            <p className="mt-2 text-base text-gray-500">
              Our mission is to provide high-quality products and exceptional service to our customers.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-32 h-32 rounded-full mb-6" src="https://imgs.search.brave.com/7o4B0sFApO5_QG_u7TjZ1Y8p9Skdl2S0kKYdU8fzH7M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vdXIt/dmFsdWVzLWNoYWxr/Ym9hcmQtYXJyb3ct/YmxhY2stYmFja2dy/b3VuZC04MzY5MTE4/My5qcGc" alt="Values" />
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
