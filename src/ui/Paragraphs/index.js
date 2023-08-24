import { BodyMedium } from "@/ui/Text/Text.styled";

const Paragraphs = ({ paragraphs }) =>
  paragraphs?.map((paragraph) => (
    <BodyMedium key={paragraph.id}>{paragraph.text}</BodyMedium>
  ));

export default Paragraphs;
