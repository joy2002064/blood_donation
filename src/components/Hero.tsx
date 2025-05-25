import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6823543/pexels-photo-6823543.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Donate Blood. Save Lives.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Your donation can be the gift of life for someone in need. Join our community of donors today and make a difference.
          </p>
          <a 
            href="#register" 
            className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-primary-light hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Become a Donor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;