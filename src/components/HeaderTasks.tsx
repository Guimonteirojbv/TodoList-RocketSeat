import styles from "./HeaderTasks.module.css";

export interface TaskType {
  id: number;
  content: string;
  active: boolean;
}

export interface TaskProps {
  task: TaskType[];
}
export function HeaderTasks({ task }: TaskProps) {
  const completedTasks = task.filter((t) => t.active === false).length;

  return (
    <header
      className={
        task.length == 0 ? styles.headerTask : styles.headerTaskWithoutBorder
      }
    >
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <p className={styles.count}>{task.length}</p>
      </div>

      <div className={styles.finishedTasks}>
        <p>concluidas</p>
        <p className={styles.count}>
          {task.length > 0
            ? `${completedTasks} de ${task.length}`
            : task.length}
        </p>
      </div>
    </header>
  );
}
