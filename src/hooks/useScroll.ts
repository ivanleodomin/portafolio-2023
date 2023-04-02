export default function useScroll(id: string) {
	const element = document.getElementById(id);

	const offset = 80;

	if (element) {
		const elementPosition =
			element.getBoundingClientRect().top + window.pageYOffset - offset;
		window.scrollTo({top: elementPosition, behavior: 'smooth'});
	}
}
