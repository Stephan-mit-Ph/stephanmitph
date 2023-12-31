import * as React from 'react';
const SvgPinterest = ({ title, titleId, ...props }) => (
	<svg
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 25 24"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath="url(#pinterest_svg__a)">
			<path
				fill="currentColor"
				d="M12.684 0C6.063 0 .696 5.367.696 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.403.04-3.439.22-.937 1.407-5.957 1.407-5.957s-.36-.72-.36-1.781c0-1.663.968-2.911 2.169-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.41 2.562-5.41 5.199 0 1.033.395 2.143.89 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.75 2.848c-.268 1.045-1.003 2.352-1.497 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C24.637 5.39 19.259.026 12.652.026L12.684 0Z"
			/>
		</g>
		<defs>
			<clipPath id="pinterest_svg__a">
				<path
					fill="#fff"
					d="M.667 0h24v24h-24z"
				/>
			</clipPath>
		</defs>
	</svg>
);
export default SvgPinterest;
