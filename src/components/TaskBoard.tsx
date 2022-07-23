import { PlusCircle, Trash } from "phosphor-react";
import { Dispatch, useState } from "react";

import logo from "../assets/logo.svg";
import CheckBox from "./CheckBox";

import styles from "./TaskBoard.module.css";

interface ITask {
  done: boolean;
  description: string;
}

interface Props {
  listTasks: ITask[];
  // setListTasks: Dispatch<React.SetStateAction<ITask[]>>;
  handleChecked: any;
  handleDelete: any;
}

function TaskBoard({ listTasks, handleChecked, handleDelete }: Props) {
  const handleCountTasks = () => {
    return listTasks.length;
  };

  const handleCountTasksDone = () => {
    return listTasks.filter((e) => e.done === true).length;
  };

  const handleCheck = (index: number) => {
    handleChecked(index);
  };
  const handleTaskDelete = (index: number) => {
    handleDelete(index);
  };

  return (
    <>
      <div className={styles.count}>
        <div className={styles.createdTask}>
          Created Tasks <span>{handleCountTasks()}</span>
        </div>
        <div className={styles.done}>
          Done <span>{handleCountTasksDone()}</span>
        </div>
      </div>

      {listTasks.map((task, index) => {
        return (
          <div className={styles.item} key={task.description}>
            <div onClick={() => handleCheck(index)}>
              <CheckBox checked={!task.done} />
            </div>
            {!task.done && (
              <span className={styles.itemText}>{task.description}</span>
            )}
            {task.done && (
              <span className={styles.itemTextDone}>{task.description}</span>
            )}

            <div
              className={styles.trash}
              onClick={() => handleTaskDelete(index)}
            >
              <Trash size={20} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TaskBoard;
