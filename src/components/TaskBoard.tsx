import { PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";

import logo from "../assets/logo.svg";
import CheckBox from "./Checkbox";

import styles from "./TaskBoard.module.css";

function TaskBoard() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className={styles.count}>
        <div className={styles.createdTask}>
          Created Tasks <span>0</span>
        </div>
        <div className={styles.done}>
          Done <span>0</span>
        </div>
      </div>

      <div className={styles.item}>
        <div onClick={() => setChecked(!checked)}>
          <CheckBox checked={checked} />
        </div>
        <span className={styles.itemText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
        <div className={styles.trash}>
          <Trash size={20} />
        </div>
      </div>

      <div className={styles.item}>
        <div onClick={() => setChecked(!checked)}>
          <CheckBox checked={checked} />
        </div>
        <span className={styles.itemText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
        <div className={styles.trash}>
          <Trash size={20} />
        </div>
      </div>
    </>
  );
}

export default TaskBoard;
