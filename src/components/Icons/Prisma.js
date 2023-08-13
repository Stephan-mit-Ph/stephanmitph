import * as React from 'react';
const SvgPrisma = ({ title, titleId, ...props }) => (
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
			d="M21.807 18.285 13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.626l-8.952 14.5a1.356 1.356 0 0 0 .016 1.455l4.376 6.778a1.408 1.408 0 0 0 1.58.581l12.703-3.756a1.39 1.39 0 0 0 .873-.756 1.36 1.36 0 0 0-.007-1.145Zm-1.848.752L9.18 22.224a.452.452 0 0 1-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 0 1-.325.713Z"
		/>
	</svg>
);
export default SvgPrisma;
