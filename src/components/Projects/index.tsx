import Image from 'next/image';
import styles from './styles.module.css';
import {toast} from 'react-hot-toast';

type Project = {
	name: string;
	description: string;
	link: string;
	imageSrc: string;
};

type Props = {
	project: Project;
};

const PROJECTS_LIST: Project[] = [
	{
		name: 'ChatGPT integration!',
		description: 'Integración con chatgpt',
		link: 'https://github.com/',
		imageSrc: '/images/ChatGPT_logo.png',
	},
	{
		name: 'Microservices Schema!',
		description: 'Esquema de microservicios funcional',
		link: 'https://github.com/',
		imageSrc: '/images/game.png',
	},
	{
		name: 'Game!',
		description: 'Este es un game para jugar game fachero!',
		link: 'https://github.com/',
		imageSrc: '/images/ChatGPT_logo.png',
	},
];

export default function Projects() {
	return (
		<section id='projects'>
			<h1 className={styles.titles}>Proyectos</h1>
			{PROJECTS_LIST.map((project, key) => (
				<Project project={project} key={key} />
			))}
		</section>
	);
}

function Project({project}: Props) {
	const handleMsg = () => toast.error('El proyecto esta en desarrollo! 🏗️');
	return (
		<div className={styles.content}>
			<div className={styles.info}>
				<h3>{project.name}</h3>
				<p>{project.description}</p>
				{/* <Link href={project.link}>Conocer mas!</Link> */}
				<span onClick={handleMsg}>Conoce más!</span>
			</div>
			<Image
				className={styles.image}
				src={project.imageSrc}
				alt={'logo de proyecto'}
				height={100}
				width={100}
			/>
		</div>
	);
}
