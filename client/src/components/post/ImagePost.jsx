import React from "react"
import cl from "./ImagePost.module.css"
import { Link, useParams } from "react-router-dom";
import { postAPI } from "../../services/PostService";
import Loading from "../UI/Loading";
import Author from "./image-post-comp/Author";
import { getDate } from "../../funcs/utils";
import PostImage from "./image-post-comp/PostImage";
import Stats from "./image-post-comp/Stats";
import Error from "../UI/Error";

const ImagePost = () => {
    const { id } = useParams()
    const { data: post, isLoading: isLoadingPost, error } = postAPI.useFetchPostQuery(id)

    if (isLoadingPost) return (
        <Loading />
    )

    if (error) return (
        <Error message={error.data.message}/>
    )

    const imgUrl = process.env.REACT_APP_API_URL.replace('api', post.picture)

    const themeLink = '/posts?collection=theme&name=' + post.theme.replace(' ', '+')
    const styleLink = '/posts?collection=style&name=' + post.style.replace(' ', '+')

    return (
        <div className={cl.post}>
            <div className={cl.back_image} style={{backgroundImage: `url('${imgUrl}')`}}></div>
            <div className={cl.post_content}>
                <Stats postId={post._id} />
                <PostImage imgUrl={imgUrl} postId={id} />
                <div className={cl.info}>
                    <div className={cl.username}><Author authorId={post.author} /></div>
                    <div className={cl.name}>{post.name}</div>
                    <div className={cl.desc}>{post.description}</div>
                    <div className={cl.theme_style}>
                        <Link to={themeLink} className={cl.theme}>{post.theme}</Link>
                        <Link to={styleLink} className={cl.style}>{post.style}</Link>
                    </div>
                    <div className={cl.tags}>
                        {post.tags.map((tag, i) => 
                            <span key={i}>{`#${tag} `}</span>
                        )}
                    </div>
                    <div className={cl.date}>{getDate(post.date)}</div>
                </div>
            </div>
        </div>
    )
};

export default ImagePost;
