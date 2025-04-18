import { screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";

import { render } from "@/utils/render";

import SimpleText from "./index";

describe("SimpleText", () => {
  it("renders with default props", () => {
    render(<SimpleText text="Default Text" />);
    const textElement = screen.getByText("Default Text");
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName.toLowerCase()).toBe("h2");
  });

  it("renders with custom HTML tag", () => {
    render(<SimpleText text="Custom Tag" as="h1" />);
    const textElement = screen.getByText("Custom Tag");
    expect(textElement.tagName.toLowerCase()).toBe("h1");
  });

  it("applies custom className", () => {
    render(<SimpleText text="Styled Text" className="custom-class" />);
    const textElement = screen.getByText("Styled Text");
    expect(textElement).toHaveClass("custom-class");
  });

  it("renders with testId", () => {
    render(<SimpleText text="Testable Text" testId="test-text" />);
    const textElement = screen.getByTestId("test-text");
    expect(textElement).toBeInTheDocument();
  });

  it("renders with all props", () => {
    render(
      <SimpleText
        text="Complete Text"
        as="h3"
        className="complete-class"
        testId="complete-test"
      />,
    );
    const textElement = screen.getByTestId("complete-test");
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName.toLowerCase()).toBe("h3");
    expect(textElement).toHaveClass("complete-class");
    expect(textElement).toHaveTextContent("Complete Text");
  });
});
