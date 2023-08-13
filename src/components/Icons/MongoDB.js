import * as React from 'react';
const SvgMongodb = ({ title, titleId, ...props }) => (
	<svg
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 25 24"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}

		<path
			fill="currentColor"
			d="M17.86 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05c.128.952.238 1.906.33 2.862h.48a28.48 28.48 0 0 1 .51-3.07c.418-.296.605-.463.85-.693a11.343 11.343 0 0 0 3.64-8.464c.01-.814-.103-1.662-.197-2.218Zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405Z"
		/>
	</svg>
);
export default SvgMongodb;
