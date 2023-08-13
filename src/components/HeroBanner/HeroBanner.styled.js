import Link from "next/link";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  position: relative; // to accommodate the SVG grid
  h1 {
    line-height: 110%;
  }

  p {
    max-width: 790px;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--space-3xs);
`;

export const StyledButton = styled.button`
  display: flex;
  color: inherit;
  background-color: transparent;
  padding: var(--space-3xs) var(--space-xs);
  border: 0.5px solid;
  border-radius: 5px;
  transition: color 0.7s ease-in-out;
  cursor: pointer;
  z-index: 100;
  font-size: var(--font-body-s);

  &:hover {
    color: var(--text-secondary);
  }
`;

export const SvgBackground = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  pointer-events: none; // ensures the SVG doesn't interfere with clickable elements
`;
