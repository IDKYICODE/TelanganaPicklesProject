import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    name: "Terry Dokidis",
    rating: 5,
    review:
      "FreshMart has transformed my grocery routine. The quality is unmatched, and the virtual cart feature is a game-changer. Highly recommended!",
  },
  {
    name: "Nolan Franci",
    rating: 4.5,
    review:
      "The real-time inventory is a lifesaver. Knowing what’s in stock makes my shopping quick and efficient. FreshMart has made grocery shopping stress-free.",
  },
  {
    name: "Kaylynn Culhane",
    rating: 4.5,
    review:
      "I love the personalized recommendations! FreshMart understands my preferences, and the promo alerts ensure I never miss a good deal. Fantastic service!",
  },
];

const TestimonialCard = ({ name, rating, review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 flex flex-col items-center text-center">
      <div className=" rounded-full p-4 mb-4"><img src="src\\assets\\Image.svg"></img></div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex justify-center my-2 text-yellow-500">
        {[...Array(Math.floor(rating))].map((_, index) => (
          <FaStar key={index} />
        ))}
        {rating % 1 !== 0 && <FaStarHalfAlt />}
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-[#7B1816]  mb-4">
        Customers Speak, Telengana Spicy Pickles Listens.
      </h2>
      <p className="text-gray-600 mb-8">
        Discover what our valued customers have to say about their FreshMart experiences.
        Read testimonials that reflect the satisfaction and delight of those who have chosen FreshMart for their grocery needs.
      </p>
      <div className="flex  justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button className="bg-gray-200 p-3 rounded-full text-gray-700">
          <IoIosArrowBack />
        </button>
        <button className="bg-[#7B1816]  p-3 rounded-full text-white">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
