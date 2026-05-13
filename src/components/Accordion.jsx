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
        const title = parts[0].replace('📌', '').trim();
        return (
          <p key={index} className="result">
            <b>{title}</b>: {formatLinks(parts.slice(1).join(':'))}
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
    const cleaned = text.replace(/^🔗\s*/, '');
    const linkPattern = /https?:\/\/\S+/g;
    const segments = [];
    let lastIndex = 0;
    let match;

    while ((match = linkPattern.exec(cleaned)) !== null) {
      segments.push(cleaned.slice(lastIndex, match.index));
      segments.push(
        <a key={match.index} href={match[0]} target="_blank" rel="noopener noreferrer">
          <b>{match[0]}</b>
        </a>
      );
      lastIndex = linkPattern.lastIndex;
    }

    segments.push(cleaned.slice(lastIndex));
    return segments;
  };

  return (
    <div className="accordion" onClick={handleToggle}>
      <p className="result-title">
        <i className={`fa fa-angle-right accordion-icon${isExpanded ? ' expanded' : ''}`}>&nbsp;</i>
        <b>{title}</b>
      </p>
      <div className={`accordion-content${isExpanded ? ' expanded' : ''}`}>
        <div className="accordion-content-inner">{formatContent(content)}</div>
      </div>
    </div>
  );
};

export default Accordion;
