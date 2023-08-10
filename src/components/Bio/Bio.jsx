import React from "react";
import "./Bio.css";

const Bio = (onBio) => {

  return (
    <div className="bio-box">
      <p className="bio">
        {/* Hi there! 👋I'm a self-taught and passionate software developer based in Argentina. With over 9 years of experience as a fullstack developer web, I bring a wealth of expertise to every project I undertake. */}
        {onBio.onBio.content_1}
    
      </p>
      <p className="bio">
        {/* Aside from my love for coding, I'm also a dog lover 🐶, a gym enthusiast 💪, and a trail runner 🏃‍♂️. */}
        {onBio.onBio.content_2}
      </p>
      <div style={{ padding: "75% 0 0 0", position: "relative" }}>
          <iframe
            // src="https://player.vimeo.com/video/846736444?badge=0&autopause=0&player_id=0&app_id=58479"
            // frameborder="0"
            // allow="autoplay; fullscreen; picture-in-picture"
            // allowfullscreen
            // style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            // title="my_value_proposal"
            src="https://player.vimeo.com/video/846736444?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"   // Change "frameborder" to "frameBorder" here
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen   // Use camelCase for allowFullScreen as well
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="my_value_proposal"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )
}


export default Bio;
