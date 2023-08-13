import { StyledText } from "./Text.styled";

const Text = ({ text, variant }) => {
  return <StyledText variant={variant}>{text}</StyledText>;
};

export { Text };

export { default as H1 } from "./Text.styled";
export { default as H2 } from "./Text.styled";
export { default as H3 } from "./Text.styled";
export { default as H4 } from "./Text.styled";
export { default as H5 } from "./Text.styled";
export { default as H6 } from "./Text.styled";
export { default as BodyLarge } from "./Text.styled";
export { default as BodyMedium } from "./Text.styled";
export { default as Accent } from "./Text.styled";
