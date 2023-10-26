import React from "react"
import cl from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={cl.loading}>
            <div className={cl.title}>Loading...</div>
        </div>
    )
};

export default Loading;
