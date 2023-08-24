import { StyledSpan, StyledList } from "./IconList.styled";
import * as Icons from "@/components/Icons";

const Icon = ({ name }) => {
  const IconComponent = Icons[name];
  return <IconComponent key={name} />;
};

const IconList = ({ icons }) => (
  <StyledList>
    {icons?.map((icon, index) => (
      <li key={icon.name}>
        <StyledSpan data-tooltip={icon.tooltip}>
          <Icon name={icon.name} />
        </StyledSpan>
      </li>
    ))}
  </StyledList>
);

export default IconList;
