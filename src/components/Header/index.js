"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import useDeviceSize from "@/hooks/useDeviceSize";
import { links } from "@/lib/links";
import {
  StyledHeader,
  StyledSidebar,
  StyledListItem,
  StyledList,
} from "./Header.styled";
import MenuToggle from "../MenuToggle";
import NavLinks from "../NavLinks";
import {
  sidebarVariants,
  listVariants,
  listItemVariants,
} from "./Header.variants";

const Navigation = ({ isMobile, isOpen, toggleMenu }) =>
  isMobile ? (
      <StyledSidebar
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <StyledList variants={listVariants}>
          {links.map((link) => (
            <StyledListItem
              key={link.id}
              variants={listItemVariants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
            >
              <Link href={link.href}>{`${link.label}_`}</Link>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledSidebar>
  ) : (
    <NavLinks />
  );

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useDeviceSize();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <StyledHeader
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <Link href="/" aria-label="Home">
        stephan_mit_ph_
      </Link>
      {isMobile && <MenuToggle toggle={toggleMenu} isOpen={isOpen} />}
      <Navigation isMobile={isMobile} isOpen={isOpen} toggleMenu={toggleMenu} />
    </StyledHeader>
  );
};

export default Header;
