import { screen, fireEvent } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";

import { render } from "@/utils/render";

import Modal from "./index";

describe("Modal Component", () => {
  const mockOnClose = vi.fn();

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    title: "Test Modal",
    children: <p>Modal content</p>,
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it("renders nothing when isOpen is false", () => {
    const { container } = render(<Modal {...defaultProps} isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders modal with title when isOpen is true", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByTestId("modal-close-icon-id");
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when overlay is clicked and overlayClick is false", () => {
    render(<Modal {...defaultProps} />);
    const overlay = screen.getByTestId("modal-overlay-test-id");
    fireEvent.click(overlay);
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it("renders loader when loader prop is true", () => {
    render(<Modal {...defaultProps} loader={true} />);
    expect(screen.getByText("Loading....")).toBeInTheDocument();
  });

  it("applies custom maxWidth", () => {
    const customWidth = "1000px";
    render(<Modal {...defaultProps} maxWidth={customWidth} />);
    const modalDialogWrapper = screen.getByTestId("modal-dailog-wrapper");
    expect(modalDialogWrapper).toHaveStyle({ maxWidth: customWidth });
  });

  it("applies custom className", () => {
    const customClass = "custom-modal";
    render(<Modal {...defaultProps} className={customClass} />);
    const modalWrapper = screen.getByTestId("modal-wrapper");
    expect(modalWrapper).toHaveClass(customClass);
  });

  it("adds overflow-hidden class to body when modal is open", () => {
    render(<Modal {...defaultProps} />);
    expect(document.body).toHaveClass("overflow-hidden");
  });

  it("removes overflow-hidden class from body when modal is closed", () => {
    const { rerender } = render(<Modal {...defaultProps} />);
    rerender(<Modal {...defaultProps} isOpen={false} />);
    expect(document.body).not.toHaveClass("overflow-hidden");
  });
});
