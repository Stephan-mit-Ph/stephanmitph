import * as React from 'react';
const SvgWoocommerce = ({ title, titleId, ...props }) => (
	<svg
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath="url(#woocommerce_svg__a)">
			<path
				fill="currentColor"
				d="M.754 9.58a.754.754 0 0 0-.754.758v2.525c0 .42.339.758.758.758h3.135l1.431.8-.326-.8h2.373a.757.757 0 0 0 .758-.758v-2.525a.757.757 0 0 0-.758-.758H.754Zm2.709.445h.03a.286.286 0 0 1 .179.067.26.26 0 0 1 .103.19.29.29 0 0 1-.033.16c-.13.24-.236.64-.322 1.2-.083.54-.114.964-.094 1.266a.392.392 0 0 1-.039.22.213.213 0 0 1-.176.12c-.086.005-.177-.035-.263-.125-.31-.316-.555-.788-.735-1.416-.216.425-.375.744-.478.957-.196.376-.363.568-.502.578-.09.007-.166-.069-.233-.228-.17-.436-.352-1.277-.548-2.524a.297.297 0 0 1 .054-.222c.047-.064.116-.095.21-.102.169-.013.265.065.288.238.103.695.217 1.284.336 1.766l.727-1.387c.066-.126.15-.192.25-.199.146-.01.237.083.273.28.083.441.188.817.315 1.136.086-.844.233-1.453.44-1.828a.255.255 0 0 1 .218-.147Zm1.293.36a.84.84 0 0 1 .18.02c.232.05.411.177.53.386.107.18.161.395.161.654 0 .343-.087.654-.26.94-.2.332-.459.5-.781.5a.88.88 0 0 1-.18-.022.764.764 0 0 1-.531-.384 1.287 1.287 0 0 1-.158-.659c0-.342.085-.655.258-.937.202-.333.462-.498.78-.498h.001Zm2.084 0a.84.84 0 0 1 .18.02c.236.05.411.177.53.386.107.18.16.395.16.654 0 .343-.086.654-.259.94-.2.332-.459.5-.781.5a.88.88 0 0 1-.18-.022.764.764 0 0 1-.531-.384 1.287 1.287 0 0 1-.16-.659c0-.342.087-.655.26-.937.202-.333.462-.498.78-.498h.001Zm4.437.047c-.305 0-.546.102-.718.304-.173.203-.256.49-.256.856 0 .395.086.697.256.906.17.21.418.316.744.316.315 0 .559-.107.728-.316.17-.21.256-.504.256-.883s-.087-.673-.26-.879c-.176-.202-.424-.304-.75-.304Zm-1.466.002a1.13 1.13 0 0 0-.84.326c-.223.22-.332.5-.332.838 0 .362.108.658.328.88.22.223.505.336.861.336.103 0 .22-.016.346-.052v-.54a1.1 1.1 0 0 1-.303.051.545.545 0 0 1-.422-.177.696.696 0 0 1-.16-.48c0-.19.053-.348.156-.468a.498.498 0 0 1 .397-.18c.103 0 .212.014.332.048v-.537a1.393 1.393 0 0 0-.363-.045Zm12.414 0a1.134 1.134 0 0 0-.84.326c-.223.22-.332.5-.332.838 0 .362.108.658.328.88.22.223.506.336.861.336.103 0 .22-.016.346-.052v-.54a1.094 1.094 0 0 1-.303.051.545.545 0 0 1-.422-.177.696.696 0 0 1-.16-.48c0-.19.053-.348.156-.468a.497.497 0 0 1 .397-.18c.103 0 .212.014.332.048v-.537a1.394 1.394 0 0 0-.363-.045Zm-9.598.06-.29 2.264h.579l.156-1.559.395 1.56h.412l.379-1.556.164 1.555h.603l-.304-2.264h-.791l-.12.508c-.03.13-.06.264-.087.4l-.067.352a30.009 30.009 0 0 0-.258-1.26h-.771Zm2.768 0-.29 2.264h.579l.156-1.559.396 1.56h.412l.375-1.556.165 1.555h.603l-.305-2.264h-.789l-.119.508c-.03.13-.06.264-.086.4l-.066.352a29.87 29.87 0 0 0-.26-1.26h-.771Zm3.988 0v2.264h.611v-1.03h.012l.494 1.03h.645l-.489-1.02a.61.61 0 0 0 .37-.552.597.597 0 0 0-.25-.506c-.167-.123-.394-.186-.68-.186h-.713Zm3.377 0v2.264H24v-.483h-.63v-.414h.54v-.468h-.54v-.416h.626v-.483H22.76Zm-4.793.004v2.264h1.24v-.483h-.627v-.416h.541v-.468h-.54v-.415h.622v-.482h-1.236Zm2.025.432c.146.003.25.025.313.072.063.046.091.12.091.227 0 .156-.135.236-.404.24v-.54.001Zm-15.22.011c-.104 0-.205.07-.301.211-.133.187-.203.41-.2.64 0 .095.02.2.06.302.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.016-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.244.244 0 0 0-.045-.006h.001Zm2.083 0c-.103 0-.204.07-.3.211-.133.187-.203.41-.2.64 0 .095.02.2.06.302.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.013-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.244.244 0 0 0-.045-.006Zm4.428.006c.233 0 .354.218.354.66-.004.273-.038.46-.098.553a.294.294 0 0 1-.262.14.266.266 0 0 1-.242-.14c-.056-.093-.084-.28-.084-.562 0-.436.11-.65.332-.65Z"
			/>
		</g>
		<defs>
			<clipPath id="woocommerce_svg__a">
				<path
					fill="#fff"
					d="M0 0h24v24H0z"
				/>
			</clipPath>
		</defs>
	</svg>
);
export default SvgWoocommerce;
