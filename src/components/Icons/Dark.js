import * as React from 'react';
const SvgDark = ({ title, titleId, ...props }) => (
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
			d="M9.713 2.047a.5.5 0 0 1 .124.498A9.31 9.31 0 0 0 9.44 5.25a9.31 9.31 0 0 0 9.31 9.31c.942 0 1.85-.14 2.706-.399a.5.5 0 0 1 .623.624c-1.283 4.233-5.215 7.315-9.868 7.315-5.694 0-10.31-4.616-10.31-10.31 0-4.653 3.082-8.585 7.314-9.868a.5.5 0 0 1 .499.125Zm-1.068 1.14A9.313 9.313 0 0 0 12.21 21.1a9.313 9.313 0 0 0 8.604-5.746c-.668.135-1.358.207-2.065.207-5.694 0-10.31-4.616-10.31-10.31 0-.707.07-1.397.206-2.065Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgDark;
