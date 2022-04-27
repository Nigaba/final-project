import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function CoachPage({coachBio, coachStats}) {
	return (
		<>
		<Head>
			<title>Fantasy League</title>
		</Head>
		<img src={`/images/person/${coachBio.ImageFile}`} />
		<section>
			<p>{`${coachBio.Name}`}</p>
			<p>{`${coachBio.Height} inches`}</p>
			<p>{`${coachBio.Weight} pounds`}</p>
			<table>
				<thead>
					<tr>
					<th>Wins</th>
					<th>Losses</th>
					<th>Ties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td>{coachStats.Wins}</td>
					<td>{coachStats.Losses}</td>
					<td>{coachStats.Ties}</td>
					</tr>
				</tbody>
			</table>
		</section>
		<section>
			<h3>About {coachBio.Name}</h3>
			<p>{coachBio.Desc}</p>
		</section>
		</>
	)
}
export const getServerSideProps = async ({ query }) => {
	const { pid } = query;
	const coachBio = (await fetch(`http://node-api:8080/coach/${pid}`)
		.then(res => res.json())
		.catch(err => {console.log(err); return []}))[0];
	const coachStats = (await fetch(`http://node-api:8080/coach/${pid}/stats`)
		.then(res => res.json())
		.catch(err => {console.log(err); return [{Name: ""}]}))[0];
	return { props: { coachBio, coachStats } };
};