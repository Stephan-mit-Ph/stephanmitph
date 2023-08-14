"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSpan = styled.span`
  position: relative;
  display: inline-block;
  overflow: visible;

  svg {
    font-size: 1.5rem;
    color: var(--text-primary);
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--text-secondary);
      transition: color 0.6s ease-in-out;
    }
  }
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateY(-30%);
    background-color: rgba(1, 24, 43, 0.2);
    color: var(--text-primary);
    padding: 5px;
    border-radius: 5px;
    opacity: 0;
    z-index: 1000;
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const StyledList = styled(motion.ul)`
  display: flex;
  width: 65%;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  gap: var(--space-l);
  padding: var(--space-s) 0;
`;
