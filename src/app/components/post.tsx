import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/components/post.module.css';

export default function Post(props) {
  return (
  <article className={styles.post}>
	{props.imageUrl ? 
	  <Image src={props.imageUrl}></Image>
	 : <div></div>}
	<div>
		<h3 className={styles.title}>{props.title}</h3>
		<p className={styles.desc}>{props.shortDesc}</p>
	</div>
  </article>);
}
