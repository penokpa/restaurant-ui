import { useState } from "react";

import type { Meta } from "@storybook/react";

import { ThemeProvider } from "@/providers";

import Modal from "./index";
import Button from "../Button";

type ModalProps = {
  title?: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
  loader?: boolean;
  overlayClick?: boolean;
  search?: React.ReactNode;
};

/**
 * The Modal component is a flexible dialog component that can be used to display content in a popup window.
 * It's particularly useful for:
 * - Displaying forms or content that requires user attention
 * - Showing additional information without navigating away
 * - Confirming user actions
 * - Displaying search results or filters
 *
 * ## Features
 * - Customizable title
 * - Optional search component
 * - Loading state
 * - Customizable width
 * - Outside click to close
 * - Body scroll lock when open
 *
 * ## Usage
 * ```tsx
 * <Modal
 *   isOpen={true}
 *   onClose={() => {}}
 *   title="Modal Title"
 *   maxWidth="820px"
 * >
 *   <p>Modal content goes here</p>
 * </Modal>
 * ```
 */
const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the modal is visible",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClose: {
      action: "closed",
      description: "Function called when the modal is closed",
      table: {
        type: { summary: "() => void" },
      },
    },
    title: {
      control: "text",
      description: "Title displayed at the top of the modal",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    maxWidth: {
      control: "text",
      description: "Maximum width of the modal",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "820px" },
      },
    },
    loader: {
      control: "boolean",
      description: "Shows a loading state in the modal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

// Wrapper component to handle modal state
const ModalWrapper = (args: Omit<ModalProps, "isOpen" | "onClose">) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const ModalPlayground = {
  render: (args: ModalProps) => <ModalWrapper {...args} />,
  args: {
    title: "Default Modal",
    children: <p>This is the default modal content.</p>,
  },
  tags: ["!autodocs"],
};

export const Default = {
  render: (args: ModalProps) => <ModalWrapper {...args} />,
  args: {
    title: "Default Modal",
    children: <p>This is the default modal content.</p>,
  },
  tags: ["!dev"], //Hide is storybook navbar
};
