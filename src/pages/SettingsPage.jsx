import React, { useState } from "react";
import netflixLogo from "../assets/imgs/netflixLogo.png";
import { Select, Option } from "@material-tailwind/react";
import { Switch, createTheme, ThemeProvider } from "@mui/material";
import { TrashIcon } from "@heroicons/react/24/outline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e50914",
    },
  },
});

const SettingsPage = () => {
  const [dataUsage, setDataUsage] = useState("Automatic");
  const [videoQuality, setVideoQuality] = useState("High");

  const handleDataUsageChange = (value) => {
    setDataUsage(value);
  };

  const handleVideoQualityChange = (value) => {
    setVideoQuality(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="max-w-[90%] lg:max-w-[60%] mx-auto">
        <img
          src={netflixLogo}
          alt="netflixLogo"
          className="absolute z-10 w-12 right-2 top-0 mt-4"
        />
        <h1 className="text-4xl font-bold mt-7">Settings</h1>

        <p className="mt-5">VIDEO PLAYBACK</p>
        <hr className="border border-gray-600" />

        <div className="flex justify-between w-full my-4 items-center mx-1">
          <div>
            <p className="text-lg">Data Usage</p>
            <p id="dataSelectionParagraph" className="text-sm text-gray-600">
              {dataUsage}
            </p>
          </div>
          <div>
            <Select
              color="red"
              label="Data Usage"
              value={dataUsage}
              onChange={handleDataUsageChange}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              style={{ color: "white" }}
            >
              <Option value="Always Off">Always Off</Option>
              <Option value="Always On">Always On</Option>
              <Option value="Automatic">Automatic</Option>
            </Select>
          </div>
        </div>

        <p>DOWNLOADS</p>
        <hr className="border border-gray-600" />

        <div className="flex justify-between w-full my-4 items-center mx-1">
          <p>Wi-Fi Only</p>
          <Switch color="primary" defaultChecked />
        </div>
        <hr className="border border-gray-600" />
        <div className="flex justify-between w-full my-4 items-center mx-1">
          <div>
            <p className="text-lg">Smart Downloads</p>
            <p className="text-xs text-gray-600">
              Completed episodes will be deleted and replaced with the next
              episodes, only on Wi-Fi.
            </p>
          </div>
          <Switch color="primary" />
        </div>

        <hr className="border border-gray-600" />

        <div className="flex justify-between w-full my-4 items-center mx-1">
          <div>
            <p className="text-lg">Video Quality</p>
            <p className="text-sm text-gray-600" id="qualitySelectionParagraph">
              {videoQuality}
            </p>
          </div>
          <div>
            <Select
              color="red"
              label="Video Quality"
              value={videoQuality}
              onChange={handleVideoQualityChange}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              style={{ color: "white" }}
            >
              <Option value="Maximum">Maximum</Option>
              <Option value="High">High</Option>
              <Option value="Medium">Medium</Option>
              <Option value="Low">Low</Option>
            </Select>
          </div>
        </div>

        <hr className="border border-gray-600" />

        <div className="flex justify-between w-full my-4 items-center mx-1">
          <p className="text-lg">Delete all downloads</p>
          <TrashIcon className="w-7 hover:text-main-red hover:scale-110 transition-all" />
        </div>

        <hr className="border border-gray-600" />

        <div className="flex flex-col w-full my-4">
          <p>iPhone 15</p>
          <div className="w-full h-2 bg-gray-500 my-2 flex">
            <div className="bg-gray-800 w-2/5 h-2"></div>
            <div className="bg-main-red w-1/6 h-2"></div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 mr-1 bg-gray-800"></div>
              <p>Used</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 mr-1 bg-main-red"></div>
              <p>Netflix</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 mr-1 bg-gray-500"></div>
              <p>Free</p>
            </div>
          </div>
        </div>
        <hr className="border border-gray-600" />
      </div>
    </ThemeProvider>
  );
};

export default SettingsPage;
