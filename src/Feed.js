import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-1/s200x200/18403444_1492576267464578_5364410607219831173_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=r9RpgJk11WIAX-EsAyh&_nc_ht=scontent.fblr8-1.fna&tp=7&oh=37702904070e3b538e8415a036c73173&oe=5F6F1795"
        message="Hiii Guysss"
        timestamp="this is a time"
        username="Suchitra Swain"
        image="https://www.jonesday.com/-/media/files/publications/2019/05/when-coding-is-criminal/when-coding-is-criminal.jpg"
      />
      <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        message="Hiii Guysss"
        timestamp="this is a time"
        username="Sonny Sangha"
      />
    </div>
  );
}

export default Feed;
