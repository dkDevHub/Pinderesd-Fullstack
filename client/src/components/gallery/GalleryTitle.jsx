import React from "react"
import cl from "./Gallery.module.css"
import { uppercaseFirstLetter } from "../../funcs/utils";

const GalleryTitle = ({text}) => {
    return (
        <div className={cl.title}>
            {uppercaseFirstLetter(text)}:
        </div>
    )
};

export default GalleryTitle;
