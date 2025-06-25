import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My to-do</h1>

          <span>Bem-vindo, Kevin</span>
        </div>

        <div>
          <StatsCard title="Total de tarefas" value={5} />
          <StatsCard title="Pendentes" value={3} />
          <StatsCard title="Concluídas" value={2} />
        </div>
      </div>
    </header>
  );
};
