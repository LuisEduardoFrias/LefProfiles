import { useEffect, useState } from "react";

interface IImgProps {
  src: string;
  className: string;
  alt: string
}

export default function Img(img: IImgProps) {
  
  const [imageUrl, setImageUrl] = useState("")
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
   if (img.src.search("http") === -1) {
     import(/* @vite-ignore */ `../../../assets/${img.src}`).then((imageModule) => setImageUrl(imageModule.default)).catch((error) => console.error(`Error loading image: ${error}`));
   } else {
    setImageUrl(img.src);
   }
  }, [img.src])

  const handleImageLoad = () => {
    setImageLoaded(true);
  }

  return (
    <img
      className={`${img.className} ${imageLoaded ? "visible" : "hidden"}`}
      src={imageUrl}
      alt={img.alt}
      onLoad={handleImageLoad}
    />
  );
}