import localFont from "next/font/local";

const hogly = localFont({
  display: "swap",
  src: [
    {
      path: "../../public/Hogly-Light.otf",
      style: "normal",
    },
  ],
});

const sourceCode = localFont({
  display: "swap",
  src: [
    {
      path: "../../public/SourceCodePro-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/SourceCodePro-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
});

export const typography = `
    --font-display: ${hogly.style.fontFamily};
    --font-family:  ${sourceCode.style.fontFamily};
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-style-italic: italic;
    --font-base: 1rem;
    --font-caption: clamp(0.69rem, calc(0.64rem + 0.22vw), 0.84rem);
    --font-body-s: clamp(0.83rem, calc(0.76rem + 0.33vw), 1.05rem);
    --font-body-m: clamp(1.00rem, calc(0.89rem + 0.47vw), 1.31rem);
    --font-body-l: clamp(1.20rem, calc(1.04rem + 0.66vw), 1.64rem);
    --font-heading-6: clamp(1.00rem, calc(0.89rem + 0.47vw), 1.31rem);
    --font-heading-5: clamp(1.20rem, calc(1.04rem + 0.66vw), 1.64rem);
    --font-heading-4: clamp(1.44rem, calc(1.22rem + 0.92vw), 2.05rem);
    --font-heading-3: clamp(1.73rem, calc(1.43rem + 1.26vw), 2.56rem);
    --font-heading-2: clamp(2.07rem, calc(1.68rem + 1.70vw), 3.20rem);
    --font-heading-1: clamp(2.49rem, calc(1.95rem + 2.28vw), 4.01rem);
    --font-title: clamp(1.45rem, calc(0.90rem + 1.98vw), 4.01rem);
    --font-size-title: 2rem;
`;
