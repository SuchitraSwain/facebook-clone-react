import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      {/* <SidebarRow
        src="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-1/s200x200/18403444_1492576267464578_5364410607219831173_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=r9RpgJk11WIAX-EsAyh&_nc_ht=scontent.fblr8-1.fna&tp=7&oh=37702904070e3b538e8415a036c73173&oe=5F6F1795"
        title="Suchitra Swain"
      /> */}
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
