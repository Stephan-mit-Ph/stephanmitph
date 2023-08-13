import * as React from 'react';
const SvgCodesandbox = ({ title, titleId, ...props }) => (
	<svg
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 25 24"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}

		<path
			fill="currentColor"
			d="M.667 24h24V0h-24v2.455h21.545v19.09H3.122V0H.666v24Z"
		/>
	</svg>
);
export default SvgCodesandbox;
