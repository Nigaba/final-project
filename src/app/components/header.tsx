import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const urls = [
	{name: 'Home', href: '/'},
	{name: 'Players', href: '/player'},
	{name: 'Coaches', href: '/coach'},
	{name: 'News', href: '/posts'}
]

export default function Header() {
  return (
	<header>
		<nav style={{display: 'flex', justifyContent:'space-around'}}>{ urls.map((url,i) => (<Link key={i} href={url.href}>{url.name}</Link>)) }</nav>
	</header>
  )
}
