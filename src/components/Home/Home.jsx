import { Link } from "react-router-dom";
import Scroll from "../Scroll/Scroll";

export default function Home() {
  Scroll();
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-lg px-4 pb-20 pt-2 sm:py-10 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-20 space-y-4 text-center sm:text-right sm:ml-auto">
            <h5 className="text-4xl font-bold sm:text-2xl">
              Feel free to Download
            </h5>
            <Link
              className="inline-flex text-white items-center px-6 py-2 text-lg bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-8 sm:pt-1 pt-12 h-full ">
          <img
            className="w-60"
            src="https://img.freepik.com/premium-vector/utch-man-viewed-from-side-behind-laptop-02-copy-5-01_961307-1185.jpg"
            alt="image1"
          />
        </div>
      </aside>
    </div>
  );
}
