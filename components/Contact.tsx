"use client"
import React from "react";

const Contact = () => {

    const onSubmitHandle =(e:any)=>{
        e.preventDefault();
    }
  return (
    <div className=" text-black dark:text-white p-5">
  
        
      <form onSubmit={onSubmitHandle}
        action=""
        className="flex flex-col gap-6 max-w-md mx-auto p-4 "
      >
        <p className="text-xl font-semibold">What’s up?</p>

        <div className="flex flex-col gap-4">
          <label>
            Name <span className="text-red-600">*</span>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              placeholder="Full name"
              required
            />
          </label>

          <label>
            Email <span className="text-red-600">*</span>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              placeholder="Email address"
              required
            />
          </label>

          <label>
            Subject <span className="text-red-600">*</span>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              placeholder="Subject"
              required
            />
          </label>

          <label>
            Message <span className="text-red-600">*</span>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              placeholder="Type your message"
              rows={5}
              required
            />
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
