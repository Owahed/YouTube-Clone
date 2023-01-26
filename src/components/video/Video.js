import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img
          alt=""
          class="yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded"
          src="https://i.ytimg.com/vi/78Y3Y47RgPI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAjCTwAPV169Q1al7CVECrU_j4WVw"
        />
        <span>05.23</span>
      </div>
      <div className="video_title">
        Create app in 5 minutes #made by Najmul Hyder
      </div>
      <div className="video_details">
        <span>
          <AiFillEye /> 5m Views
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video_channel">
        <img
          id="img"
          draggable="false"
          class="style-scope yt-img-shadow"
          alt=""
          width="48"
          src="https://yt3.ggpht.com/V3rQmL6b5p0xtM-j-m_Obpvvq9TwPKWUMDcXn11SsCOoNfTzhNw4qlK05ukU0GwSet_uwxk-pQ=s68-c-k-c0x00ffffff-no-rj"
        />
        <p>Rainbow Hat</p>
      </div>
    </div>
  );
};

export default Video;
