import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from './header';
import Footer from './footer';
import styles from '../styles/Home.module.css';

const urls = [
	{name: 'Home', href: '/'},
	{name: 'Players', href: '/players'},
	{name: 'Coaches', href: '/coaches'},
	{name: 'News', href: '/news'}
]

export default function Layout({children}) {
  return (<>
	<Header />
    <main className={styles.main}>{children}</main>
	<Footer />
  </>);
}
