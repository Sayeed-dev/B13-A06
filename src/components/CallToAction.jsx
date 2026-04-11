import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full bg-[#00101f] py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white text-lg mb-8">
          Join thousands of professionals who are already using Digtools to work
          smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-[##00101f] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            Explore Products
          </button>
          <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-[#00101f] transition-colors">
            View Pricing
          </button>
        </div>

        <p className="text-white text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
