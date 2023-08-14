import ContentSection from "@/components/ContentSection";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Wrapper from "@/components/Wrapper";
import { sections } from "@/lib/about-sections";

export default function About() {
  return (
    <Main>
      <Wrapper>
        <Sidebar sections={sections} title="about_" />
        <ContentSection sections={sections} text="about_" />
      </Wrapper>
    </Main>
  );
}
