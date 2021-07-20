import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);
  useEffect(() => {
    url && setFile(null);
  }, [url, setFile]);
  return (
    <div
      className="progress-bar"
      style={{ width: progress + "%", opacity: 0.2 }}
    ></div>
  );
};

export default ProgressBar;
