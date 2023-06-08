import React, { ChangeEvent, FormEvent } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import styles from "./App.module.css";
import "./global.css";
import { Tasks, TaskType } from "./components/Tasks";
import { HeaderTasks } from "./components/HeaderTasks";

function App() {
  const [allTasks, setAllTasks] = React.useState<TaskType[]>([
    { id: 1, content: "Estudos React", active: true },
    { id: 2, content: "Projetos de estudo", active: true },
    { id: 3, content: "Um pouco de lazer", active: true },
    { id: 4, content: "Eventos RocketSeat", active: true },
  ]);
  const [newUserTask, setNewUserTask] = React.useState<string>("");

  function handleNewTask() {
    const newArray = allTasks.map((task) => task.id);
    let bestNumber = 0;
    for (let i = 0; i < newArray.length; i++) {
      bestNumber = bestNumber > newArray[i] ? bestNumber : newArray[i];
    }

    if (newUserTask) {
      const newTaskforUser = {
        id: bestNumber + 1,
        content: newUserTask,
        active: true,
      };
      setAllTasks([...allTasks, newTaskforUser]);
      setNewUserTask("");
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewUserTask(event.target.value);
  }

  function handleDeleteTask(id: number) {
    const newAllTasks = allTasks.filter((task) => task.id !== id);
    setAllTasks(newAllTasks);
  }

  function handleChekTask(id: number) {
    setAllTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, active: !task.active };
        }
        return task;
      });
    });
  }

  return (
    <>
      <Header />
      <div className={styles.containerApp}>
        <NewTask
          handleNewTask={handleNewTask}
          handleNewTaskChange={handleNewTaskChange}
          newUserTask={newUserTask}
        />
        <HeaderTasks task={allTasks} />
        <main>
          {allTasks.map((task) => {
            return (
              <Tasks
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleChekTask={handleChekTask}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
