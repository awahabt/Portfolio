"use client"
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.length < 3) return "Name must be at least 3 characters.";
        break;
      case "email":
        if (!value.trim()) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Enter a valid email address.";
        break;
      case "subject":
        if (!value.trim()) return "Subject is required.";
        if (value.length < 5) return "Subject must be at least 5 characters.";
        break;
      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.length < 10) return "Message must be at least 10 characters.";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Validate fields before submission
    const validationErrors: typeof errors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };
  
    // Set errors to the state
    setErrors(validationErrors);
  
    // Check if there are any validation errors
    const hasErrors = Object.values(validationErrors).some((error) => error !== "");
    if (!hasErrors) {
      setIsSubmitting(true);
      setSuccessMessage("");
  
      try {
        // Send form data to the API route
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send form data as JSON
        });
  
        const result = await response.json();
  
        // Check if email was sent successfully
        if (response.ok) {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        } else {
          setSuccessMessage(result.error || "An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Failed to send email:", error);
        setSuccessMessage("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false); // Stop the submitting state
      }
    }
  };
  

  return (
    <div className="text-black dark:text-white py-5 dark:border-white rounded-xl montserrat">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto">
        <p className="text-3xl font-semibold">Get in touch</p>

        <div className="flex flex-col gap-4">
          <label>
            Name <span className="text-red-600">*</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full outline-none focus:shadow-md dark:focus:shadow-gray-900 shadow-black-100 border border-gray-400 dark:border-gray-600 bg-transparent rounded p-2 text-sm"
              placeholder="Full name"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </label>

          <label>
            Email <span className="text-red-600">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full outline-none focus:shadow-md dark:focus:shadow-gray-900 shadow-black-100 border border-gray-400 dark:border-gray-600 bg-transparent rounded p-2 text-sm"
              placeholder="Email address"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </label>

          <label>
            Subject <span className="text-red-600">*</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full outline-none focus:shadow-md dark:focus:shadow-gray-900 shadow-black-100 border border-gray-400 dark:border-gray-600 bg-transparent rounded p-2 text-sm"
              placeholder="Subject"
            />
            {errors.subject && <p className="text-red-600 text-sm">{errors.subject}</p>}
          </label>

          <label>
            Message <span className="text-red-600">*</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full outline-none focus:shadow-md dark:focus:shadow-gray-900 shadow-black-100 border border-gray-400 dark:border-gray-600 bg-transparent rounded p-2 text-sm"
              placeholder="Type your message"
              rows={5}
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </label>
        </div>

        {successMessage && (
          <p className="text-green-600 text-sm text-center">{successMessage}</p>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-black text-white dark:text-white dark:bg-gray-900 rounded-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
