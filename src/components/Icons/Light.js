import * as React from 'react';
const SvgLight = ({ title, titleId, ...props }) => (
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
			d="M12 1.9a.5.5 0 0 1 .5.5v3.113a.5.5 0 0 1-1 0V2.4a.5.5 0 0 1 .5-.5ZM4.858 4.858a.5.5 0 0 1 .707 0L7.766 7.06a.5.5 0 0 1-.707.707L4.858 5.565a.5.5 0 0 1 0-.707Zm14.284 0a.5.5 0 0 1 0 .707l-2.201 2.202a.5.5 0 1 1-.708-.707l2.202-2.202a.5.5 0 0 1 .707 0ZM11.97 8.773a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm-4.1 3.1a4.1 4.1 0 1 1 8.2 0 4.1 4.1 0 0 1-8.2 0ZM1.9 12a.5.5 0 0 1 .5-.5h3.114a.5.5 0 0 1 0 1H2.4a.5.5 0 0 1-.5-.5Zm16.087 0a.5.5 0 0 1 .5-.5H21.6a.5.5 0 0 1 0 1h-3.114a.5.5 0 0 1-.5-.5Zm-1.754 4.233a.5.5 0 0 1 .707 0l2.202 2.201a.5.5 0 0 1-.707.707l-2.202-2.201a.5.5 0 0 1 0-.707Zm-8.467 0a.5.5 0 0 1 0 .707l-2.201 2.202a.5.5 0 1 1-.707-.707l2.201-2.202a.5.5 0 0 1 .707 0ZM12 17.986a.5.5 0 0 1 .5.5V21.6a.5.5 0 0 1-1 0v-3.114a.5.5 0 0 1 .5-.5Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgLight;
