import * as React from 'react';
const SvgGoogleanalytics = ({ title, titleId, ...props }) => (
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
			d="M22.84 2.998v17.999a2.983 2.983 0 0 1-3.335 2.978 3.06 3.06 0 0 1-2.61-3.1V3.12A3.06 3.06 0 0 1 19.51.02a2.983 2.983 0 0 1 3.329 2.977ZM4.133 18.055a2.973 2.973 0 1 0 0 5.945 2.973 2.973 0 0 0 0-5.945Zm7.872-9.01h-.05a3.06 3.06 0 0 0-2.892 3.126v7.985c0 2.167.954 3.482 2.35 3.763a2.978 2.978 0 0 0 3.57-2.927v-8.959a2.983 2.983 0 0 0-2.978-2.988Z"
		/>
	</svg>
);
export default SvgGoogleanalytics;
