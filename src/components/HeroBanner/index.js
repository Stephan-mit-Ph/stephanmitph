import { StyledWrapper, StyledLink, SvgBackground } from "./HeroBanner.styled";
import { Arrow } from "@/components/Icons";
import { Display, BodyMedium } from "@/ui/Text/Text.styled";

const HeroBanner = () => {
  return (
    <StyledWrapper direction="column">
      <SvgBackground
        width="489"
        height="487"
        viewBox="0 0 489 487"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M102.999 0L102.999 587M589 93.7675L0 93.7675M200.657 0L200.657 587M589 191.347L0 191.347M298.315 0L298.315 587M589 288.926L0 288.926M395.973 0L395.973 587M589 386.505L0 386.505M493.631 0L493.631 587M589 484.084L0 484.084"
          stroke="url(#paint0_radial_884_155)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_884_155"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(294.5 293.5) rotate(90) scale(293.5 294.5)"
          >
            <stop stopColor="#E7E7E7" stopOpacity="0.3" />
            <stop offset="1" stopColor="#E2E2E2" stopOpacity="0" />
          </radialGradient>
        </defs>
      </SvgBackground>
      <StyledWrapper direction="column">
        <Display>Web Development</Display>
        <StyledWrapper>
          <Arrow
            style={{
              fontSize: "var(--icon-size)",
            }}
          />
          <Display>E-Commerce</Display>
        </StyledWrapper>
        <Display>UX/UI Design</Display>
      </StyledWrapper>
      <BodyMedium>
        Hi! Ich bin Stephan, Webentwickler und Product Designer aus dem Herzen
        Berlins. Meine Leidenschaft für Design und Code öffnet Türen zu
        faszinierenden digitalen Welten und schafft Brücken zwischen Ästhetik
        und Funktionalität. Erfahre mehr über mich und folge mir bei meiner ganz
        persönlichen Reise in eine andere Dimension.
      </BodyMedium>
      <StyledWrapper style={{ gap: "2rem" }}>
        <StyledLink href="/about" aria-label="Link to About Page">
          _about
          <Arrow />
        </StyledLink>
        <StyledLink href="/contact" aria-label="Link to Contact Page">
          _contact
          <Arrow />
        </StyledLink>
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default HeroBanner;
