import { StyledSpan } from "./ContactLinks.styled";
import { Github, Linkedin, Mail } from "@/components/Icons";
import Link from "next/link";

export default function ContactLinks() {
  return (
    <StyledSpan>
      <Link href="https://github.com/Stephan-mit-Ph">
        <Github />
      </Link>
      <Link href="mailto:stephan@stephanmitph.com">
        <Mail />
      </Link>
      <Link href="https://www.linkedin.com/in/stephan-niendorf-38538322b/">
        <Linkedin />
      </Link>
    </StyledSpan>
  );
}
