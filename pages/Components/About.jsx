import React, { useState } from "react";
import Image from "next/image";

// Modal Component
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open
  
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
        <button
          className="mt-4 text-white bg-blue-500 p-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const BannerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
  });

  // Function to open the modal with specific content
  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-cover bg-center sm:py-28 py-32">
      <div className="w-full mx-auto">
        <div className="text-center mb-4">
          <p className="text-lg text-gray-400">Free Mahakal Darshan | Free Pick & Drop | RO+UV Water | Free Wi-Fi</p>
          <h1 className="sm:text-4xl text-3xl font-bold text-cyan-400">
            VAKRATUNDA HOMESTAY
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="sm:px-24 px-5">
            <p className="text-center sm:text-lg text-base text-gray-400 sm:hidden ">
              Experience the warmth of Indian hospitality at Vakratunda Homestay in Ujjain.
            </p>
            <p className="text-center sm:text-lg text-base leading-relaxed text-gray-400 sm:block hidden">
              Experience the warmth of Indian hospitality at Vakratunda Homestay in Ujjain. Our cozy accommodations offer a perfect blend of modern comfort and traditional charm. Immerse yourself in the spiritual ambiance of this ancient city, known for its sacred Mahakaleshwar Temple. Whether you are a pilgrim or a curious traveler, our homestay serves as an ideal base to explore Ujjain&apos;s rich history and vibrant culture. Enjoy home-cooked meals, personalized service, and insider tips to make your stay truly memorable. At Vakratunda Homestay, we are not just offering a place to stay – we are inviting you to become part of our family.
            </p>
          </div>
        </div>

        {/* Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {/* Peaceful Locale Button */}
          <div className="text-center">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/pl.svg"
              className="mx-auto bg-white"
              alt="Peaceful Locale"
              width={64}
              height={64}
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-white"
                onClick={() => openModal('Peaceful Locale', 'Discover the peaceful and serene environment of Vakratunda Homestay, perfect for relaxation and rejuvenation.')}
              >
                Peaceful Locale
              </button>
            </p>
          </div>

          {/* Warm Hospitality Button */}
          <div className="text-center">
            <Image
              src="https://www.anamalahomestays.com/assets/img/icons/ec.svg"
              className="mx-auto bg-white"
              alt="Warm Hospitality"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-white"
                onClick={() => openModal('Warm Hospitality', 'Experience the warmth of Indian hospitality with personalized services at Vakratunda Homestay.')}
              >
                Warm Hospitality
              </button>
            </p>
          </div>

          {/* Free Wi-Fi Button */}
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-16 w-16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-white"
                onClick={() => openModal('Free Wi-Fi', 'Enjoy fast and reliable Wi-Fi throughout the homestay, keeping you connected during your stay.')}
              >
                Free Wi-Fi
              </button>
            </p>
          </div>

          {/* RO+UV Water Button */}
          <div className="text-center">
            <Image
              src="/images/water.svg"
              className="mx-auto bg-white"
              alt="RO+UV Water"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-white"
                onClick={() => openModal('RO+UV Water', 'We provide filtered RO+UV water, ensuring that your stay is safe and comfortable.')}
              >
                RO+UV Water
              </button>
            </p>
          </div>

          {/* Free Pick & Drop Button */}
          <div className="text-center">
            <Image
              src="/images/car.svg"
              className="mx-auto bg-white"
              alt="Free Pick & Drop"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-white"
                onClick={() => openModal('Free Pick & Drop', 'Enjoy free pick-up and drop services for a seamless travel experience.')}
              >
                Free Pick & Drop
              </button>
            </p>
          </div>

          {/* Free Mahakal Darshan Button */}
          <div className="text-center">
            <Image
              src="/images/temple.svg"
              className="mx-auto bg-white"
              alt="Free Mahakal Darshan"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-white"
                onClick={() => openModal('Free Mahakal Darshan', 'Take part in the sacred Mahakal Darshan, an unforgettable spiritual experience in Ujjain.')}
              >
                Free Mahakal Darshan
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent.title} content={modalContent.content} />
    </div>
  );
};

export default BannerSection;
