import { screen, fireEvent } from "@testing-library/react";
import { expect, vi } from "vitest";

import { render } from "@/utils/render";

import Drawer from "./index";

describe("Drawer Component", () => {
  const mockOnClose = vi.fn();
  const defaultProps = {
    open: true,
    onClose: mockOnClose,
    width: 450,
    children: <div data-testid="drawer-content">Drawer Content</div>,
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it("renders when open is true", () => {
    render(<Drawer {...defaultProps} />);
    expect(screen.getByTestId("drawer-content")).toBeInTheDocument();
  });

  it("does not render when open is false", () => {
    render(<Drawer {...defaultProps} open={false} />);
    expect(screen.queryByTestId("drawer-wrapper-test-id")).toHaveStyle({
      height: 0,
      overflow: "hidden",
    });
  });

  it("calls onClose when clicking the overlay", () => {
    render(<Drawer {...defaultProps} />);
    const overlay = screen.getByTestId("overlay-wrapper");
    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("adds menu-open class to body when drawer is open", () => {
    render(<Drawer {...defaultProps} />);
    expect(document.body.classList.contains("menu-open")).toBe(true);
  });

  it("removes menu-open class from body when drawer is closed", () => {
    const { rerender } = render(<Drawer {...defaultProps} />);
    rerender(<Drawer {...defaultProps} open={false} />);
    expect(document.body.classList.contains("menu-open")).toBe(false);
  });

  it("renders with custom z-index", () => {
    render(<Drawer {...defaultProps} drawerZindex={999} />);
    const drawer = screen.getByTestId("drawer-wrapper-test-id");
    expect(drawer).toHaveStyle({ zIndex: 999 });
  });
});
