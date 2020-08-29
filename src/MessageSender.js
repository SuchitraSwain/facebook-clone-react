import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        {/* <Avatar src="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-1/s200x200/18403444_1492576267464578_5364410607219831173_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=r9RpgJk11WIAX-EsAyh&_nc_ht=scontent.fblr8-1.fna&tp=7&oh=37702904070e3b538e8415a036c73173&oe=5F6F1795" /> */}
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}`}
          />
          <input
            placeholder="image URL(Optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
