"use client";
import React from "react";

import useDeviceSize from "@/hooks/useDeviceSize";
import {
  StyledList,
  StyledListItem,
  StyledSubList,
  StyledSectionContent,
} from "./ContentSection.styled";
import { H1, H2, H3 } from "@/ui/Text/Text.styled";
import IconList from "src/ui/IconList";
import SubSectionInfo from "src/ui/SubsectionInfo";
import Paragraphs from "src/ui/Paragraphs";
import Section from "src/ui/Section";

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
      <IconList icons={subsection.icons} />
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
