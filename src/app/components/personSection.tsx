import styles from '../styles/components/personSection.module.css';

export interface Person {
	ID: number,
	FirstName: string,
	LastName: string,
	Desc?: string,
	ImageFile?: string
}

interface Props {
	title: string;
	people: Person[];
}

export function PersonSection({title, people}: Props) {
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
		<img className={styles.img} src={`/images/person/${person?.ImageFile ? person.ImageFile : 'no-img.png'}`}/>
		<h3 className={styles.name}>{`${person.FirstName} ${person.LastName}`}</h3>
		<p className={styles.desc}>{person.Desc}</p>
  	</article>
);
