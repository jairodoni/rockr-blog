import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

import styles from './styles.module.scss';

interface Post {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  article: string;
  date: Date;
}

interface PostProps {
  post: Post;

}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header title={post.title} />
      <section className={styles.article}>
        <div className={styles.content}>
          <img src={post.imageUrl} alt="Image Post" />
          <div>
            <time>{post.date}</time>
            <span>{post.author}</span>
            <h2>{post.title}</h2>
          </div>
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.article }} />
      </section>
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await api.get('/articles')

  const paths = posts.data.map((post: Post) => ({
    params: {
      slug: post.id
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;

  const { data } = await api.get(`/articles/${slug}`);

  const post = {
    id: data.id,
    title: data.title,
    author: data.author,
    imageUrl: data.imageUrl,
    article: data.article,
    date: new Date(data.date).toLocaleDateString("en-US", {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};