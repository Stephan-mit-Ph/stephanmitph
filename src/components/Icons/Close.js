import * as React from 'react';
const SvgClose = ({ title, titleId, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		aria-labelledby={titleId}
		aria-hidden='true'
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M4.646 4.646a.5.5 0 0 1 .708 0L12 11.293l6.646-6.647a.5.5 0 0 1 .708.708L12.707 12l6.647 6.646a.5.5 0 0 1-.708.708L12 12.707l-6.646 6.647a.5.5 0 0 1-.708-.708L11.293 12 4.646 5.354a.5.5 0 0 1 0-.708Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgClose;
