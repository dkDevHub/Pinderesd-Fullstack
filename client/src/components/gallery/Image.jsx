import React from "react"
import cl from "./Gallery.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalIsActive } from "../../store/reducers/ComponentsStateSlice";

const Image = ({img}) => {
  const { isAuth } = useSelector(store => store.authReducer)
  const dispatch = useDispatch()
  const imgUrl = process.env.REACT_APP_API_URL.replace('api', img.picture)
  const imageLinkTo = `/posts/${img._id}`

  if (!isAuth) return (
    <div className={`${cl.image} ${cl[img.size]}`} style={{backgroundImage: `url('${imgUrl}')`}}>
      <div onClick={() => dispatch(setAuthModalIsActive(true))} className={cl.info}>{img.name}</div>
    </div>
  )

  return (
    <div className={`${cl.image} ${cl[img.size]}`} style={{backgroundImage: `url('${imgUrl}')`}}>
      <Link to={imageLinkTo} className={cl.info}>{img.name}</Link>
    </div>
  )
};

export default Image;
