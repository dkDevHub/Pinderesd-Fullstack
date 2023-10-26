import React from "react"
import Banner from "../components/banner/Banner"
import Loading from "../components/UI/Loading";
import Gallery from "../components/gallery/Gallery";
import BottomMenu from "../components/bottom_menu/BottomMenu";
import { userAPI } from "../services/UserService";

const History = () => {
    const { data: posts, isLoading } = userAPI.useFetchHistoryQuery()

    if (isLoading) return (
        <Loading />
    )

    return (
        <>
            <Banner />
            <Gallery posts={posts} collection={"History"}/>
            <BottomMenu />
        </>
    )
};

export default History;