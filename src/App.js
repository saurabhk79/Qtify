import React from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        followsCount={"100M"}
        image={"bollywoodhits.png"}
        title={"New Bollywood"}
      />
    </div>
  );
}

export default App;
