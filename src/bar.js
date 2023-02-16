import { useState } from "react";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './App.css';

export default function SideBar(){
    return(
        <div className = "sidebar">
        <SidebarLink text="Home" Icon={HomeOutlinedIcon} />
        <SidebarLink text="Explore" Icon={SearchIcon} />
        <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
        <SidebarLink text="Messages" Icon={MailOutlineIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SidebarLink text="Lists" Icon={ListAltIcon} />
        <SidebarLink text="Profile" Icon={PermIdentityIcon} />
        <SidebarLink text="More" Icon={MoreHorizIcon}/>
        <Button class = "tweet">
            Tweet
        </Button>
        </div>
    );

}

//sidebarlinks function, whatever text is, it will be passed as argument to
//the funciton if SidebarLink
function SidebarLink({text, Icon}){

    return(
        <div className = "link">
            <Icon />
            <h2> {text} </h2>
        </div>

    );

}



