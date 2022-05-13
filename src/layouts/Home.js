import React from "react";
import Header from "../components/Header";
import HomeCover from "../components/HomeCover";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HomeCover />
      <HomeContent />
      <Footer />
    </>
  );
};

export default Home;
