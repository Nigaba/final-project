import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function PostPage({postInfo}) {
	return (
		<>
		<Head>
			<title>Fantasy League</title>
		</Head>
		<section>
			<h2>{`${postInfo.Title}`}</h2>
			<p>{`${postInfo.Body} inches`}</p>
		</section>
		</>
	)
}
export const getServerSideProps = async ({ query }) => {
	const { pid } = query;
	const postInfo = (await fetch(`http://node-api:8080/post/${pid}`)
		.then(res => res.json())
		.catch(err => {console.log(err); return []}))[0];
	return { props: { postInfo } };
};