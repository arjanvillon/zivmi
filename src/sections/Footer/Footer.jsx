import React from "react";
import "sections/Footer/Footer.styles.css";
import { Logo } from "components/Logo/Logo";
import { LineBreak } from "components/LineBreak/LineBreak";

export const Footer = () => {
  const links = [
    { id: 1, name: "Features" },
    { id: 2, name: "About Us" },
    { id: 3, name: "Services" },
    { id: 4, name: "Contact" },
  ];

  return (
    <footer>
      <div className="navigations">
        <div className="logo-container">
          <Logo isFooterLogo />
        </div>
        <div className="links-container">
          <ul>
            {links.map((link) => {
              const { id, name } = link;
              return (
                <li key={id}>
                  <a href="#!">{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <LineBreak />
      <div className="copyright">
        <p>&copy; 2020 Zivmi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
