import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {PersonSection} from '../../components/personSection';

export default function PlayersPage({players}) {
	return (
		<>
		<Head>
			<title>Fantasy League | Players</title>
		</Head>
		<PersonSection title="Players" people={players} />
		</>
	)
}
export const getStaticProps = async ({ params }) => {
	const players = await fetch('http://node-api:8080/player')
		.then(res => res.json())
		.catch(err => {console.log(err); return []});
	return { props: { players } };
};