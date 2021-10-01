import Image from 'next/image'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header';

import styles from './styles.module.scss'

interface Post {
  title: string;
  author: string;
  imageUrl: string;
  article: string;
  date: Date;
}

export default function NewPost() {
  const { register, handleSubmit, reset } = useForm();

  const router = useRouter();

  async function handleSubmitFormContact(post: Post) {
    try {
      const postFormated = {
        title: post.title,
        author: post.author,
        imageUrl: post.imageUrl,
        article: "<p>" + post.article + "</p>",
        date: new Date()
      }
      reset();
      router.push('/')
    } catch {
      alert("error");
    }
  }

  return (
    <>
      <Header title="New Post" />
      <div className={styles.container}>
        <form onSubmit={handleSubmit(handleSubmitFormContact)} className={styles.container}>
          <Image
            width={240}
            height={240}
            src="https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Photo Post"
            objectFit="cover"
          />
          <h2>New Post</h2>
          <label>Title</label>
          <input
            type="text"
            placeholder="Fill the title"
            {...register('title')}
          />
          <label>Author</label>
          <input
            type="text"
            placeholder="Fill the author name"
            {...register('author')}
          />
          <label>Image URL</label>
          <input
            type="url"
            placeholder="Fill the image URL"
            {...register('imageUrl')}
          />
          <label>Post</label>
          <textarea
            placeholder="Post..."
            {...register('article')}
          />

          <div className={styles.submit}>
            <button type="submit">
              <img src="/images/create.svg" alt="Send contact message" />
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  )
}