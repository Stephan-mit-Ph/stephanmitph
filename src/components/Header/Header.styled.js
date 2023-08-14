import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const StyledHeader = styled(motion.header)`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: var(--space-s) var(--space-m-xl);
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  overflow: hidden;
  width: 100%;
  height: 80px;
  max-width: 1440px;

  a {
    font-size: var(--font-body-m);
  }
`;

export const StyledSidebar = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: var(--bg-color);
  z-index: 1000;
  padding: 20px;
  color: var(--text-primary);
`;

export const StyledList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  list-style: none;
`;

export const StyledListItem = styled(motion.li)`
  padding: var(--space-l);

  cursor: pointer;
  &:hover {
    color: var(--text-secondary);
  }
`;
