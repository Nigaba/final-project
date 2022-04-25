import Head from 'next/head'
import Image from 'next/image'
import {PersonSection} from '../components/personSection';
import styles from '../styles/pages/coaches.module.css';


export default function Coaches({coaches}) {
  return (
	<>
	<Head>
		<title>Fantasy League | Coaches</title>
		<meta name="description" content="Generated by create next app" />
		<link rel="icon" href="/favicon.ico" />
	</Head>
	<PersonSection title="Coaches" people={coaches} />
	</>
  )
}
export const getStaticProps = async ({ params }) => {
	const coaches = await fetch('http://node-api:8080/coaches')
		.then(res => res.json())
		.catch(err => {console.log(err); return []});
	return { props: { coaches } };
};