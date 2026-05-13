import React from "react";
import "./Bio.css";

const Bio = ({ onBio, currentLanguage }) => {
  return (
    <div className="bio-box">
      {Object.values(onBio).map((text, index) => (
        <p key={index} className="bio">{text}</p>
      ))}
      <div style={{ padding: "75% 0 0 0", position: "relative", marginTop: "28px" }}>
        <iframe
          src={
            currentLanguage === "es"
              ? "https://player.vimeo.com/video/853961366?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              : "https://player.vimeo.com/video/846736444?badge=0&autopause=0&player_id=0&app_id=58479"
          }
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen={true}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="my_value_proposal"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default Bio;
