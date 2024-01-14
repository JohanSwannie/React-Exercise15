import { useParams } from "react-router-dom";
import Scroll from "../Scroll/Scroll";

function User() {
  const { userId } = useParams();

  Scroll();

  return (
    <div className="bg-orange-100 text-black text-3xl text-center py-5">
      User: {userId}
    </div>
  );
}

export default User;
