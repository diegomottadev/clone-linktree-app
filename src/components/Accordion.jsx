import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const formatContent = (paragraphs) => {
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('📌') && paragraph.includes(':')) {
        const parts = paragraph.split(':');
        return (
          <p key={index} className="result">
            <b>{parts[0]}</b>: {formatLinks(parts.slice(1).join(':'))}
          </p>
        );
      }
      return (
        <p key={index} className="result">
          {formatLinks(paragraph)}
        </p>
      );
    });
  };

  const formatLinks = (text) => {
    const linkPattern = /https?:\/\/\S+/g;
    const segments = [];
    let lastIndex = 0;
    let match;
    
    while ((match = linkPattern.exec(text)) !== null) {
      segments.push(text.slice(lastIndex, match.index));
      segments.push(
        <a key={match.index} href={match[0]} target="_blank" rel="noopener noreferrer">
          <b>{match[0]}</b>
        </a>
      );
      lastIndex = linkPattern.lastIndex;
    }
    
    segments.push(text.slice(lastIndex));
    return segments;
  };

  return (
    <div className="accordion" onClick={handleToggle}>
      <p className="result-title">
        {isExpanded ? "🌐" : "👇"}
        <b>{title}</b>
        {isExpanded ? "" : ""}
      </p>
      {isExpanded && (
        <div className="accordion-content">{formatContent(content)}</div>
      )}
    </div>
  );
};

export default Accordion;
