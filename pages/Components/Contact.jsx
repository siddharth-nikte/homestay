import React, { useState } from "react";
import { PropagateLoader } from "react-spinners";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="text-gray-600 body-font relative min-h-screen py-8 sm:py-5 md:py-16 lg:py-20">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-500 mb-2 sm:mb-3">
          Our Location
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400">
          Find us in the heart of Ujjain
        </p>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 h-[400px] sm:h-[450px] md:h-[500px] relative bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5763793351647!2d75.79008461744384!3d23.149010984890373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396375828d02c23b%3A0x369c02a50dda5f1a!2sVakratunda%20Homestay!5e0!3m2!1sen!2sin!4v1681646891087!5m2!1sen!2sin"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              }}></iframe>
            <a
              className="absolute inset-0 z-10 cursor-pointer"
              href="https://www.google.com/maps/dir//B+27%2F5,+Indore+Rd,+near+Mahamritunjay+Dwar,+Vasant+Vihar,+Ujjain,+Madhya+Pradesh+456010/@23.1489896,75.7102479,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396375828d02c23b:0x369c02a50dda5f1a!2m2!1d75.7926495!2d23.149011?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"></a>

            <div className="absolute bottom-0 left-0 right-0 text-black font-semibold bg-gray-400 p-4 sm:p-6 rounded-t-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h2 className="font-semibold text-white tracking-widest text-xs uppercase">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-black">
                    B-27/5, Indore Rd, near Mahamritunjay Dwar, Vasant Vihar,
                    Ujjain, Madhya Pradesh 456010
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-white tracking-widest text-xs uppercase mt-4 sm:mt-0">
                    CONTACT
                  </h2>
                  <a
                    className="text-indigo-500 text-sm sm:text-base hover:text-indigo-600"
                    href="mailto:vakratundahomestay@gmail.com">
                    vakratundahomestay@gmail.com
                  </a>
                  <p className="text-sm sm:text-base mt-2">+918085863266</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#71717a] p-6 sm:p-8 rounded-lg shadow-sm">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">
                GET IN TOUCH WITH US
              </h2>
              <p className="text-sm sm:text-base text-black mb-6">
                We&apos;d love to hear from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm text-black block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#262626] px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-black block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#262626] px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="text-sm text-black block mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full bg-[#262626] px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-black block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-[#262626] px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 resize-none"
                    required></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 flex items-center justify-center min-h-[44px]"
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    <PropagateLoader
                      color="white"
                      size={8}
                      speedMultiplier={0.7}
                    />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {status && (
                <div
                  className={`mt-4 p-3 rounded-md text-center text-sm ${
                    status.includes("Error")
                      ? "bg-red-50 text-red-600"
                      : "bg-green-50 text-green-600"
                  }`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
