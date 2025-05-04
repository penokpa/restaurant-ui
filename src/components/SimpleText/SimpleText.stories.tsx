import type { Meta, StoryObj } from "@storybook/react";

import SimpleText from "./index";

/**
 * SimpleText is a versatile text component that can be rendered as various HTML elements.
 * It provides a consistent way to display text content with optional styling and test IDs.
 *
 * ## Features
 * - Multiple HTML element options (h1-h6, p, span)
 * - Custom styling support. predefine class menu-overview-title
 * - Test ID support for testing
 * - Responsive layout integration
 *
 * @component
 * @example
 * ```tsx
 * <SimpleText
 *   text="Welcome to our restaurant"
 *   as="h1"
 *   className="text-primary"
 *   testId="welcome-text"
 * />
 * ```
 */
const meta = {
  title: "Components/SimpleText",
  component: SimpleText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text content to display",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      description: "The HTML tag to use for the text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h2" },
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
    testId: {
      control: "text",
      description: "Test ID for testing purposes",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof SimpleText>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default SimpleText component rendered as an h2 heading.
 * This is the most common use case for the component.
 */
export const Default: Story = {
  args: {
    text: "This is a simple text component",
    as: "h2",
  },
};
