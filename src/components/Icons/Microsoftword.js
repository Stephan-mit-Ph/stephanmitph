import * as React from 'react';
const SvgMicrosoftword = ({ title, titleId, ...props }) => (
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
			d="M23.337 1.5c.274 0 .508.098.703.293.196.195.293.43.293.703v19.008a.959.959 0 0 1-.293.703.959.959 0 0 1-.703.293H7.33a.959.959 0 0 1-.703-.293.959.959 0 0 1-.293-.703V18H1.33a.959.959 0 0 1-.703-.293.959.959 0 0 1-.293-.703V6.996a.96.96 0 0 1 .293-.703A.959.959 0 0 1 1.33 6h5.004V2.496a.96.96 0 0 1 .293-.703.959.959 0 0 1 .703-.293h16.008ZM6.368 11.203l1.442 4.735h1.64l1.57-7.876H9.37l-.938 4.653-1.325-4.5H5.713l-1.406 4.523-.938-4.675H1.645l1.57 7.874h1.641l1.512-4.734ZM22.833 21v-3h-15v3h15Zm0-4.5v-3.75h-10.5v3.75h10.5Zm0-5.25V7.5h-10.5v3.75h10.5Zm0-5.25V3h-15v3h15Z"
		/>
	</svg>
);
export default SvgMicrosoftword;
