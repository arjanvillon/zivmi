import React from "react";
import "styles/index.css";
import { Navbar } from "sections/Navbar/Navbar";
import { Header } from "sections/Header/Header";
import { Section1 } from "sections/Section1/Section1";
import { Section2 } from "sections/Section2/Section2";
import { Section3 } from "sections/Section3/Section3";
import { Section4 } from "sections/Section4/Section4";
import { Section5 } from "sections/Section5/Section5";
import { Footer } from "sections/Footer/Footer";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
