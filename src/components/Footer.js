
import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="footer">
           <div className="socialMedia">
           <a
            target="_blank"
            rel="noopener noreferrer"
            className="links"
            href="https://github.com/gmshiu"
           > 
           <SocialIcon url="https://github.com/gmshiu" className="github"/>
           </a>
           <a>
            <SocialIcon url="https://linkedin.com/in/godwin-mshiu"/>
           </a>
           <a
            target="_blank"
            rel="noopener noreferrer"
            className="links"
           >
           <SocialIcon url="https://twitter.com/G_mshiu" className="socialIcons1"   />
            
           </a>
           </div>
        </footer>
    );
}