import * as React from 'react';
const SvgFramer = ({ title, titleId, ...props }) => (
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
			d="M4 0h16v8h-8L4 0Zm0 8h8l8 8H4V8Zm0 8h8v8l-8-8Z"
		/>
	</svg>
);
export default SvgFramer;
