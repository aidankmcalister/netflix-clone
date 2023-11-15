import ProfileSelect from "../components/ProfileSelect";
import netflixLogoWide from "../assets/imgs/netflixLogoWide.png";
import { Button } from "@material-tailwind/react";

const ProfileSelectPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[80%] mx-auto my-5 flex flex-col items-center">
        <img src={netflixLogoWide} alt="netflixLogo" className="w-[10rem]" />
        <div className="my-16">
          <ProfileSelect />
        </div>
        <Button className="bg-main-red">Edit</Button>
      </div>
    </div>
  );
};

export default ProfileSelectPage;
