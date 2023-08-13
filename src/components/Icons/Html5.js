import * as React from 'react';
const SvgHtml5 = ({ title, titleId, ...props }) => (
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
			d="M1.833 0h21l-1.91 21.563L12.31 24l-8.564-2.438L1.833 0Zm7.031 9.75-.232-2.718 10.06.003.23-2.622L5.744 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.581l.33 4.171 5.422 1.45 5.38-1.443.743-8.157H8.864V9.75Z"
		/>
	</svg>
);
export default SvgHtml5;
