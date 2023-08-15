import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(({ active, ...rest }) => <Link {...rest} />)`
  display: flex;
  scroll-margin-top: 10px;
  text-decoration: none;
  position: relative;
  transition: color 0.7s ease-in-out;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ active }) =>
    active ? "var(--text-primary)" : "var(--text-secondary)"};
  font-weight: ${({ active }) =>
    active ? "var(--font-weight-regular)" : "var(--font-weight-light)"};

  &:hover {
    color: var(--text-active);
  }
`;

export const StyledSidebar = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--space-xs);
  width: 35%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  height: calc(100vh - 80px);
  padding: 0.2rem calc(calc((4vw + 6%) * -0.9));

  @media (min-width: 952px) {
    display: flex;
  }

  ol,
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: var(--space-xs);
    padding: 0 0 0 var(--space-s-m);
  }

  ul {
    padding-bottom: var(--space-3xs-s);
  }

  ol > li > a {
    padding-bottom: var(--space-xs);
  }
`;
