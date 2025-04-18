import { screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { render } from "@/utils/render";

import Typography from "./index";

describe("Typography Component", () => {
  describe("Rendering", () => {
    it("renders text content correctly", () => {
      render(<Typography as="p">Hello World</Typography>);
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

    it("renders with correct HTML tag for each 'as' prop", () => {
      const tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"] as const;
      tags.forEach((tag) => {
        const { container } = render(
          <Typography as={tag}>Test {tag}</Typography>,
        );
        expect(container.querySelector(tag)).toBeInTheDocument();
      });
    });

    it("applies correct className based on 'as' prop", () => {
      const { container } = render(<Typography as="h1">Heading</Typography>);
      expect(container.firstChild).toHaveClass("h1");
    });

    it("applies custom className when provided", () => {
      const { container } = render(
        <Typography as="p" className="custom-class">
          Text
        </Typography>,
      );
      expect(container.firstChild).toHaveClass("custom-class");
    });

    it("sets title attribute from title prop", () => {
      render(
        <Typography as="p" title="Custom Title">
          Text
        </Typography>,
      );
      expect(screen.getByTitle("Custom Title")).toBeInTheDocument();
    });

    it("sets title attribute from content when title prop is not provided", () => {
      render(<Typography as="p">Text Content</Typography>);
      expect(screen.getByTitle("Text Content")).toBeInTheDocument();
    });

    it("sets default title when content is not a string", () => {
      render(
        <Typography as="p">
          <span>Complex Content</span>
        </Typography>,
      );
      expect(screen.getByTitle("content")).toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("calls onClick handler when clicked", async () => {
      const handleClick = vi.fn();
      render(
        <Typography as="p" onClick={handleClick}>
          Clickable Text
        </Typography>,
      );

      await userEvent.click(screen.getByText("Clickable Text"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("returns null when children is not provided", () => {
      const { container } = render(<Typography as="p" />);
      expect(container.firstChild).toBeNull();
    });
  });

  describe("Edge Cases", () => {
    it("handles number as children", () => {
      render(<Typography as="p">{42}</Typography>);
      expect(screen.getByText("42")).toBeInTheDocument();
    });

    it("handles nested components", () => {
      render(
        <Typography as="p">
          <Typography as="span">Nested Text</Typography>
        </Typography>,
      );
      expect(screen.getByText("Nested Text")).toBeInTheDocument();
    });
  });
});
