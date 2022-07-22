import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <AddTask />
      <TaskBoard />
    </>
  );
}

export default App;
