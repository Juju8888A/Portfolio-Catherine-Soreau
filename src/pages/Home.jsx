import React from "react";
import NavBar from "../components/Header/NavBar";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
