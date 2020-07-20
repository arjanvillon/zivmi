import React from "react";
import "sections/Navbar/Navbar.styles.css";
import { Button } from "components/Button/Button";
import { Logo } from "components/Logo/Logo";

export const Navbar = () => {
  return (
    <nav>
      <Logo />
      <Button className="btn-primary">Download</Button>
    </nav>
  );
};
