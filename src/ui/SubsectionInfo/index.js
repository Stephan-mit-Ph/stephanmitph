import { BodyMedium, Accent } from "@/ui/Text/Text.styled";

const SubSectionInfo = ({ company, paragraph, date, city }) => (
  <>
    {paragraph && <BodyMedium>{paragraph}</BodyMedium>}
    {company && <Accent>{company}</Accent>}
    {date && <Accent>{date}</Accent>}
    {city && <Accent>{city}</Accent>}
  </>
);

export default SubSectionInfo;
