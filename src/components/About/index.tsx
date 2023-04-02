import styles from './styles.module.css';

export default function About() {
	return (
		<section id='about'>
			<h3 className={styles.title}>About me</h3>
			<div className={styles.content}>
				<div className={styles.principalSection}>
					<p>
						Soy un apasionado por mi trabajo, pero también creo en
						la importancia de la empatía, la autocrítica y mejorar
						tanto en el código como en mi persona. Me enorgullezco
						de la calidad y el impacto de mi trabajo, pero siempre
						busco mejorar a través de la reflexión y el aprendizaje.
						Me considero una persona empática y abierta a diferentes
						perspectivas, lo que me permite trabajar de manera
						efectiva en equipo y comunicarse de manera efectiva con
						los clientes y el equipo de gestión. Además, tengo
						habilidades de liderazgo desarrolladas, lo que me
						permite tomar decisiones informadas y guiar a los
						miembros del equipo hacia la consecución de objetivos
						comunes. Siempre estoy buscando nuevos desafíos y
						oportunidades para crecer en mi carrera, y estoy
						entusiasmado por seguir desarrollando mi conjunto de
						habilidades tanto técnicas como interpersonales.
					</p>
				</div>
				<div className={styles.secondSection}>
					<h4>Que deseo aprender?</h4>
					<p>
						Deseo seguir aprendiendo sobre golang para llegar a un
						nivel de experticia más alto y mejorar más mi código en
						React. Aprender mas buenas prácticas para pulir al
						máximo mi código y así llegar a proyectos más escalables
						y confiables
					</p>
					<h4>Ademas del trabajo</h4>
					<p>
						Me gusta entrenar y hacer música… bueno, por lo menos
						intentarlo. Toco la guitarra y canto hace tiempo y es
						otro pilar importantísimo en mi vida
					</p>
				</div>
			</div>
		</section>
	);
}
