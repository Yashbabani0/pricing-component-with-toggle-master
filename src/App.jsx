import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center text-center relative">
      <Background />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
