import React from "react";
import Html from "../../../Assets/Images/html.png";
import Css from "../../../Assets/Images/css.png";
import Js from "../../../Assets/Images/js.png";
import c from "../../../Assets/Images/c.png";
const Skill = () => {
  return (
    <div className="skill">
      <div className="skill_header">
        <h3>Skillset & Specialization</h3>
        <h1>Skills</h1>
      </div>
      <div className="skill_content">
        <div className="card_container">
          <div className="card_icon">
            <img src={Html} alt="logo" />
            <img src={Css} alt="logo" style={{ height: "5rem" }} />
          </div>
          <div className="card_content">
            <p>HTML 5 and CSS 3(Sass) </p>
          </div>
        </div>
        <div className="card_container">
          <div className="card_icon">
            <img
              src={Js}
              alt="logo"
              style={{ height: "5rem", width: "5rem" }}
            />
          </div>
          <div className="card_content">
            <p>JAVASCRIPT </p>
          </div>
        </div>
        <div className="card_container">
          <div className="card_icon">
            <img src={c} alt="logo" style={{ height: "5rem", width: "5rem" }} />
          </div>
          <div className="card_content">
            <p>C++ </p>
          </div>
        </div>
      </div>
      <div className="skill_footer">
        <h1>Specialization</h1>
        <div className="card_container">
          <div className="card_icon">
            <img src={Html} alt="logo" />
            <img src={Css} alt="logo" style={{ height: "5rem" }} />
          </div>
          <div className="card_content">
            <p>HTML 5 and CSS 3(Sass) </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
