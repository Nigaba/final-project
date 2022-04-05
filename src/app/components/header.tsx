import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const urls = [
	{name: 'Home', href: '/'},
	{name: 'Players', href: '/players'},
	{name: 'Coaches', href: '/coaches'},
	{name: 'News', href: '/news'}
]

export default function Header() {
  return (
	<header>
		<nav style={{display: 'flex', justifyContent:'space-around'}}>{ urls.map(url => (<Link href={url.href}>{url.name}</Link>)) }</nav>
	</header>
  )
}
