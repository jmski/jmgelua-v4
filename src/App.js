import React from "react";
import {
  About,
  Footer,
  Header,
  Header2,
  Skills,
  Testimonial,
  Work,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Header2 />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
