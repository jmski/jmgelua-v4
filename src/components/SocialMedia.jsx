import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiPaperclip, FiLinkedin } from "react-icons/fi";
import { resume } from "../constants";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/jmski/" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a
        href="https://linkedin.com/in/jmgelua/"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
    </div>
    <div>
      <a href="https://leetcode.com/jmgelua/" target="_blank" rel="noreferrer">
        <SiLeetcode />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/jmski.gg/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href={resume} target="_blank" rel="noreferrer">
        <FiPaperclip />
      </a>
    </div>
  </div>
);

export default SocialMedia;
