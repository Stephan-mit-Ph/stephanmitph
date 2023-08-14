"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
  z-index: 1200;

  transition: transform 0.3s ease-in-out;

  svg {
    width: var(--font-heading-4);
    height: var(--font-heading-4);
  }
`;

export const Path = styled(motion.path)`
  fill: transparent;
  stroke-width: 1;
  stroke: var(--text-primary);
  stroke-linecap: round;
`;
