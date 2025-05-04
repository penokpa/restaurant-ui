import { screen } from "@testing-library/react";
import { expect } from "vitest";

import { render } from "@/utils/render";

import SectionBgImage from "./index";

describe("SectionBgImage Component", () => {
  const mockProps = {
    bgImage: "/path/to/image.jpg",
    title: "Section Title",
    description: "Section Description",
    as: "h1",
    overlay: true,
    titleColor: "#ffffff",
    descriptionColor: "#ffffff",
  };

  describe("Rendering", () => {
    it("renders with all props", () => {
      render(<SectionBgImage {...mockProps} />);
      expect(screen.getByTestId("section-title-id")).toHaveTextContent(
        mockProps.title,
      );
      expect(screen.getByTestId("section-description-id")).toHaveTextContent(
        mockProps.description,
      );
    });

    it("renders without optional props", () => {
      render(
        <SectionBgImage bgImage={mockProps.bgImage} title={mockProps.title} />,
      );
      expect(screen.getByTestId("section-title-id")).toHaveTextContent(
        mockProps.title,
      );
      expect(
        screen.queryByTestId("section-description-id"),
      ).not.toBeInTheDocument();
    });
  });

  describe("Image Handling", () => {
    it("renders background image", () => {
      render(<SectionBgImage {...mockProps} />);
      const container = screen.getByTestId("section-image-test-id");
      expect(container).toHaveStyle({
        backgroundImage: `url(${mockProps.bgImage})`,
      });
    });

    it("applies correct background styles", () => {
      render(<SectionBgImage {...mockProps} />);
      const container = screen.getByTestId("section-image-test-id");
      expect(container).toHaveStyle({
        backgroundSize: "cover",
        backgroundPosition: "50%",
      });
    });
  });

  describe("Content Layout", () => {
    it("renders content in correct order", () => {
      render(<SectionBgImage {...mockProps} />);
      const container = screen.getByTestId("section-image-test-id");
      const content = container.querySelector(".menu-title-content");
      expect(content).toBeInTheDocument();
      expect(content).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      });
    });

    it("applies correct content styles", () => {
      render(<SectionBgImage {...mockProps} />);
      const container = screen.getByTestId("section-image-test-id");
      expect(container).toHaveStyle({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "600px",
      });
    });
  });

  describe("Overlay", () => {
    it("renders overlay when enabled", () => {
      render(<SectionBgImage {...mockProps} />);
      expect(screen.getByTestId("section-overlay-test-id")).toBeInTheDocument();
    });

    it("does not render overlay when disabled", () => {
      render(<SectionBgImage {...mockProps} overlay={false} />);
      expect(
        screen.queryByTestId("section-overlay-test-id"),
      ).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper heading structure", () => {
      render(<SectionBgImage {...mockProps} />);
      // Find the <h1> element with the expected text content
      const heading = screen.getByRole("heading", { level: 1 });

      // Assert that the text is correct
      expect(heading).toHaveTextContent("Section Title");
    });

    it("has proper ARIA attributes", () => {
      render(<SectionBgImage {...mockProps} />);
      const section = screen.getByTestId("section-image-test-id");
      expect(section).toHaveAttribute("aria-label", "section-background-image");
    });
  });
});
