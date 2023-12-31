import * as React from 'react';
const SvgWordpress = ({ title, titleId, ...props }) => (
	<svg
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 25 24"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath="url(#wordpress_svg__a)">
			<path
				fill="currentColor"
				d="M21.802 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.98.105c.646-.03 1.231-.105 1.231-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.66.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.687 6.9c.65-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015 1.952-2.877 5.276-4.812 9.041-4.812a10.74 10.74 0 0 1 7.286 2.833c-.046-.003-.09-.009-.14-.009-1.06 0-1.813.923-1.813 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.82 3.479l-1.076 3.585-3.9-11.61.001.014Zm-1.489 15.855c-1.059 0-2.08-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.544 12c0-1.564.336-3.05.935-4.39l5.144 14.099A10.794 10.794 0 0 1 1.544 12Zm10.79-12c-6.616 0-12 5.385-12 12s5.384 12 12 12c6.614 0 12-5.385 12-12s-5.386-12-12-12Z"
			/>
		</g>
		<defs>
			<clipPath id="wordpress_svg__a">
				<path
					fill="#fff"
					d="M.333 0h24v24h-24z"
				/>
			</clipPath>
		</defs>
	</svg>
);
export default SvgWordpress;
