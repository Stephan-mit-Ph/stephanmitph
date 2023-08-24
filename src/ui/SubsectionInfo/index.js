import { BodyMedium, Accent } from "@/ui/Text/Text.styled";
import { StyledSubInfo } from "./SubsectionInfo.styled";

const SubSectionInfo = ({ company, paragraph, date, city }) => (
  <>
    {paragraph && <BodyMedium>{paragraph}</BodyMedium>}
    <StyledSubInfo>
      {company && <Accent>{company}</Accent>}
      {date && <Accent>{date}</Accent>}
      {city && <Accent>{city}</Accent>}
    </StyledSubInfo>
  </>
);

export default SubSectionInfo;
