import React from "react"
import { userAPI } from "../../../services/UserService";

const Author = ({authorId}) => {
    const { data: user, isLoading} = userAPI.useFetchUserQuery(authorId)
    
    if (isLoading) return (
        <>...</>
    )

    return (
        <>@{user.username}</>
    )
};

export default Author;
