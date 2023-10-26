import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setBottomMenuIsActive } from "../store/reducers/ComponentsStateSlice";
import CreateForm from "../components/create_form/CreateForm";

const CreatePost = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setBottomMenuIsActive(true))
        return () => dispatch(setBottomMenuIsActive(false))
    }, [])
    
    return (
        <div>
            <CreateForm />
        </div>
    )
};

export default CreatePost;
