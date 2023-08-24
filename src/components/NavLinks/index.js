import { usePathname } from "next/navigation";
import { links } from "../../lib/links";
import { LayoutGroup } from "framer-motion";
import {
  StyledLink,
  StyledList,
  StyledSpan,
  StyledListItem,
} from "./NavLinks.styled";

const NavLinks = ({ display }) => {
  const path = usePathname();

  return (
    <LayoutGroup>
      <StyledList role="list" display={display}>
        {links.map(({ href, label, id }) => (
          <StyledListItem key={id} animate>
            <StyledLink
              className={`title  
								${href === path ? "active" : ""}
							`}
              href={href}
              aria-label={`Link to ${label} page`}
            >
              {href === path && <StyledSpan layoutId="underline" />}
              {`_${label}`}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </LayoutGroup>
  );
};

export default NavLinks;
