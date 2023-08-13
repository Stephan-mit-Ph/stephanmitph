"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDiv = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  background-color: var(--bg-color);
  background-image: url(/noise.webp);
      background-size: cover;
      background-repeat: no-repeat;
      background-blend-mode: overlay;
      background-position: center;
      
  svg {
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% + 300px);
    path {
      fill: var(--bg-color);
    }
  }
  p {
    display: flex;
    color: white;
    font-size: 42px;
    align-items: center;
    position: absolute;
    z-index: 1;
    span {
      display: block;
      width: 10px;
      height: 10px;
      background-color: white;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;
