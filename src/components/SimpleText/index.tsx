import Typography, { TagType } from "../Typography";
import { StyledDiv } from "./style";

export type SimpleTextProps = {
  text: string;
  as?: TagType;
  className?: string;
  wrapperClassName?: string;
  testId?: string;
};

const SimpleText = ({
  text,
  className,
  testId,
  as = "h2",
  wrapperClassName,
}: SimpleTextProps) => {
  return (
    <StyledDiv className={wrapperClassName}>
      <Typography
        as={as}
        testId={testId || "simple-text-id"}
        className={className}
      >
        {text}
      </Typography>
    </StyledDiv>
  );
};

export default SimpleText;
