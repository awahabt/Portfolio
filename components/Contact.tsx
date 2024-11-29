"use client"
import React from "react";

const Contact = () => {

    const onSubmitHandle =(e:any)=>{
        e.preventDefault();
    }
  return (
    <div className=" text-black dark:text-white py-5  dark:border-white rounded-xl montserrat">
  
        
      <form onSubmit={onSubmitHandle}
        action=""
        className="flex flex-col gap-6 max-w-md mx-auto "
      >
        <p className="text-3xl font-semibold">Get in touch</p>

        <div className="flex flex-col gap-4">
          <label>
            Name <span className="text-red-600">*</span>
            <input
              type="text"
              className="w-full outline-none focus:shadow-md dark:focus:shadow-gray-900 shadow-black-100 border border-gray-400  dark:border-gray-600 bg-transparent rounded p-2 text-sm"
              placeholder="Full name"
              required
            />
          </label>

          <label>
            Email <span className="text-red-600">*</span>
            <input
              type="email"
              className="w-full outline-none focus:shadow-md dark:focus:shadow-gray-900 shadow-black-100 border border-gray-400  dark:border-gray-600 bg-transparent rounded p-2 text-sm"
              placeholder="Email address"
              required
            />
          </label>

          <label>
            Subject <span className="text-red-600">*</span>
            <input
              type="text"
              className="w-full outline-none focus:shadow-md dark:focus:shadow-gray-900 shadow-black-100 border border-gray-400  dark:border-gray-600 bg-transparent rounded p-2 text-sm"
              placeholder="Subject"
              required
            />
          </label>

          <label>
            Message <span className="text-red-600">*</span>
            <textarea
              className="w-full outline-none focus:shadow-md dark:focus:shadow-gray-900 shadow-black-100 border border-gray-400  dark:border-gray-600 bg-transparent rounded p-2 text-sm"
              placeholder="Type your message"
              rows={5}
              required
            />
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-black text-white dark:text-white dark:bg-gray-900 rounded-sm "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
