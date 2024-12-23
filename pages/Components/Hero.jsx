import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[93vh] sm:h-screen md:h-screen lg:h-screen xl:h-screen  w-full bg-cover bg-center bg-no-repeat mt-8"
      style={{ backgroundImage: "url('/images/lal2.png')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-2 sm:mb-4 tracking-tight leading-tight max-w-4xl">
          Discover Vakratunda Homestay in Ujjain
        </h1>
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-2xl mb-4 sm:mb-8 font-light italic">
          Where Comfort Meets Spirituality
        </h2>
        <p className="mb-6  sm:mb-10 text-base sm:text-lg md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl leading-relaxed">
          &quot;Immerse yourself in the rich culture of Ujjain while enjoying
          modern amenities. Our homestay offers a perfect blend of traditional
          charm and contemporary comfort, just steps away from the sacred
          Mahakaleshwar Temple.&quot;
        </p>
        <a
          href="#contact"
          className="rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white text-sm sm:text-base md:text-lg font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 shadow-lg">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Book Your Stay Now</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
