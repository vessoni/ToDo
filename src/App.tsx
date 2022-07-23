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
  const [listTasks, setListTasks] = useState<ITask[]>([
    {
      done: false,
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
    },
    {
      done: false,
      description:
        "Integer1 urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
    },
    {
      done: false,
      description:
        "Integer2 urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
    },
  ]);

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
  return (
    <>
      <Header />
      <AddTask />
      <TaskBoard
        listTasks={listTasks}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
