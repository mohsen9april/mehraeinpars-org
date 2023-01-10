import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Newline = () => {
  return (
    <div className="App">
      <h2>Timeline </h2>
      <VerticalTimeline lineColor="#4f0601" animate={true}>
        {/* 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaBars />}
        >
          <h2>Section 1</h2>
          <h4 className="messages">
            Bachelor's Degree Bachelor's Degree Bachelor's Degree Bachelor's Degree Bachelor's
            Degree
          </h4>
        </VerticalTimelineElement>
        {/* 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2014 - 2023"
          iconStyle={{ background: "#88497a", color: "#fff" }}
          icon={<FaTimes />}
        >
          <h2>Section 2</h2>
          <h4 className="messages">
            Bachelor's Degree Bachelor's Degree Bachelor's Degree Bachelor's Degree Bachelor's
            Degree
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Newline;
