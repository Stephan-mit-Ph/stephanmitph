import * as React from 'react';
const SvgElementor = ({ title, titleId, ...props }) => (
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
			d="M12.333 0c-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12s12-5.372 12-12c0-6.626-5.372-12-12-12Zm-3 17h-2V7h2v10Zm8 0h-6v-2h6v2Zm0-4h-6v-2h6v2Zm0-4h-6V7h6v2Z"
		/>
	</svg>
);
export default SvgElementor;
