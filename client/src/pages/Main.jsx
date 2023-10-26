import React, { useEffect, useState, useLayoutEffect } from "react"
import Banner from "../components/banner/Banner"
import Theme from "../components/theme/Theme"
import Gallery from "../components/gallery/Gallery"
import BottomMenu from "../components/bottom_menu/BottomMenu"
import Modal from "../components/UI/Modal"
import LoginForm from "../components/UI/LoginForm"
import { useDispatch, useSelector } from "react-redux"
import { setAuthModalIsActive } from "../store/reducers/ComponentsStateSlice"
import { postAPI } from "../services/PostService"
import Loading from "../components/UI/Loading"
import useInfiniteScroll from "../hooks/useInfiniteScoll"
import Error from "../components/UI/Error"

const Main = () => {
  const dispatch = useDispatch()
  const { authModalIsActive, trendOrLatestSort: sort } = useSelector(store => store.componentsReducer)
  const [ page, setPage ] = useState(1)
  const [ posts, setPosts ] = useState([])
  const limit = 10
  const { data: fetchedPosts, isLoading, isFetching, error }  = postAPI.useFetchPostsQuery({ page, limit, sort })

  useEffect(() => {
    if (fetchedPosts && !isLoading) setPosts([...posts, ...fetchedPosts])
  }, [fetchedPosts])

  useLayoutEffect(() => {
    setPosts([])
    setPage(1)
    console.log();
  }, [sort])

  useInfiniteScroll(page, setPage, isFetching)

  if (isLoading) return (
    <Loading />
  )

  if (error) return (
    <Error message={error.data.message}/>
  )

  return (
    <div>
      <Banner />
      <Theme />
      <Gallery posts={posts}/>
      <BottomMenu />
      <Modal active={authModalIsActive} setActive={(state) => dispatch(setAuthModalIsActive(state))}>
        <LoginForm />
      </Modal>
    </div>
  )
};

export default Main;
