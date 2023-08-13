"use client";

import styled from "styled-components";

export const StyledMain = styled.main`
  height: calc(100% - 80px);
  width: 100%;
  display: flex;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  flex: 1;
  padding: 0 var(--space-m-xl);
  overflow: auto;
  z-index: 0;
  position: relative;
`;
