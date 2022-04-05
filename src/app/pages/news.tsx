import Head from 'next/head'
import Image from 'next/image'

import Post from '../components/post';
import styles from '../styles/Home.module.css';

interface PostData {
  imgUrl?: string,
  title: string,
  shortDesc: string
};

function createPosts(numPosts: number) {
  let p: PostData[] = [];
  for (let i = 0; i < numPosts; i++) {
    p.push({title: `Post #${i+1}`, shortDesc: ''.padStart((i)*6+5,'Hello ')});
  }
  return p;
}

let posts: PostData[] = createPosts(20);

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>News</h1>
      {/* Fetch new data */}
      <section style={{display: 'flex', justifyContent: 'space-evenly', flexFlow: 'column'}}>
        {posts.map(p => <Post title={p.title} shortDesc={p.shortDesc} />)}
      </section>
    </div>
  )
}
