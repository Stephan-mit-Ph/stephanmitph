import * as React from 'react';
const SvgTailwindcss = ({ title, titleId, ...props }) => (
	<svg
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 25 24"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath="url(#tailwindcss_svg__a)">
			<path
				fill="currentColor"
				d="M12.668 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C14.333 10.618 15.694 12 18.668 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C17.004 6.182 15.643 4.8 12.668 4.8Zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C11.004 13.382 9.643 12 6.668 12Z"
			/>
		</g>
		<defs>
			<clipPath id="tailwindcss_svg__a">
				<path
					fill="#fff"
					d="M.667 0h24v24h-24z"
				/>
			</clipPath>
		</defs>
	</svg>
);
export default SvgTailwindcss;
