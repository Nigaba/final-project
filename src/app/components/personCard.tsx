import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/components/personCard.module.css';

export default function PersonCard(props) {
  return (
  <article className={styles.personCard}>
	<img className={styles.img} />
	<h3 className={styles.name}>{props.name}</h3>
	<p className={styles.desc}>{props.shortDesc}</p>
  </article>);
}