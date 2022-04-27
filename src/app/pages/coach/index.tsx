import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {PersonSection} from '../../components/personSection';

export default function CoachesPage({coaches}) {
	return (
		<>
		<Head>
			<title>Fantasy League | Coaches</title>
		</Head>
		<PersonSection title="Coaches" people={coaches} />
		</>
	)
}
export const getStaticProps = async ({ params }) => {
	const coaches = await fetch('http://node-api:8080/coach')
		.then(res => res.json())
		.catch(err => {console.log(err); return []});
	return { props: { coaches } };
};