import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";

import "./global.css";

interface ITask {
  done: boolean;
  description: string;
}

function App() {
  const [listTasks, setListTasks] = useState<ITask[]>([]);

  const handleChecked = (index: number) => {
    const ListCheck = [...listTasks];
    const task = {
      ...ListCheck[index],
      done: !ListCheck[index].done,
    };
    ListCheck[index] = task;

    setListTasks(ListCheck);
  };

  const handleDelete = (index: number) => {
    const ListCheck = [...listTasks];
    ListCheck.splice(index, 1);

    setListTasks(ListCheck);
  };

  const handleAddTask = (value: string) => {
    const ListCheck = [...listTasks];
    ListCheck.push({ done: false, description: value });
    setListTasks(ListCheck);
  };
  return (
    <>
      <Header />
      <AddTask listTasks={listTasks} handleAddTask={handleAddTask} />
      <TaskBoard
        listTasks={listTasks}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
