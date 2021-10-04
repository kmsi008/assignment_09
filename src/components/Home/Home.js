import React from "react";
import AllTeams from "../AllTeams/AllTeams";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const Home = () => {
  return (
    <div>
      <MenuBar />
      <AllTeams></AllTeams>
      <Footer></Footer>
    </div>
  );
};

export default Home;
