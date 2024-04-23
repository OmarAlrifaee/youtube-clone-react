import { useState } from "react";
import {
  Navbar,
  Sidebar,
  SearchCard,
  Spinner,
} from "../components/ExportComponents";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
const Search = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtube.videos);

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[7.5vh]">
        <Navbar
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        />
      </div>
      <div className="h-[92.5vh] flex">
        <Sidebar
          showSideBar={showSideBar}
          absolute
        />
        {videos.length ? (
          <div className="flex flex-col w-full py-8 md:px-8 px-3 gap-5">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={"92.5vh"}
            >
              {videos.map((item) => (
                <div
                  className="my-5"
                  key={item.videoId}
                >
                  <SearchCard data={item} />
                </div>
              ))}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Search;
