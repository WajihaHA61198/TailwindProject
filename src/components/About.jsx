import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full py-28 bg-zinc-200 sm:py-28">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h4 className="text-4xl font-bold">
            Trusted by developers across the world
          </h4>
          <p className="text-xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
