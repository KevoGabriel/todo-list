import styles from "./styles.module.scss";

interface StatsCardProps {
  title: string;
  value: number;
}

export function StatsCard(props: StatsCardProps) {
  return (
    <article className={styles.stats_card}>
      <h2>{props.title}</h2>
      <span>{props.value}</span>
    </article>
  );
}
