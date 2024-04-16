import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-full h-screen flex align-middle justify-center text-center relative">
      <Background />
      <Header />
      <Cards heading="Basic" price="10$" storage="1" users="10" send="10" />
    </div>
  );
}

export default App;
