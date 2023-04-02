import Image from 'next/image';
import style from './styles.module.css';

export default function Logo() {
	return (
		<Image
			id={style.logo}
			src='/logo.png'
			alt='logo'
			height={40}
			width={40}
		/>
	);
}
