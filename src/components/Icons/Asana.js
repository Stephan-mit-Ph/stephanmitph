import * as React from 'react';
const SvgAsana = ({ title, titleId, ...props }) => (
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
			d="M19.113 12.653a5.22 5.22 0 1 0 0 10.44 5.22 5.22 0 0 0 0-10.44Zm-13.56 0a5.22 5.22 0 1 0 .001 10.439 5.22 5.22 0 0 0 0-10.439Zm12-6.525a5.22 5.22 0 1 1-10.44 0 5.22 5.22 0 0 1 10.44 0Z"
		/>
	</svg>
);
export default SvgAsana;
