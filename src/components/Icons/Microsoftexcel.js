import * as React from 'react';
const SvgMicrosoftexcel = ({ title, titleId, ...props }) => (
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
			d="M23.333 1.5c.274 0 .507.1.7.3.2.193.3.427.3.7v19c0 .273-.1.507-.3.7-.193.2-.426.3-.7.3h-16a.938.938 0 0 1-.7-.3.938.938 0 0 1-.3-.7V18h-5a.938.938 0 0 1-.7-.3.938.938 0 0 1-.3-.7V7c0-.273.1-.507.3-.7.187-.2.42-.3.7-.3h5V2.5c0-.273.1-.507.3-.7a.94.94 0 0 1 .7-.3h16Zm-17 11.78 1.42 2.66h2.14l-2.38-3.87 2.34-3.8h-2.06l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29h-2.18l2.27 3.82-2.48 3.85h2.16l1.46-2.66Zm8.25 7.72v-3h-6.75v3h6.75Zm0-4.5v-3.75h-2.25v3.75h2.25Zm0-5.25V7.5h-2.25v3.75h2.25Zm0-5.25V3h-6.75v3h6.75Zm8.25 15v-3h-6.75v3h6.75Zm0-4.5v-3.75h-6.75v3.75h6.75Zm0-5.25V7.5h-6.75v3.75h6.75Zm0-5.25V3h-6.75v3h6.75Z"
		/>
	</svg>
);
export default SvgMicrosoftexcel;
