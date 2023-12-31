"use client";
import React from "react";

import useDeviceSize from "@/hooks/useDeviceSize";
import {
  StyledList,
  StyledListItem,
  StyledSubList,
  StyledSectionContent,
} from "./ContentSection.styled";
import { H1, H2, H3, Accent } from "@/ui/Text/Text.styled";
import IconList from "src/ui/IconList";
import SubSectionInfo from "src/ui/SubsectionInfo";
import Paragraphs from "src/ui/Paragraphs";
import Section from "src/ui/Section";
import Link from "next/link";
import { Github } from "../Icons";

const SectionItem = ({ section }) => (
  <StyledListItem key={section.id}>
    <Section id={section.id}>
      <H2>{section.title}</H2>
      <Paragraphs paragraphs={section.paragraphs} />
    </Section>
  </StyledListItem>
);

const SubSectionItem = ({ subsection }) => (
  <StyledListItem key={subsection.id}>
    <Section id={subsection.id}>
      <H3>{subsection.title}</H3>
      <Paragraphs paragraphs={subsection.paragraphs} />
      <SubSectionInfo {...subsection} />
      {subsection.icons && (
        <>
          <Accent>Tools & Technologies</Accent>
          <IconList icons={subsection.icons} />
        </>
      )}
      {subsection.links && (
        <>
          <Accent>GitHub & Live Demo</Accent>
          <Link
            href={subsection.links[0].url}
            aria-label={subsection.links[0].name}
          >
            <Github style={{ fontSize: "1.5rem" }} />
          </Link>
        </>
      )}
    </Section>
  </StyledListItem>
);

const ContentSection = ({ sections, text }) => {
  const isMobile = useDeviceSize();

  return (
    <StyledSectionContent>
      {isMobile && <H1>{text}</H1>}
      <StyledList>
        {sections.map((section) => (
          <React.Fragment key={section.id}>
            <SectionItem section={section} />
            {section.subsections && (
              <StyledSubList>
                {section.subsections.map((subsection) => (
                  <SubSectionItem key={subsection.id} subsection={subsection} />
                ))}
              </StyledSubList>
            )}
          </React.Fragment>
        ))}
      </StyledList>
    </StyledSectionContent>
  );
};

export default ContentSection;
