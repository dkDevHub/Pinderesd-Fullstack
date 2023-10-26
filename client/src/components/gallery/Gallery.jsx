import React from "react"
import cl from "./Gallery.module.css"
import Image from "./Image";
import GalleryTitle from "./GalleryTitle";

const Gallery = ({posts, collection}) => {

  return (
    <div className={cl.gallery}>
        {collection ? <GalleryTitle text={collection} /> : null}
        <div className={cl.image_container}>
            {posts.map((img, i) => 
                <Image key={i} img={img}/>
            )}
        </div>
    </div>
  )
};

export default Gallery;
