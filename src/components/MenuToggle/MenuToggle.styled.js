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
  font-size: 1.8rem;
  border: none;
  cursor: pointer;
  z-index: 1200;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
 }
`;

export const Path = styled(motion.path)`
  fill: transparent;
  stroke-width: 1;
  stroke: var(--text-primary);
  stroke-linecap: round;
`;
