import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0 text-center">
      <h2 className="text-center text-3xl text-gray-800 font-medium">
        What Our Students Say
      </h2>
      <p className="text-center md:text-base text-gray-500 mt-3">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br /> platform has made a difference in their
        lives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-[1400px] mx-auto">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-left border border-gray-200 rounded-3xl bg-white shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-4 px-6 py-5 bg-slate-100">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-slate-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-5 text-left">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                    key={i}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500 leading-7">
                {testimonial.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
