import * as React from 'react';
const SvgGoogleads = ({ title, titleId, ...props }) => (
	<svg
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="currentColor"
			d="M4 22.929a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm19.464-6-8-13.857a4 4 0 0 0-6.93 4l8.001 13.856a4.001 4.001 0 0 0 6.93-4ZM7.514 4.844l-5.95 10.304A4.5 4.5 0 0 1 4 14.43c2.56-.008 4.625 2.158 4.494 4.714l3.217-5.572-3.61-6.25a4.463 4.463 0 0 1-.587-2.478Z"
		/>
	</svg>
);
export default SvgGoogleads;
