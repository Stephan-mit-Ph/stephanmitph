import {
  topPathVariants,
  middlePathVariants,
  bottomPathVariants,
} from "./MenuToggle.variants";
import { StyledButton, Path } from "./MenuToggle.styled";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <StyledButton onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={topPathVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.5 }}
        />
        <Path
          d="M 2 9.5 L 20 9.5"
          variants={middlePathVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.5 }}
        />
        <Path
          variants={bottomPathVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </StyledButton>
  );
};

export default MenuToggle;
