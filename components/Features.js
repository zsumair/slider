import Link from "next/link";
import React from "react";

function Features() {
  return (
    <div className="py-16 mt-4 mb-4">
      <h2 className="font-bold text-3xl text-center mb-4">
        Our Recent Features
      </h2>
      <p className="text-center pb-3">
        This is just featurette his is just featurette his is just featurette
        his is just featurette
      </p>
      <div class="lg:grid grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl mt-5">
          <div className="card-body">
            <h2 className="card-title p-3 text-2xl font-bold">Title</h2>
            <p className="p-3">
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
                <span className="ml-2 dark:text-gray-300">
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
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mt-5">
          <div className="card-body">
            <h2 className="card-title p-3 text-2xl font-bold">Title</h2>
            <p className="p-3">
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
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mt-5">
          <div className="card-body">
            <h2 className="card-title p-3 text-2xl font-bold">Title</h2>
            <p className="p-3">
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
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
