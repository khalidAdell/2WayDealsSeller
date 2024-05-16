import React from "react";
import ProfileImage from "../components/ProfileImage";
import Landing from "../components/Landing";
import LineChart from "../components/LineChart";

const Profile = () => {
  return (
    <div className="mt-8">
      <ProfileImage />
      <Landing />
      <LineChart />
    </div>
  );
};

export default Profile;
