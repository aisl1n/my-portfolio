import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-green-900 to-green-500 p-4 text-white"
    >
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-500">
            Entre em contato!
          </p>
          <p className="py-6">Me contate preenchendo os campos abaixo.</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/3cb662af-ff90-447a-b5e5-73b2bcdedec8"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-4 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-4 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-4 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-gren-500 to-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Conversar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
