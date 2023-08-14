"use client";

import styled from "styled-components";

export const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: var(--space-3xs) 0;
  gap: var(--space-s);
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StyledSubList = styled.ul`
  padding: 0;
  gap: var(--space-xs);
  margin: 1.5rem 0;
`;

export const StyledSectionContent = styled.div`
  scroll-behavior: smooth;
  overflow: scroll;
  overflow-x: hidden;
  width: 100%;
  z-index: 100;
  height: calc(100vh - 100px);
  padding: 0 0 var(--size-xl) 0;
  @media (min-width: 952px) {
    width: 65%;
  }
`;
