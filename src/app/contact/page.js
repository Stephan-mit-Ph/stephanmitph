import Main from "@/components/Main";
import { BodyMedium } from "@/ui/Text/Text.styled";
import ContactLinks from "src/components/ContactLinks";

export default function Contact() {
  return (
    <Main>
      <BodyMedium>
        Vielen Dank, dass du dir die Zeit genommen hast, mehr über mich zu
        erfahren.
        <br />
        Wenn du weitere Fragen zu meiner Person oder meinen Projekten hast, oder
        wenn du Anregungen und Ideen teilen möchtest, zögere bitte nicht, mich
        zu kontaktieren.
        <br />
        Ich bin offen für neue Möglichkeiten und freue mich darauf, von dir zu
        hören.
      </BodyMedium>
      <ContactLinks />
    </Main>
  );
}
