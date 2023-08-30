import { StyledSpan } from "./ContactLinks.styled";
import { Github, Linkedin, Mail } from "@/components/Icons";
import Link from "next/link";

export default function ContactLinks() {
  return (
    <StyledSpan>
      <Link
        href="https://github.com/Stephan-mit-Ph"
        aria-label="Link to Github Profile"
      >
        <Github />
      </Link>
      <Link href="mailto:stephan@stephanmitph.com" aria-label="Mail to Stephan">
        <Mail />
      </Link>
      <Link
        href="https://www.linkedin.com/in/stephan-niendorf-38538322b/"
        aria-label="Link to LinkedIn Profile"
      >
        <Linkedin />
      </Link>
    </StyledSpan>
  );
}
