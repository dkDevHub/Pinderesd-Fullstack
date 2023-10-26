import React from "react"
import cl from "./ImagePostComp.module.css"

const PostImage = ({imgUrl}) => {
    return (
        <div className={cl.image_block}>
            <img src={imgUrl} className={cl.image} alt="Not found"></img>
            <img src={imgUrl} className={`${cl.image} ${cl.blur}`} alt="Not found"></img>
        </div>
    )
};

export default PostImage;
