/* eslint-disable react-hooks/rules-of-hooks */
import styles from './styles.module.css';
import useScroll from '@/hooks/useScroll';
import MenuIcon from '../MenuIcon';
import useToggle from '@/hooks/useToggle';
import Logo from '../Logo';

export default function Navbar() {
	const [value, toggleActive] = useToggle(false);

	return (
		<>
			<header className={styles.header}>
				<MenuIcon value={value} toggleActive={toggleActive} />
				<Logo />
			</header>
			<nav className={styles.menu} id={value ? styles.visibility : ''}>
				<div
					className={styles.shadow}
					onClick={() => toggleActive()}
				></div>
				<div className={styles.sidebar}>
					<ul>
						<li onClick={() => useScroll('presentation')}>
							Inicio
						</li>
						<li onClick={() => useScroll('skills')}>habilidades</li>
						<li onClick={() => useScroll('experience')}>
							Expreriencia
						</li>
						<li onClick={() => useScroll('about')}>Sobre mí</li>
						<li onClick={() => useScroll('projects')}>Proyectos</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
