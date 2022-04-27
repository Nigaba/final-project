import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/components/post.module.css';

export interface PostData {
	ID: number,
	imageUrl?: string,
	Title: string,
	Body: string
};

interface PostProps {
	post: PostData
}

export default function Post({post}: PostProps) {
  return (
  <article className={styles.post}>
	{post.imageUrl ? 
	  <Image src={post.imageUrl}></Image>
	 : <div></div>}
	<div>
		<h3 className={styles.title}>{post.Title}</h3>
		<p className={styles.desc}>{post.Body.substring(0, 128)} ...<br/><Link href={`posts/[pid]`} as={`posts/${post.ID}`}>Read More</Link></p>
	</div>
  </article>);
}
