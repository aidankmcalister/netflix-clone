import { useSelector } from "react-redux";
import { selectUsername } from "../redux/userSlice";

const Navbar = () => {
  const username = useSelector(selectUsername);
  return <div>Welcome, {username}!</div>;
};

export default Navbar;
