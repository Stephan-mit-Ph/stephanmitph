import * as React from 'react';
const SvgTextEditing = ({ title, titleId, ...props }) => (
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
			d="M9 9h6M12 15V9"
		/>
		<path
			stroke="currentColor"
			d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M6 20h12M18 4H6M20 18V6M4 6v12"
		/>
	</svg>
);
export default SvgTextEditing;
