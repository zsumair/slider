import React from "react";
import Link from "next/link";

function Sectional() {
  return (
    <div className="py-16 mb-3">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-2/3">
          <img className="mask mask-squircle" src="/textimg.png" />
        </div>

        <div className="card justify-end lg:w-1/3 h-96">
          <div className="card-body">
            <h2 className="card-title p-3 text-3xl font-semibold">
              This is a title for
            </h2>
            <p className="p-3 text-xl">
              A little of text to explain the features, lorem ipsum dolor simet
              A little of text to explain the features,
            </p>
            <div className="card-actions p-3">
              <div className="flex justify-between items-center">
                <Link
                  href={"#"}
                  className="dark:text-gray-300 font-semibold text-lg hover:underline"
                >
                  Find out more
                </Link>
                <span className="ml-2 dark:text-gray-300 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 py-8 lg:flex justify-between items-center">
        <div className="card justify-end lg:w-1/3 h-96">
          <div className="card-body">
            <h2 className="card-title p-3 text-3xl font-semibold">
              This is a better title to explain
            </h2>
            <p className="p-3 text-xl">
              A little of text to explain the features, lorem ipsum dolor simet
              A little of text to explain the features,
            </p>
            <div className="card-actions p-3">
              <div className="flex justify-between items-center">
                <Link
                  href={"#"}
                  className="dark:text-gray-300 font-semibold text-lg hover:underline"
                >
                  Find out more
                </Link>
                <span className="ml-2 dark:text-gray-300 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <img className="mask mask-squircle" src="/textimg.png" />
        </div>
      </div>
    </div>
  );
}

export default Sectional;
