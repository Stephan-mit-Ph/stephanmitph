import { useState, useEffect } from 'react';

const useActiveSection = (sections) => {
	const [activeSection, setActiveSection] = useState();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.5,
				root: document.getElementById('main'),
				rootMargin: '0px',
				margin: '100px',
			}
		);

		sections.forEach((section) => {
			observer.observe(document.querySelector(`#${section.id}`));
			section.subsections &&
				section.subsections.forEach((subsection) => {
					observer.observe(document.querySelector(`#${subsection.id}`));
				});
		});

		return () => {
			sections.forEach((section) => {
				const element = document.querySelector(`#${section.id}`);
				if (observer && element) {
					observer.unobserve(element);
				}
				section.subsections &&
					section.subsections.forEach((subsection) => {
						const subelement = document.querySelector(`#${subsection.id}`);
						if (observer && subelement) {
							observer.unobserve(subelement);
						}
					});
			});

			observer.disconnect();
		};
	}, [sections]);

	return activeSection;
};

export default useActiveSection;
