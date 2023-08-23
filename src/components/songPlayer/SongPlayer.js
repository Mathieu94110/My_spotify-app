import React from "react";
import { useLocation } from "react-router";
const SongPlayer = () => {
  const location = useLocation();
  console.log(location);
  return <div>songPlayer</div>;
};

export default SongPlayer;
