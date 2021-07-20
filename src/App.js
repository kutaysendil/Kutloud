import React from "react";
import ImageGrid from "./components/ImageGrid";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

export default function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}
