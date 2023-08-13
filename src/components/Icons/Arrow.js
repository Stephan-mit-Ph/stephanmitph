import * as React from 'react';
const SvgArrow = ({ title, titleId, ...props }) => (
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
			strokeLinejoin="round"
			strokeWidth={1}
			d="m2.928 20.909 17.98-17.981m0 0H5.425m15.483 0V18.41"
		/>
	</svg>
);
export default SvgArrow;
