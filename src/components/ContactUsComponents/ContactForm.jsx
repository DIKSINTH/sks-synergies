// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({
    looking: "",
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!values.looking) err.looking = "Please select an option.";
    if (!values.name || values.name.trim().length < 2)
      err.name = "Please enter your name.";
    if (!values.company || values.company.trim().length < 2)
      err.company = "Please enter company name.";
    if (!values.phone || values.phone.trim().length < 6)
      err.phone = "Please enter a valid contact number.";
    if (!values.email || !/^\S+@\S+\.\S+$/.test(values.email))
      err.email = "Please enter a valid email.";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setBusy(true);
    // Demo submit — replace with your API call
    setTimeout(() => {
      console.log("Form submitted:", values);
      alert("Form submitted successfully (demo). Replace with your API call.");
      setBusy(false);
      setValues({
        looking: "",
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="bg-[#002278] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* LEFT SECTION */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="space-y-8">
              <div>
                <h4 className="text-blue-300 font-semibold">Office</h4>
                <address className="not-italic mt-3 text-xs text-blue-100 leading-relaxed">
                  NO-5 Soon Lee St, #03-6
                  <br />
                  Pioneer, Point. Singapore - 627607.
                </address>
              </div>

              <div>
                <h4 className="text-blue-300 font-semibold">Contact Us</h4>
                <div className="mt-3 text-xs text-blue-100 leading-relaxed">
                  <div>+65 8496 3414</div>
                  <div className="mt-2">sales@aflowz.com</div>
                </div>
              </div>

              <div className="mt-8 border-t border-blue-700 pt-6">
                <p className="text-xs text-blue-200">
                  We normally respond within 1 business day. For urgent
                  enquiries, please call the number above.
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT FORM SECTION */}
          <div className="md:col-span-8 lg:col-span-9">
            <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
              {/* SELECT DROPDOWN */}
              <div>
                <label className="block text-xs text-blue-200 mb-2">
                  I am looking*
                </label>
                <select
                  name="looking"
                  value={values.looking}
                  onChange={handleChange}
                  className="w-full bg-[#e9f6f9] text-[#002278] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  <option value="">Select</option>
                  <option value="productService">For my product/service</option>
                  <option value="newProduct">For a new product</option>
                  <option value="jobInternship">For a job/internship</option>
                  <option value="collaboratePartner">
                    To collaborate/partner
                  </option>
                </select>
                {errors.looking && (
                  <p className="mt-1 text-xs text-blue-300">{errors.looking}</p>
                )}
              </div>

              {/* NAME */}
              <div>
                <label className="block text-xs text-blue-200 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-[#e9f6f9] text-[#002278] rounded-md px-4 py-3 placeholder:text-[#002278] focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-blue-300">{errors.name}</p>
                )}
              </div>

              {/* COMPANY */}
              <div>
                <label className="block text-xs text-blue-200 mb-2">
                  Company Name/Business Name*
                </label>
                <input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  placeholder="Company or business name"
                  className="w-full bg-[#e9f6f9] text-[#002278] rounded-md px-4 py-3 placeholder:text-[#002278] focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                {errors.company && (
                  <p className="mt-1 text-xs text-blue-300">{errors.company}</p>
                )}
              </div>

              {/* CONTACT NUMBER */}
              <div>
                <label className="block text-xs text-blue-200 mb-2">
                  Contact Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="+65 9876 5432"
                  className="w-full bg-[#e9f6f9] text-[#002278] rounded-md px-4 py-3 placeholder:text-[#002278] focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-blue-300">{errors.phone}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs text-blue-200 mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-[#e9f6f9] text-[#002278] rounded-md px-4 py-3 placeholder:text-[#002278] focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-blue-300">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs text-blue-200 mb-2">
                  Send us a message
                </label>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full bg-[#e9f6f9] text-[#002278] rounded-md px-4 py-3 placeholder:text-[#002278] focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none"
                />
              </div>

              {/* BUTTON */}
              <div>
                <button
                  type="submit"
                  disabled={busy}
                  className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition ${
                    busy ? "opacity-70 cursor-wait" : ""
                  }`}
                >
                  <span>{busy ? "Sending..." : "SEND IT NOW"}</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
