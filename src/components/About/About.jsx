import { Link } from "react-router-dom";
import Scroll from "../Scroll/Scroll";

export default function About() {
  Scroll();
  return (
    <div className="py-8 bg-white">
      <div className="container m-auto px-2 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-3 md:space-y-0 md:flex md:gap-1 lg:items-center lg:gap-2">
          <div className="md:1/2 lg:w-1/2">
            <img
              src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_da06d145-93f9-4df9-8c7e-1e2c332c3a4a.webp"
              width="300"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-lg text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
