import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import logo from "../assets/logo.svg";

import styles from "./AddTask.module.css";

interface ITask {
  done: boolean;
  description: string;
}

interface Props {
  listTasks: ITask[];
  handleAddTask: any;
}

function AddTask({ listTasks, handleAddTask }: Props) {
  const [task, setTask] = useState("");

  const handleTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTasks = () => {
    handleAddTask(task);
    setTask("");
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Add a new Task"
        value={task}
        onChange={(e) => handleTask(e)}
      />
      <button className={styles.button} onClick={handleAddTasks}>
        {" "}
        Create <PlusCircle size={20} />
      </button>
    </div>
  );
}

export default AddTask;
