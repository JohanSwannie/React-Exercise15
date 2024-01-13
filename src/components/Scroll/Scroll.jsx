import { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
};

export default Scroll;
