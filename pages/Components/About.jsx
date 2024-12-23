import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BannerSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bg-lime-800 min-h-screen bg-cover bg-center py-16 md:py-16 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div variants={fadeIn} className="text-center mb-8 ">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-neutral-400">
            VAKRATUNDA HOMESTAY
          </h1>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <motion.p
              variants={fadeIn}
              className="text-center text-sm xs:text-base text-gray-800 md:hidden">
              &quot;Experience the warmth of Indian hospitality at Vakratunda
              Homestay in Ujjain. &quot;
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="hidden text-neutral-100 md:block text-justify text-base lg:text-lg leading-relaxed text-gray-800 px-4 lg:px-16">
              &quot;Experience the warmth of Indian hospitality at Vakratunda
              Homestay in Ujjain. Our cozy accommodations offer a perfect blend
              of modern comfort and traditional charm. Immerse yourself in the
              spiritual ambiance of this ancient city, known for its sacred
              Mahakaleshwar Temple. Whether you are a pilgrim or a curious
              traveler, our homestay serves as an ideal base to explore
              Ujjain&apos; rich history and vibrant culture. Enjoy home-cooked
              meals, personalized service, and insider tips to make your stay
              truly memorable. At Vakratunda Homestay, we are not just offering
              a place to stay – we are inviting you to become part of our
              family. service, and insider tips to make your stay truly
              memorable. At Vakratunda Homestay, we are not just offering a
              place to stay – we are inviting you to become part of our
              family.&quot;
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/ep.svg"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12"
              alt="Environmentally Conscious"
              width={48}
              height={48}
            />
            <p className="text-black mt-2 font-semibold text-xs sm:text-sm lg:text-base">
              Eco-Friendly
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/hf.svg"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12"
              alt="Home Cooked Food"
              width={48}
              height={48}
            />
            <p className="text-black mt-2 font-semibold text-xs sm:text-sm lg:text-base">
              Breakfast Included
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/pl.svg"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12"
              alt="Peaceful Locale"
              width={48}
              height={48}
            />
            <p className="text-black mt-2 font-semibold text-xs sm:text-sm lg:text-base">
              Peaceful Locale
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/ec.svg"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12"
              alt="Warm Hospitality"
              width={48}
              height={48}
              loading="lazy"
            />
            <p className="text-black mt-2 font-semibold text-xs sm:text-sm lg:text-base">
              Warm Hospitality
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
            <p className="text-black mt-2 font-semibold text-xs sm:text-sm lg:text-base">
              Free Wi-Fi
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4">
            <Image
              src="/images/water.svg"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12"
              alt="RO+UV Water"
              width={48}
              height={48}
              loading="lazy"
            />
            <p className="text-black mt-2 font-semibold text-xs sm:text-sm lg:text-base">
              RO+UV Water
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4">
            <Image
              src="/images/security.svg"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12"
              alt="Home Cooked Meals"
              width={48}
              height={48}
              loading="lazy"
            />
            <p className="text-black mt-2 font-semibold text-xs sm:text-sm lg:text-base">
              Security & Safety Measures
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4">
            <Image
              src="/images/ac.png"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12"
              alt="Air Conditioned Rooms"
              width={48}
              height={48}
              loading="lazy"
            />
            <p className="text-black mt-2 font-semibold text-xs sm:text-sm lg:text-base">
              Air Conditioned Rooms
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BannerSection;
