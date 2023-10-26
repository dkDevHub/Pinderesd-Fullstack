import React from "react"
import Banner from "../components/banner/Banner"
import { useSearchParams } from "react-router-dom";
import Loading from "../components/UI/Loading";
import Gallery from "../components/gallery/Gallery";
import BottomMenu from "../components/bottom_menu/BottomMenu";
import { postAPI } from "../services/PostService";

const Posts = () => {
    const [searchParams] = useSearchParams();
    const collection = searchParams.get('collection');
    const name = searchParams.get('name');
    const { data: posts, isLoading } = postAPI.useFetchCollectionQuery({collection, name});

    if (isLoading) return (
        <Loading />
    )

    return (
        <>
            <Banner />
            <Gallery posts={posts} collection={collection}/>
            <BottomMenu />
        </>
    )
};

export default Posts;