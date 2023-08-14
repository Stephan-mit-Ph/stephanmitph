"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { StyledSection } from "./Section.styled";

function Section({ children, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StyledSection ref={ref} id={id}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          display: "block",
        }}
      >
        {children}
      </span>
    </StyledSection>
  );
}

export default Section;
