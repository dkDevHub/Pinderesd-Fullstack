import React from "react"
import cl from "./Loading.module.css"

const Error = ({message}) => {
    if (!message) message = 'Unknow Error :('
    return (
        <div className={cl.loading}>
            <div className={cl.title}>{message}</div>
        </div>
    )
};

export default Error;
