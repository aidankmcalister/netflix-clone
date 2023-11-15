import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/userSlice";
import avatar1 from "../assets/imgs/netflixAvatar1.png";
import avatar2 from "../assets/imgs/netflixAvatar2.png";
import avatar3 from "../assets/imgs/netflixAvatar3.png";
import avatar4 from "../assets/imgs/netflixAvatar5.png";

const ProfileSelect = () => {
  const imgClass = "w-32";
  const pClasses = "font-bold w-full text-center mt-2";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileClick = (profileName) => {
    console.log("Clicked on profile:", profileName);
    dispatch(setUsername(profileName)); // Set the username directly as the profile name
    navigate("/home");
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div onClick={() => handleProfileClick("Bartholomew")}>
        <img src={avatar1} alt="avatar1" className={imgClass} />
        <p className={pClasses}>Bartholomew</p>
      </div>
      <div onClick={() => handleProfileClick("Toby")}>
        <img src={avatar2} alt="avatar2" className={imgClass} />
        <p className={pClasses}>Toby</p>
      </div>
      <div onClick={() => handleProfileClick("Mom")}>
        <img src={avatar3} alt="avatar3" className={imgClass} />
        <p className={pClasses}>Mom</p>
      </div>
      <div onClick={() => handleProfileClick("Dad")}>
        <img src={avatar4} alt="avatar4" className={imgClass} />
        <p className={pClasses}>Dad</p>
      </div>
    </div>
  );
};

export default ProfileSelect;
