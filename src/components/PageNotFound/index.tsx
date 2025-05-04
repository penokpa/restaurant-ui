import Button from "../Button";
import StyledSection from "./style";

export type PageNotFoundProps = {
  statusCode?: string;
  errorTitle?: string;
  errormsg?: string;
  btnLabel?: string;
  bgColor?: string;
  textColor?: string;
  btnBgColor?: string;
  btnTextColor?: string;
};

const PageNotFound = ({
  btnLabel = "BACK TO HOME",
  errormsg = "Sorry 😔, we couldn’t find what you were looking for.",
  statusCode = "404",
  errorTitle = "Page Not Found",
  bgColor,
  textColor,
  btnBgColor,
  btnTextColor,
}: PageNotFoundProps) => {
  return (
    <StyledSection
      className="page-not-found-wrapper"
      $bgColor={bgColor}
      $textColor={textColor}
      data-testid="not-found-wrapper-test-id"
    >
      <h1 className="not-found-title" data-testid="not-found-title-wrapper">
        <strong
          className="not-found-status-code"
          data-testid="error-page-status-test-id"
        >
          {statusCode}
        </strong>
        <span data-testid="error-title-test-id"> {errorTitle}</span>
      </h1>
      <p className="not-found-helper-text" data-testid="error-msg-test-id">
        {errormsg}
      </p>
      <Button
        skin="contained"
        href="/"
        size="md"
        bgColor={btnBgColor}
        color={btnTextColor}
        testId="not-btn-test-id"
      >
        {btnLabel}
      </Button>
    </StyledSection>
  );
};

export default PageNotFound;
