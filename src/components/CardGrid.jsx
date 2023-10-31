import { useEffect, useState } from "react";
import { getCard } from "../helpers/getCard";
import { CardItem } from "./CardItem";

export const CardGrid = ({ event }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getCard(event);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{event}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <CardItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
