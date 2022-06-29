import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <AddTask />
    </>
  );
}

export default App;
