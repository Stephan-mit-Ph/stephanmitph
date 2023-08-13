import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.header)`
  display: flex;
  position: fixed;
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
    color: inherit;
    font-size: var(--font-body-m);
    text-decoration: none;
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
  color: white;
`;

export const StyledList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-l);
  align-items: center;
  height: 100vh;
`;

export const StyledListItem = styled(motion.li)`
  list-style: none;
  cursor: pointer;
  &:hover {
    color: var(--text-secondary);
  }
`;
