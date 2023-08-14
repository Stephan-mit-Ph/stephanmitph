import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import ContentSection from "@/components/ContentSection";
import Wrapper from "@/components/Wrapper";
import { sections } from "@/lib/projects-sections";

export default function Projects() {
  return (
    <Main>
      <Wrapper>
        <Sidebar sections={sections} title="projects_" />
        <ContentSection sections={sections} text="projects_" />
      </Wrapper>
    </Main>
  );
}
