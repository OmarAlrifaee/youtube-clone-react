import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { IconType } from "react-icons";
type Link = {
  name: string;
  icon: IconType;
};
type LinksArray = string[];
const mainLinks: Link[] = [
  {
    icon: MdHomeFilled,
    name: "Home",
  },
  {
    icon: FaRegCompass,
    name: "Explore",
  },
  {
    icon: MdOutlineSlowMotionVideo,
    name: "Shorts",
  },
  {
    icon: MdSubscriptions,
    name: "Subscriptions",
  },
];

const secondaryLinks: Link[] = [
  {
    icon: MdOutlineVideoLibrary,
    name: "Library",
  },
  {
    icon: MdHistory,
    name: "History",
  },
  {
    icon: MdOutlineSmartDisplay,
    name: "Your Videos",
  },
  {
    icon: MdOutlineWatchLater,
    name: "Watch Later",
  },
  {
    icon: MdThumbUpOffAlt,
    name: "Liked Videos",
  },
];

const subscriptionLinks: Link[] = [
  {
    icon: TbMusic,
    name: "Music",
  },
  {
    icon: MdOutlineSportsVolleyball,
    name: "Sport",
  },
  {
    icon: TbDeviceGamepad2,
    name: "Gaming",
  },
  {
    icon: GiFilmStrip,
    name: "Films",
  },
];

const helpLinks: Link[] = [
  {
    icon: MdSettings,
    name: "Settings",
  },
  {
    icon: MdOutlinedFlag,
    name: "Report history",
  },
  {
    icon: MdOutlineHelpOutline,
    name: "Help",
  },
  {
    icon: MdOutlineFeedback,
    name: "Send feedback",
  },
];

const textLinks: LinksArray[] = [
  [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creator",
    "Advertise",
    "Developers",
  ],
  [
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How YouTube works",
    "Test new features",
  ],
];
export { mainLinks, secondaryLinks, subscriptionLinks, textLinks, helpLinks };
