import Image from 'next/image'
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header';

import styles from './styles.module.scss'
interface Post {
  title: string;
  author: string;
  imageUrl: string;
  article: string;
}
const signInFormSchema = yup.object().shape({
  title: yup.string().required('*Title required').max(200, "*You reached the maximum number of characters"),
  author: yup.string().required('*Author required').max(100, "*You reached the maximum number of characters"),
  imageUrl: yup.string().required('*Image required').url("*Put an image in url format"),
  article: yup.string().required('*Image required'),
})

export default function NewPost() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
    resolver: yupResolver(signInFormSchema)
  });

  const router = useRouter();

  async function handleSubmitNewPost(post: Post) {
    try {
      const postFormated = {
        title: post.title,
        author: post.author,
        imageUrl: post.imageUrl,
        article: "<p>" + post.article + "</p>",
        date: new Date()
      }
      console.log(postFormated);
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
        <form onSubmit={handleSubmit(handleSubmitNewPost)} className={styles.container}>
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
            className={`${errors?.title?.message ? styles.validate : ''}`}
            {...register('title')}
          />
          {!!errors.title && (
            <span>{errors.title.message}</span>
          )}

          <label>Author</label>
          <input
            type="text"
            placeholder="Fill the author name"
            className={`${errors?.author?.message ? styles.validate : ''}`}
            {...register('author')}
          />
          {!!errors.author && (
            <span>{errors.author.message}</span>
          )}

          <label>Image URL</label>
          <input
            type="url"
            placeholder="Fill the image URL"
            className={`${errors?.imageUrl?.message ? styles.validate : ''}`}
            {...register('imageUrl')}
          />
          {!!errors.imageUrl && (
            <span>{errors.imageUrl.message}</span>
          )}

          <label>Post</label>
          <textarea
            placeholder="Post..."
            className={`${errors?.article?.message ? styles.validate : ''}`}
            {...register('article')}
          />
          {!!errors.article && (
            <span>{errors.article.message}</span>
          )}

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