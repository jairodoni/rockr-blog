import Image from 'next/image'
import Link from "next/link";

import styles from './styles.module.scss';

interface Post {
  id: string;
  author: string;
  title: string;
  article: string;
  imageUrl: string;
}

interface CardPostProps {
  post: Post;
}

export function CardPost({ post }: CardPostProps) {
  return (
    <Link href={`/post/${post.id}`}>
      <a className={styles.card}>
        <Image
          width={200}
          height={200}
          src={post.imageUrl}
          alt="Post Image"
          objectFit="cover"
        />

        <div className={styles.info}>
          <span>{post.author}</span>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.article }} />
          <div className={styles.icon}>
            <img src="/images/arrow.svg" alt="arrow" />
          </div>
        </div>
      </a>
    </Link>
  );
}