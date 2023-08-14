"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/globals";
import { Reset } from "@/styles/reset";

export default function Provider({ children }) {
  return (
    <>
      <StyledComponentsRegistry>
        <Reset />
        <GlobalStyle />
        {children}
      </StyledComponentsRegistry>
    </>
  );
}
