"use client";

import React, { useState } from "react";
import { submitForm } from "@/app/actions/contactActions";

function ContactSection() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(event.target);

    try {
      const response = await submitForm(formData);
      if (response.success) {
        setStatus({ type: "success", message: response.message });
        event.target.reset(); // Clear the form
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-area page-section scroll-content" id="contact">
      <div className="custom-container">
        <div className="contact-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-dollar-sign" /> contact
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Let's Work <span>Together!</span>
            </h1>
          </div>
          <h3 className="scroll-animation" data-animation="fade_from_bottom">
          maak0401@gmail.com
          </h3>
          <p id="required-msg">* Marked fields are required to fill.</p>
          {status.message && (
            <div
              className={`alert ${
                status.type === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {status.message}
            </div>
          )}
          <form
            className="contact-form scroll-animation"
            data-animation="fade_from_bottom"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <label htmlFor="fullName">
                    Full Name <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label htmlFor="email">
                    Email <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label htmlFor="phoneNumber">
                    Phone <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label htmlFor="subject">
                    Subject <sup>*</sup>
                  </label>
                  <input
                    type="input"
                    name="subject"
                    id="subject"
                    placeholder="subject..."
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message here ..."
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group submit-btn-wrap">
                  <button
                    className="theme-btn"
                    name="submit"
                    type="submit"
                    id="submit-form"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
