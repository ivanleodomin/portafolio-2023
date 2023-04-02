import Link from 'next/link';
import styles from './styles.module.css';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import {useState} from 'react';
import {toast} from 'react-hot-toast';

export default function Footer() {
	const [_, handleCopy] = useCopyToClipboard();

	const [msg, setMsg] = useState('');

	const handleSubmit = (event: any): void => {
		event.preventDefault();
		toast.success('mesaje enviado, gracias!');
	};

	return (
		<footer className={styles.footer}>
			<div>
				<h3>Gracias por llegar hasta acá!</h3>
				<div className={styles.links}>
					<Link
						href={
							'https://www.linkedin.com/in/ivan-leonel-dominguez/'
						}
					>
						<AiFillLinkedin size={30} />
					</Link>
					<span
						onClick={() => handleCopy('ivanleodomin00@gmail.com')}
					>
						<SiGmail size={30} />
					</span>
					<Link href={'https://github.com/ivanleodomin/'}>
						<AiFillGithub size={30} />
					</Link>
				</div>
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label htmlFor=''>Ves alguna mejora?</label>
				<input
					type='text'
					value={msg}
					onChange={e => setMsg(e.target.value)}
				/>
				<button type='submit'>Enviar</button>
			</form>
		</footer>
	);
}
