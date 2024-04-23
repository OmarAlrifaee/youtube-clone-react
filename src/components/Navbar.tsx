import {
  AiOutlineClose,
  AiOutlineSearch,
  BsBell,
  BsCameraVideo,
  BsYoutube,
  GiHamburgerMenu,
  IoAppsSharp,
  TiMicrophone,
} from "./navbarIcons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import channalLogo from "../assest/channal-logo.jpg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearVideos, setSearchTerm } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
type NavbarProps = {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean;
};
export const Navbar = ({ setShowSideBar, showSideBar }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtube.searchTerm);
  const hundleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm) navigate("/");
    if (location.pathname === "/search") {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    } else {
      dispatch(clearVideos());
      navigate("/search");
      dispatch(getSearchPageVideos(false));
    }
  };
  return (
    <div className="flex justify-between items-center md:px-14 px-8 h-14 bg-nav-bg opacity-95 sticky top-0 z-50 ">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          {showSideBar ? (
            <AiOutlineClose
              className="cursor-pointer text-2xl"
              onClick={() => setShowSideBar(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="cursor-pointer"
              onClick={() => setShowSideBar(true)}
            />
          )}
        </div>
        <Link
          to={"/"}
          className="md:block hidden"
        >
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-bold">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form onSubmit={hundleSubmit}>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="md:max-w-96 sm:max-w-40 max-w-20 bg-zinc-900 focus:outline-none border-none md:block"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
              {searchTerm && (
                <AiOutlineClose
                  className="cursor-pointer text-xl"
                  onClick={() => dispatch(setSearchTerm(""))}
                />
              )}
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 rounded-full bg-zinc-900">
          <TiMicrophone />
        </div>
      </div>
      <div className="gap-5 items-center text-xl md:flex hidden">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 flex justify-center items-center">
            +1
          </span>
        </div>
        <img
          src={channalLogo}
          alt="logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};
