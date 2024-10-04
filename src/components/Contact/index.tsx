"use client";
import NewsLatterBox from "./NewsLatterBox";
import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitTicket = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbzjP4sDaakltFJhJiKP9UA2Jkbwzm-R70uKwA1pa7WKrUNJQNRvT52_QaOiubp-qZgZ/exec?${params.toString()}`,
        {
          method: "GET", // Change to GET
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        }
      );

      if (response.ok) {
        setStatus({ loading: false, success: true, error: false });
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
    }
  };
//TODO(markxiong0122): figure out CORS here and add error handling for the fetch request
  return (
    <section id="contact" className="flex justify-center items-center overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="flex justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-2xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark-2xl:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white-2xl:text-3xl lg:text-4xl xl:text-4xl font-anka-coder">
                Are you an organization or individual that wants to collaborate? Fill out the form below.
              </h2>
              <p className="mb-12 text-lg font-medium text-body-color font-anka-coder">
                Our support team will get back to you ASAP via email.
              </p>
              {/* Success and Error Messages */}
              {status.success && (
                <p className="text-green-500 font-anka-coder">Ticket submitted successfully!</p>
              )}
              {status.error && (
                <p className="text-green-500 font-anka-coder">Ticket submitted successfully!</p>
              )}

              <form onSubmit={submitTicket}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-2xl font-medium text-dark dark:text-white font-anka-coder"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-2xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none font-anka-coder"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-2xl font-medium text-dark dark:text-white font-anka-coder"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-2xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none font-anka-coder"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-2xl font-medium text-dark dark:text-white font-anka-coder"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-2xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none font-anka-coder"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-2xl bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark font-anka-coder"
                      disabled={status.loading}
                      >
                      {status.loading ? "Submitting..." : "Submit Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
      </div>
    </section>
  );
};

export default Contact;
