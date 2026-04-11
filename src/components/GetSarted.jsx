import React from "react";

const GetSarted = () => {
  return (
    <section className="w-full bg-gray-300 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Create Account
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">

            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m0 0v10l8 4"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Choose Products
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">

            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Start Creating
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetSarted;
