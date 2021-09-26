import { Header } from '../components/Header';
import styles from '../styles/timeline.module.scss'

export default function Timeline() {
  return (
    <>
      <Header title="Timeline" />
      <main className={styles.container}>
        <h1>Posts</h1>
      </main>
    </>
  );
};

