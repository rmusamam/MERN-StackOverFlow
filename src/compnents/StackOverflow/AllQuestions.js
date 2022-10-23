import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/icons-material";
import './CSS/AllQuestions.css'



function AllQuestions() {
  return (
    <div className="all-question">
      <div className="all-question-container">
        <div className="all-question-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <small>0 Views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link>How to use drag and drop in ant design? </Link>
          <div
            style={{
              width: "90%",
            }}
          >
            <div>
              what I want is an example about how to make the drag and drop of
              my table that work properly, but I can not figure out how to make
              it works
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <span className="question-tags">react</span>
            <span className="question-tags">ant</span>
            <span className="question-tags">frontend</span>
          </div>
          <div className="author">
                <small>Timestamp</small>
                <div className="author-details">
                    <Avatar />
                    <p>UserName</p>

                </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
