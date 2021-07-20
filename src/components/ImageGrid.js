import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("resimler");

  return (
    <div>
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt={doc.resimAd} />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
