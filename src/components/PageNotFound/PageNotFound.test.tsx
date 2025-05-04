import { screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";

import { render } from "@/utils/render";

import PageNotFound from "./index";

describe("PageNotFound Component", () => {
  it("renders with custom status code", () => {
    const customStatusCode = "500";
    render(<PageNotFound statusCode={customStatusCode} />);
    expect(screen.getByText(customStatusCode)).toBeInTheDocument();
  });

  it("renders with custom error title", () => {
    const customTitle = "Custom Error";
    render(<PageNotFound errorTitle={customTitle} />);
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it("renders with custom error message", () => {
    const customMessage = "Custom error message";
    render(<PageNotFound errormsg={customMessage} />);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it("renders with custom button label", () => {
    const customLabel = "Custom Button";
    render(<PageNotFound btnLabel={customLabel} />);
    expect(screen.getByText(customLabel)).toBeInTheDocument();
  });

  it("applies custom background color", () => {
    const customBgColor = "#f5f5f5";
    render(<PageNotFound bgColor={customBgColor} />);
    const wrapper = screen.getByTestId("not-found-wrapper-test-id");
    expect(wrapper).toHaveStyle({ backgroundColor: customBgColor });
  });

  it("applies custom text color", () => {
    const customTextColor = "#333333";
    render(<PageNotFound textColor={customTextColor} />);
    const wrapper = screen.getByTestId("not-found-title-wrapper");
    expect(wrapper).toHaveStyle({ color: customTextColor });
  });

  it("applies custom button background color", () => {
    const customBtnBgColor = "#55FA33";
    render(<PageNotFound btnBgColor={customBtnBgColor} />);
    const button = screen.getByRole("link");
    expect(button).toHaveStyle({ backgroundColor: customBtnBgColor });
  });

  it("applies custom button text color", () => {
    const customBtnTextColor = "#ffffff";
    render(<PageNotFound btnTextColor={customBtnTextColor} />);
    const button = screen.getByRole("link");
    expect(button).toHaveStyle({ color: customBtnTextColor });
  });

  it("renders button with correct href", () => {
    render(<PageNotFound />);
    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("href", "/");
  });

  it("renders with all custom props", () => {
    const customProps = {
      statusCode: "500",
      errorTitle: "Server Error",
      errormsg: "Something went wrong",
      btnLabel: "REFRESH",
      bgColor: "#f5f5f5",
      textColor: "#333333",
      btnBgColor: "#55FA33",
      btnTextColor: "#ffffff",
    };

    render(<PageNotFound {...customProps} />);

    // Check content
    expect(screen.getByText(customProps.statusCode)).toBeInTheDocument();
    expect(screen.getByText(customProps.errorTitle)).toBeInTheDocument();
    expect(screen.getByText(customProps.errormsg)).toBeInTheDocument();
    expect(screen.getByText(customProps.btnLabel)).toBeInTheDocument();

    // Check styles
    const wrapper = screen.getByTestId("not-found-wrapper-test-id");
    expect(wrapper).toHaveStyle({
      backgroundColor: customProps.bgColor,
    });

    const button = screen.getByTestId("not-btn-test-id");
    expect(button).toHaveStyle({
      backgroundColor: customProps.btnBgColor,
      color: customProps.btnTextColor,
    });
  });
});
