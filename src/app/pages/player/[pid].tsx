import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function PlayerPage({playerBio, playerStats}) {
	return (
		<>
		<Head>
			<title>Fantasy League</title>
		</Head>
		<img src={`/images/person/${playerBio.ImageFile}`} />
		<section>
			<p>{`${playerBio.Name}`}</p>
			<p>{`${playerBio.Height} inches`}</p>
			<p>{`${playerBio.Weight} pounds`}</p>
			<table>
				<thead>
					<tr>

					<th>Games Played</th>
					<th>Goals</th>
					<th>Assists</th>
					<th>Saves</th>
					<th>Fouls</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td>{playerStats.Games}</td>
					<td>{playerStats.Goals}</td>
					<td>{playerStats.Assists}</td>
					<td>{playerStats.Saves}</td>
					<td>{playerStats.Fouls}</td>
					</tr>
				</tbody>
			</table>
		</section>
		<section>
			<h3>About {playerBio.Name}</h3>
			<p>{playerBio.Desc}</p>
		</section>
		</>
	)
}
export const getServerSideProps = async ({ query }) => {
	const { pid } = query;

	const playerBio = (await fetch(`http://node-api:8080/player/${pid}`)
			.then(res => res.json())
			.catch(err => {console.log(err); return []}))[0];
	const playerStats = (await fetch(`http://node-api:8080/player/${pid}/stats`)
		.then(res => res.json())
		.catch(err => {console.log(err); return [{Name: ""}]}))[0];
	return { props: { playerBio, playerStats } };
};