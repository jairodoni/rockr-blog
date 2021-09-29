import { useEffect, useState } from 'react';
import { CardPost } from '../components/CardPost';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
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

export default function Timeline() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [limitPosts, setLimitPosts] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  //Function for get posts
  async function listPosts() {
    setLoading(true);
    const { data, headers } = await api.get(`/articles?_page=${page}&_limit=${limitPosts}`)

    setTotalPage(headers['x-total-count'] / limitPosts);
    setPosts([...posts, ...data]);
    setLoading(false);
  }

  useEffect(() => {
    listPosts()
  }, [page]);

  //Calculation for loading pages
  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight ||
      page === totalPage ||
      loading
    ) {
      return;
    }
    setPage(page + 1);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <Header title="Timeline" />
      <main className={styles.container}>
        <section className={styles.timeline} >
          {posts.map(post => (
            <CardPost key={post.id} post={post} />
          ))}
        </section>
        {loading && page > 1 && (
          <Loading />
        )}
      </main>
    </>
  );
};
