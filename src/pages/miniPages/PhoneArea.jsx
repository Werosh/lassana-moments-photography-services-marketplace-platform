import React from "react";
import PhoneImg from "../../images/others/ObjectBG.png";
import { MdArrowOutward } from "react-icons/md";

const PhoneArea = () => {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Professional wedding photography services to capture your special moments.",
      position: "lg:left-8 lg:top-20",
    },
    {
      title: "Events",
      description:
        "Comprehensive event photography coverage for all occasions.",
      position: "lg:right-8 lg:top-20",
    },
    {
      title: "Pre shoots",
      description:
        "Engagement and pre-wedding photo sessions at scenic locations.",
      position: "lg:left-35 lg:top-60",
    },
    {
      title: "Second Photographers",
      description: "Additional photographer coverage for larger events.",
      position: "lg:right-30 lg:top-70",
    },
    {
      title: "Birthday Shoots",
      description: "Capture special birthday moments and celebrations.",
      position: "lg:left-8 lg:bottom-20",
    },
    {
      title: "Baby Shoots",
      description: "Professional newborn and baby photography sessions.",
      position: "lg:right-2 lg:bottom-10",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white to-lightLavenderGray overflow-hidden px-4 py-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Mobile Cards (Top) */}
        <div className="lg:hidden space-y-4 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="w-full bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              <div className="absolute top-4 right-4">
                <MdArrowOutward />
              </div>
            </div>
          ))}
        </div>

        {/* Central Phone Display */}
        <div className="flex justify-center items-center">
          <div className="relative w-100 h-[650px] rounded-[3rem]  overflow-hidden transform transition-transform hover:scale-105">
            {/* Phone Notch */}

            {/* Phone Image */}
            <div className="w-full h-full ob">
              <img
                src={PhoneImg}
                alt="Couple on beach"
                className="w-full h-full object-cover shadow-2xl "
              />
            </div>
          </div>
        </div>

        {/* Mobile Cards (Bottom) */}
        <div className="lg:hidden space-y-4 mt-8">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className="w-full bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              <div className="absolute top-4 right-4">
                <MdArrowOutward />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Service Cards */}
        <div className="hidden lg:block">
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute ${service.position} w-94 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 font-semibold">{service.description}</p>
              <div className="absolute top-4 right-4">
                <MdArrowOutward className="text-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneArea;
