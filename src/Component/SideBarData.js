import { FaArrowAltCircleRight, FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
// import { HiOutlineInboxArrowDown } from "react-icons/hi";
import { RiDraftLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

export const SideBarData = [
  {
    path: "/",
    title: "Home",
    icon: <FaHome />,
  },
  { title: "My Profile", path: "profile", icon: <ImProfile /> },
  { title: "My Story", path: "story" },
  { title: "Wallet", path: "wallet", icon: <BiWallet /> },
  { title: "Stake", path: "stake", icon: <BiWallet /> },
  { title: "Draft", path: "draft", icon: <RiDraftLine /> },
  { title: "Inbox", path: "inbox" },
  { title: "About story", path: "about", icon: <VscGraph /> },
  { title: "Setting", path: "setting", icon: <AiFillSetting /> },
];

export const SmBarData = [
  {
    path: "/",
    title: "Home",
    icon: <FaHome />,
    arrow: <IoIosArrowForward />,
  },
  {
    title: "Profile",
    path: "profile",
    icon: <ImProfile />,
    arrow: <IoIosArrowForward />,
  },
  { title: "Message", icon: <ImProfile />, arrow: <IoIosArrowForward /> },
  { title: "Transaction", icon: <ImProfile />, arrow: <IoIosArrowForward /> },
  {
    title: "Refer and Earn",
    icon: <ImProfile />,
    arrow: <IoIosArrowForward />,
  },
  { title: "Notification", icon: <ImProfile />, arrow: <IoIosArrowForward /> },
  { title: "Security", icon: <ImProfile />, arrow: <IoIosArrowForward /> },
  {
    title: "Default Currency",
    icon: <ImProfile />,
    arrow: <IoIosArrowForward />,
  },
  { title: "NFTs", icon: <ImProfile />, arrow: <IoIosArrowForward /> },
  {
    title: "Join our community",
    icon: <ImProfile />,
    arrow: <IoIosArrowForward />,
  },
  { title: "Log Out", icon: <ImProfile />, arrow: <IoIosArrowForward /> },
];