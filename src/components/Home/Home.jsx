import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-20 space-y-4 text-center sm:text-right sm:ml-auto">
            <h5 className="text-4xl font-bold sm:text-2xl">
              Feel free to Download
            </h5>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-10 sm:pt-1 pt-12 h-full ">
          <img
            className="w-60"
            src="https://img.freepik.com/premium-vector/utch-man-viewed-from-side-behind-laptop-02-copy-5-01_961307-1185.jpg"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://www.joberty.com/blog/content/images/2023/09/senior-software-engineer.png"
          alt="image2"
        />
      </div>
    </div>
  );
}
