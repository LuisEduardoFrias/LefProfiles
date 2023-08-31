import { useEffect, useState } from "react";

interface IImgProps {
  src: string;
  className: string;
  alt: string
}

export default function Img(img: IImgProps) {
  
  const [imageUrl, setImageUrl] = useState("");
  
  useEffect(() => {
   if (img.src.search("http") === -1) {
     import(/* @vite-ignore */ `/assets/${img.src}`).then((imageModule) => setImageUrl(imageModule.default)).catch((error) => console.error(`Error loading image: ${error}`));
   } else {
    setImageUrl(img.src);
   }
  }, [img.src]);

  return (
    <img
      className={img.className}
      src={imageUrl}
      alt={img.alt}
    />
  );
}