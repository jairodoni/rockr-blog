import { GetServerSideProps } from 'next';
import { Header } from '../components/Header';
import { api } from '../services/api';

import styles from '../styles/timeline.module.scss';
interface Post {
  author: string;
  title: string;
  article: string;
}

interface TimelineProsp {
  posts: Post[];
}

export default function Timeline({ posts }: TimelineProsp) {
  return (
    <>
      <Header title="Timeline" />
      <main className={styles.container}>
        <h1>Posts</h1>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/articles");

  const posts = response.data;

  return {
    props: {
      posts
    }
  }
}