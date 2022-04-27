import Head from 'next/head';

import Post from '../../components/post';
import styles from '../../styles/Home.module.css';

// function createPosts(numPosts: number) {
//   let p: PostData[] = [];
//   for (let i = 0; i < numPosts; i++) {
// 	p.push({title: `Post #${i+1}`, shortDesc: ''.padStart((i)*6+5,'Hello ')});
//   }
//   return p;
// }

// let posts: PostData[] = createPosts(20);

export default function NewsPage({ posts }) {
  return (
	<div className={styles.container}>
	  <h1>News</h1>
	  <section style={{display: 'flex', justifyContent: 'space-evenly', flexFlow: 'column'}}>
		{posts.map(p => <Post post={p} />)}
	  </section>
	</div>
  )
}

export const getStaticProps = async ({ params }) => {
	const posts = await fetch('http://node-api:8080/post')
		.then(res => res.json())
		.catch(err => {console.log(err); return []});
	return { props: { posts } };
};