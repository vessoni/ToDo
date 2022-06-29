import { PlusCircle } from "phosphor-react";
import { useState } from "react";

import logo from "../assets/logo.svg";

import styles from "./AddTask.module.css";

function AddTask() {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="Add a new Task" />
      <button className={styles.button}>
        {" "}
        Create <PlusCircle size={20} />
      </button>
    </div>
  );
}

export default AddTask;
