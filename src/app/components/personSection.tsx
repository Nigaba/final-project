import Link from 'next/link';
import styles from '../styles/components/personSection.module.css';

export interface Person {
	ID: number,
	Name: string,
	Desc?: string,
	ImageFile?: string,
	Role: string
}

interface Props {
	title: string;
	people: Person[];
}

export function PersonSection({title, people}: Props) {
	console.table(people);
	return (
		<section>
			<h1>{title}</h1>
			<div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
			{people.map(p => <PersonCard key={p.ID} person={p} />)}
			</div>
		</section>
	);
}

// PersonCard ---------------
interface CardProps {
	person: Person;
}
const PersonCard = ({person}: CardProps) => (
	<article className={styles.personCard}>
		<img className={styles.img} src={`/images/person/${person?.ImageFile ?? 'no-img.png'}`}/>
		<h3 className={styles.name}>{person.Name.toString()}</h3>
		<p className={styles.desc}>{`${person.Desc??''}`}<br/><Link href={`${person.Role.toLowerCase()}/[pid]`} as={`${person.Role.toLowerCase()}/${person.ID}`}>Read More</Link></p>
  	</article>
);
