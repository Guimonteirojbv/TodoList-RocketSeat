import React, { MouseEvent } from "react";
import styles from "./Tasks.module.css";
import trashIcon from "../assets/trash.svg";

export interface TaskType {
  id: number;
  content: string;
  active: boolean;
}

export interface TaskProps {
  task: TaskType;
  handleDeleteTask: (id: number) => void;

  handleChekTask: (id: number) => void;
}

export function Tasks({ task, handleDeleteTask, handleChekTask }: TaskProps) {
  return (
    <>
      <div className={styles.task}>
        <div className={styles.inputWithLabel}>
          <input
            className={styles.checkbox}
            id={task.id.toString()}
            onChange={() => handleChekTask(task.id)}
            name="task"
            type="checkbox"
          />
          <label htmlFor={task.id.toString()}>{task.content}</label>
        </div>
        <button
          className={styles.buttonDelete}
          onClick={() => handleDeleteTask(task.id)}
        >
          <img src={trashIcon} />
        </button>
      </div>
    </>
  );
}
