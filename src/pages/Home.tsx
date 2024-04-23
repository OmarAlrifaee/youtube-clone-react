import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import { clearVideos } from "../store";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Spinner, Navbar, Sidebar } from "../components/ExportComponents";
const Home = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtube.videos);

  useEffect(() => {
    dispatch(clearVideos());
    dispatch(getHomePageVideos(false));
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[7.5vh]">
        <Navbar
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        />
      </div>
      <div className="h-[92.5vh] flex">
        <Sidebar showSideBar={showSideBar} />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={"92.5vh"}
          >
            <div className="flex flex-wrap justify-center gap-y-14 sm:gap-x-8 gap-x-0 md:p-8 p-1 mt-3">
              {videos.map((item) => (
                <Card
                  key={item.videoId}
                  data={item}
                />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Home;
