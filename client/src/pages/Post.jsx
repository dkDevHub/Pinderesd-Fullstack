import React, { useEffect } from "react"
import ImagePost from "../components/post/ImagePost";
import { setBottomMenuIsActive } from "../store/reducers/ComponentsStateSlice";
import { useDispatch } from "react-redux";

const Post = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setBottomMenuIsActive(true))
        return () => dispatch(setBottomMenuIsActive(false))
    }, [])

    return (
        <>
            <ImagePost />
        </>
    )
};

export default Post;