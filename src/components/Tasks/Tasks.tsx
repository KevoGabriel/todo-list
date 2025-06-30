import styles from "./styles.module.scss";
import { FormEvent, useState, useEffect } from "react";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export function Tasks() {
  const [taskTitle, setTaskTitle] = useState("");
  const [task, setTask] = useState([] as Task[]);
  useEffect(() => {
    const myTasks = localStorage.getItem("taskkey");

    if (myTasks) {
      setTask(JSON.parse(myTasks));
    }
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert(
        "É um título muito pequeno! Tente de novo, com mais de 3 caracteres."
      );
      return;
    }

    //Para combater o atraso do setTask
    const newTasks = [
      ...task,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];

    setTask(newTasks);
    localStorage.setItem("taskkey", JSON.stringify(newTasks));
    //Limpa o placeholder
    setTaskTitle("");
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task-title">Adicionar tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Insira sua tarefa"
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {task.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
