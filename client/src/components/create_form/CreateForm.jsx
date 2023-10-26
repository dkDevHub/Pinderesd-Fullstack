import React, { useRef, useState } from "react"
import cl from "./CreateForm.module.css"
import useInput from "../../hooks/useInput";
import { postAPI } from "../../services/PostService";

const CreateForm = () => {
    const name = useInput('')
    const description = useInput('')
    const theme = useInput('')
    const style = useInput('')
    const tags = useInput('')
    const [selectedImage, setSelectedImage] = useState(null);
    const imgRef = useRef()
    const [createPost, createdPost] = postAPI.useCreatePostMutation()

    const getImageSize = (width, height) => {
        if ( width / height > 1.3 ) return "small"
        if ( width / height < 0.70 ) return "large"
        return "medium"
    }

    const getRegBody = () => {
        const imgSize = getImageSize(imgRef.current.clientWidth, imgRef.current.clientHeight)
        return { name: name.value, description: description.value, theme: theme.value, style: style.value, tags: tags.value, size: imgSize}
    }

    const handleCreate = async () => {
        await createPost({post: getRegBody(), file: selectedImage})
    }

    if (createdPost.data) return (
        <div className={cl.success}>Successful create</div>
    )

    return (
        <div className={cl.create_form}>
            <div className={cl.image_block}>
            {selectedImage ? 
                <img ref={imgRef} className={cl.image} src={URL.createObjectURL(selectedImage)} ></img> : <></>
            }
            </div>
            <div className={cl.form}>
                <input className={cl.input} {...name}  type="text" placeholder="name" />
                <textarea className={cl.input} {...description} rows="5" cols="25" placeholder="description"></textarea>
                <input className={cl.input} {...style}  type="text" placeholder="style" />
                <input className={cl.input} {...theme}  type="text" placeholder="theme" />
                <input className={cl.input} {...tags}  type="text" placeholder="#tags" />
                <input className={cl.input_file} type="file" name="myImage" accept="image/*" onChange={(e) => setSelectedImage(e.target.files[0])}/>
                <button className={cl.button} onClick={handleCreate} >Post Picture</button>
            </div>
        </div>
    )
};

export default CreateForm;
