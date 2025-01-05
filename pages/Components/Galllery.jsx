





"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/parallax";   
import Image from "next/image";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: 0,
    bedroomType: "",
    acType: "Non-AC",
    paymentMethod: "",
    paymentDetail: "", // For storing payment details (UPI ID or Debit Card)
    checkInDate: "",
    checkOutDate: "",
  });
  const [formError, setFormError] = useState(""); // To store form error messages

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Check if all required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.numberOfPeople ||
      !formData.bedroomType ||
      !formData.acType ||
      !formData.paymentMethod ||
      !formData.paymentDetail ||
      !formData.checkInDate ||
      !formData.checkOutDate
    ) {
      setFormError("Please fill in all the required fields.");
      return false;
    }
    // Clear any previous error message if validation passes
    setFormError("");
    return true;
  };

  const handleSubmitBooking = () => {
    if (validateForm()) {
      alert("Your stay is booked safely!");
      setShowBookingPopup(false);
      // Add functionality to send the form data to your email here.
    }
  };




  

  const closePopup = () => {
    setShowBookingPopup(false); // This will close the booking popup when clicked
  };

  // Popup border style
  const popupStyle = {
    border: "2px solid lightgreen",
    borderRadius: "10px", // Optional: For rounded corners
    padding: "20px",
    backgroundColor: "white", // Optional: Ensures background is white
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Adds a subtle shadow around the popup
  };

  return (
    <section className="min-h-screen bg-slate-900 py-2 md:py-16 lg:py-14 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center pb-6 md:pb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-500 mb-2">Our Gallery</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300">
            Explore the essence of beauty in our gallery intimate space.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="w-full"
        >
          {/* Swiper Slide Images */}
          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img1.jpg"
                  alt="Bathroom"
                  onClick={() => openImage("/images/img1.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-400 text-sm md:text-base">
                Bathroom
              </div>
            </div>
          </SwiperSlide>

          {/* More Swiper Slides ... */}
          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img2.jpg"
                  alt="Bedroom"
                  onClick={() => openImage("/images/img2.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img3.jpg"
                  alt="Bedroom"
                  onClick={() => openImage("/images/img3.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img4.jpg"
                  alt="Bedroom"
                  onClick={() => openImage("/images/img4.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img5.jpg"
                  alt="Balcony"
                  onClick={() => openImage("/images/img5.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Balcony
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img6.jpg"
                  alt="Toilet"
                  onClick={() => openImage("/images/img6.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Toilet
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img8.jpg"
                  alt="Reception"
                  onClick={() => openImage("/images/img8.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Reception
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img9.jpg"
                  alt="Balcony"
                  onClick={() => openImage("/images/img9.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Balcony
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img10.jpg"
                  alt="Property"
                  onClick={() => openImage("/images/img10.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Property
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img12.jpg"
                  alt="Interior"
                  onClick={() => openImage("/images/img12.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Interior
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img13.jpg"
                  alt="Passage"
                  onClick={() => openImage("/images/img13.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Passage
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-square w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/img11.jpg"
                  alt="Parking Space"
                  onClick={() => openImage("/images/img11.jpg")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-3 font-semibold text-gray-300 text-sm md:text-base">
                Parking Space
              </div>
            </div>
          </SwiperSlide>

          {/* Add more swiper slides as necessary */}
        </Swiper>

        {/* Book Your Stay Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowBookingPopup(true)}
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-cyan-400"
          >
            Book Your Stay Here
          </button>
        </div>
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] mx-auto">
            <Image
              src={selectedImage}
              alt="Full-screen view"
              className="object-contain w-full h-full"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}

      {/* Booking Form Popup */}
      {showBookingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6">
          <div className="bg-white p-4 rounded-lg w-full max-w-lg relative overflow-auto h-[80vh] max-h-[80vh]" style={popupStyle}>
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-red-600"
            >
              &times;
            </button>

            <h3 className="text-2xl text-center font-semibold mb-4">Book Your Stay</h3>

            {formError && (
              <div className="text-red-500 text-center mb-4">
                <p>{formError}</p>
              </div>
            )}

            <form onSubmit={(e) => e.preventDefault()}>
              {/* Name */}
              <div className="mb-3">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleBookingChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleBookingChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleBookingChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Number of People */}
              <div className="mb-3 relative">
                <label className="block text-black-700 mb-2" htmlFor="numberOfPeople">Number of People</label>
                <select
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleBookingChange}
                  className="w-full p-3 border border-black-300 rounded-lg appearance-none"
                  required
                >
                  {[...Array(13).keys()].map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              {/* Bedroom Type */}
              <div className="mb-3 relative">
                <label className="block text-gray-700 mb-2" htmlFor="bedroomType">Bedroom Type</label>
                <select
                  name="bedroomType"
                  value={formData.bedroomType}
                  onChange={handleBookingChange}
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none"
                  required
                >
                  <option value="1 Double Bed">1 Double Bed</option>
                  <option value="2 Double Beds">2 Double Beds</option>
                </select>
              </div>

              {/* AC Type */}
              <div className="mb-3 relative">
                <label className="block text-gray-700 mb-2" htmlFor="acType">AC Type</label>
                <select
                  name="acType"
                  value={formData.acType}
                  onChange={handleBookingChange}
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none"
                  required
                >
                  <option value="Non-AC">Non-AC</option>
                  <option value="AC">AC</option>
                </select>
              </div>

              {/* Payment Method */}
              <div className="mb-3 relative">
                <label className="block text-gray-700 mb-2" htmlFor="paymentMethod">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleBookingChange}
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none"
                  required
                >
                  <option value="UPI">UPI</option>
                  <option value="Debit Card">Debit Card</option>
                </select>
              </div>

              {/* Payment Details */}
              {formData.paymentMethod === "UPI" && (
                <div className="mb-3">
                  <label className="block text-gray-700 mb-2" htmlFor="paymentDetail">UPI ID</label>
                  <input
                    type="text"
                    name="paymentDetail"
                    value={formData.paymentDetail}
                    onChange={handleBookingChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your UPI ID"
                    required
                  />
                </div>
              )}

              {formData.paymentMethod === "Debit Card" && (
                <div className="mb-3">
                  <label className="block text-gray-700 mb-2" htmlFor="paymentDetail">Debit Card Number</label>
                  <input
                    type="text"
                    name="paymentDetail"
                    value={formData.paymentDetail}
                    onChange={handleBookingChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your debit card number"
                    required
                  />
                </div>
              )}

              {/* Check-in and Check-out Dates */}
              <div className="mb-3 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="checkInDate">Check-in Date</label>
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleBookingChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="checkOutDate">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleBookingChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmitBooking}
                className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
