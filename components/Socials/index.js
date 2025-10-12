import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"; 
import Button from "../Button";
import yourData from "../../data/portfolio.json";

const iconMap = {
  Github: <Github className="w-5 h-5 mr-1" />,  
  LinkedIn: <Linkedin className="w-5 h-5 mr-1" />,
  Email: <Mail className="w-5 h-5 mr-1" />,
};

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => window.open(social.link)}
          className="flex items-center"
        >
          {iconMap[social.title]}  
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
