import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen flex align-middle justify-center text-center relative">
      <Background />
      <Header />
    </div>
  );
}

export default App;
