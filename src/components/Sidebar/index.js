"use client";

import { StyledSidebar, StyledLink } from "./Sidebar.styled";
import { H1 } from "@/ui/Text/Text.styled";
import useActiveSection from "@/hooks/useActiveSection";

const SidebarSection = ({ section, activeSection }) => (
  <li key={section.id}>
    <StyledLink
      href={`#${section.id}`}
      active={section.id === activeSection}
      fontSize="var(--font-body-m)"
    >
      {section.title}
    </StyledLink>
    {section.subsections && (
      <ul>
        {section.subsections.map((subsection) => (
          <li key={subsection.id}>
            <StyledLink
              href={`#${subsection.id}`}
              active={subsection.id === activeSection}
              fontSize="var(--font-body-s)"
            >
              {subsection.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const Sidebar = ({ sections, title }) => {
  const activeSection = useActiveSection(sections);

  return (
    <StyledSidebar>
      <H1>{title}</H1>
      <ol>
        {sections.map((section) => (
          <SidebarSection
            key={section.id}
            section={section}
            activeSection={activeSection}
          />
        ))}
      </ol>
    </StyledSidebar>
  );
};

export default Sidebar;
