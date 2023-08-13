import * as React from 'react';
const SvgOpen = ({ title, titleId, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		aria-labelledby={titleId}
		aria-hidden="true"
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M1.9 4.8a.5.5 0 0 1 .5-.5h19.2a.5.5 0 0 1 0 1H2.4a.5.5 0 0 1-.5-.5ZM8.5 12a.5.5 0 0 1 .5-.5h12.6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Zm-6.6 7.2a.5.5 0 0 1 .5-.5h19.2a.5.5 0 0 1 0 1H2.4a.5.5 0 0 1-.5-.5Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgOpen;
