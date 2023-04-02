import styles from './styles.module.css';
import TwitterPicture from '../TwitterPicture';
import Link from 'next/link';
import Image from 'next/image';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

export default function Presentation() {
	const lang = 'es';
	const [_, handleCopy] = useCopyToClipboard();

	return (
		<section id='presentation' className={styles.presentation}>
			<TwitterPicture />
			<div className={styles.titles}>
				<h3>¡Hola! Bienvenido a mi portafolio</h3>
				<p>
					Un amante del desarrollo y la tecnologia, con hambre de
					conocimiento y con deseo de crecer.
				</p>
			</div>

			<div className={styles.buttons}>
				<div
					onClick={() => handleCopy('ivanleodomin00@gmail.com')}
					className={styles.contactButton}
				>
					Vamos a reunirnos!
				</div>
				<Link
					href={`/api/profile/${lang}`}
					className={styles.resumeButton}
				>
					Descargar curriculum
					<Image
						className={styles.profileImage}
						src='/icons/resume.png'
						alt='resume icon'
						width={30}
						height={30}
					/>
				</Link>
			</div>
		</section>
	);
}
