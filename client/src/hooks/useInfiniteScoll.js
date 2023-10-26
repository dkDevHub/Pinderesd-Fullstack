import {useEffect} from "react";

export default function useInfiniteScroll(page, setPage, isFetching) {

    useEffect(() => {
        const onScroll = () => {
          const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    
          if (scrolledToBottom && !isFetching) {
            setPage(page + 1);
          }
        };
    
        document.addEventListener("scroll", onScroll);
    
        return function () {
          document.removeEventListener("scroll", onScroll);
        };
      }, [page, isFetching]);
};