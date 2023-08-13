"use client";

import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  transition: color 0.5s ease-in-out;
  font-size: var(--font-body-l);

  &.active::after {
    color: var(--text-primary);
  }

  &:hover {
    color: var(--text-secondary);
  }

  &.active {
    color: var(--text-active);
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: var(--space-xl);
  list-style: none;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
  }
`;

export const StyledSpan = styled(motion.span)`
  display: none;
  width: 100%;
  height: 0.5px;
  position: absolute;
  top: 110%;
  left: 0;
  background-color: var(--text-primary);

  @media (min-width: 768px) {
    display: block;
  }
`;
