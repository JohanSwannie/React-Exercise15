import { useParams } from "react-router-dom";
import Scroll from "../Scroll/Scroll";

function User() {
  const { userid } = useParams();

  Scroll();

  return (
    <div className="bg-orange-200 text-black text-3xl text-center py-5">
      User: {userid}
    </div>
  );
}

export default User;
