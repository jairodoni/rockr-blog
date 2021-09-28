import { GetServerSideProps } from 'next';
import { CardPost } from '../components/CardPost';
import { Header } from '../components/Header';
import { api } from '../services/api';

import styles from '../styles/timeline.module.scss';
interface Post {
  id: string;
  author: string;
  title: string;
  article: string;
  imageUrl: string;
  date: Date;
}

interface TimelineProps {
  posts: Post[];
}

export default function Timeline({ posts }: TimelineProps) {
  return (
    <>
      <Header title="Timeline" />
      <main className={styles.container}>
        <section className={styles.timeline} >
          {posts.map(post => (
            <CardPost key={post.id} post={post} />
          ))}
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/articles");

  //Sort by Date
  const posts = response.data.sort((a: any, b: any) => {
    const date01: any = new Date(b.date);
    const date02: any = new Date(a.date);

    return date01 - date02;
  });

  return {
    props: {
      posts
    }
  }
}