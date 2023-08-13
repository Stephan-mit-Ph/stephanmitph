import * as React from 'react';
const SvgTags = ({ title, titleId, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="m16 11 1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973 0 .89-.771 1.585-2.314 2.973L16 20M13.987 5l-1.994 7.5L10 20M8 4.83 6.304 6.357C4.76 7.745 3.99 8.439 3.99 9.33c0 .89.771 1.585 2.314 2.973L8 13.83"
		/>
	</svg>
);
export default SvgTags;
