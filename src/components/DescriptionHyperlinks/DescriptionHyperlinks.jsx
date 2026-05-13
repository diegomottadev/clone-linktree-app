import React from "react";
import "./DescriptionHyperlinks.css";

const DescriptionHyperlinks = ({onDescription}) => {
   const {content_1} = onDescription
  return (
    <div className="description-box">
      <p className="description-text">
        {/* Hi there! 👋I'm a self-taught and passionate software developer based in Argentina. With over 9 years of experience as a fullstack developer web, I bring a wealth of expertise to every project I undertake. */}
        <b>{content_1}</b>
      </p>
    </div>
  )
}


export default DescriptionHyperlinks;
