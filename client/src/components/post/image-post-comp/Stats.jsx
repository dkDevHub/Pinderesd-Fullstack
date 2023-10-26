import React from "react"
import cl from "./ImagePostComp.module.css"
import { statsAPI } from "../../../services/StatsService";
import { useSelector } from "react-redux";

const Stats = ({postId}) => {
    
    const userId = useSelector(store => store.authReducer.user.id)
    const { data: stats, isLoading: isLoadingStats, refetch: refetchStats } = statsAPI.useFetchStatsQuery(postId)
    const [likePost, {isLoading: isLoadingLike}] = statsAPI.useLikePostMutation(postId)
    const [savePost, {isLoading: isLoadingSave}] = statsAPI.useSavePostMutation(postId)
    
    const postIsLiked = isLoadingStats ? false : (stats.users_like.indexOf(userId) !== -1);
    const postIsSaved = isLoadingStats ? false : (stats.users_save.indexOf(userId) !== -1);

    const likesClasses = postIsLiked ? cl.likes : ''
    const savesClasses = postIsSaved ? cl.saves : ''
    
    const like = async () => {
        if (!isLoadingStats && !isLoadingLike) {
            await likePost(postId)
            refetchStats()
        }
    }

    const save = async () => {
        if (!isLoadingStats && !isLoadingSave) {
            await savePost(postId)
            refetchStats()
        }
    }

    if ( isLoadingStats ) return (
        <div className={cl.stats}>
            <div className={likesClasses}><span class="material-symbols-outlined">favorite</span>0</div>
            <div className={savesClasses}><span class="material-symbols-outlined">bookmark</span>0</div>
            <div className={cl.views}><span class="material-symbols-outlined">visibility</span>0</div>
        </div>
    )

    return (
        <div className={cl.stats}>
            <div onClick={like} className={likesClasses}><span class="material-symbols-outlined">favorite</span>{stats.users_like.length}</div>
            <div onClick={save} className={savesClasses}><span class="material-symbols-outlined">bookmark</span>{stats.users_save.length}</div>
            <div className={cl.views}><span class="material-symbols-outlined">visibility</span>{stats.views}</div>
        </div>
    )
};

export default Stats;
