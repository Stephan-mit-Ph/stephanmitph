import * as React from 'react';
const SvgWine = ({ title, titleId, ...props }) => (
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
			fill="currentColor"
			d="M12.5 15.286a.5.5 0 0 0-1 0h1Zm3.25 6.214a.5.5 0 1 0 0-1v1Zm-7.5-1a.5.5 0 0 0 0 1v-1Zm3.25-5.214V21h1v-5.714h-1Zm4.25 5.214H12v1h3.75v-1Zm-3.75 0H8.25v1H12v-1Zm-5.105-17h10.21v-1H6.895v1ZM18.5 4.895V8h1V4.895h-1ZM5.5 8V4.895h-1V8h1Zm6.5 6.5A6.5 6.5 0 0 1 5.5 8h-1a7.5 7.5 0 0 0 7.5 7.5v-1ZM18.5 8a6.5 6.5 0 0 1-6.5 6.5v1A7.5 7.5 0 0 0 19.5 8h-1Zm-1.395-4.5c.77 0 1.395.624 1.395 1.395h1A2.395 2.395 0 0 0 17.105 2.5v1Zm-10.21-1A2.395 2.395 0 0 0 4.5 4.895h1c0-.77.624-1.395 1.395-1.395v-1Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M5.5 9S7.581 8.088 9 8c2.465-.151 3.535 2.152 6 2 1.419-.087 3.5-1 3.5-1"
		/>
	</svg>
);
export default SvgWine;
