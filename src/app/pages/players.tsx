import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PersonCard from '../components/personCard';


interface PersonData {
  imgUrl?: string,
  name: string,
  shortDesc: string
};

function createPlayers(num: number) {
  let p: PersonData[] = [];
  for (let i = 0; i < num; i++) {
    p.push({name: `Player #${i+1}`, shortDesc: ''.padStart((i)*6+5,'Goal ')});
  }
  return p;
}

let players: PersonData[] = createPlayers(20);

export default function Home() {
  return (
    <>
      <h1>Players</h1>
      <section style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
      {players.map(p => <PersonCard name={p.name} shortDesc={p.shortDesc} />)}
      </section>
    </>
  )
}
