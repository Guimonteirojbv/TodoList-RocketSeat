import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  FormHTMLAttributes,
  SetStateAction,
} from "react";

import styles from "./NewTask.module.css";

interface NewTaskProps {
  handleNewTask: (event: FormEvent<HTMLFormElement>) => void;
  handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
  newUserTask: string;
}

export function NewTask({
  handleNewTask,
  handleNewTaskChange,
  newUserTask,
}: NewTaskProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleNewTask(event);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newUserTask}
        />
        <button className={styles.addTask}>Criar</button>
      </form>
    </>
  );
}
