import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers";

import PageNotFound from "./index";

/**
 * Page not found is a component that displays a 404 error page with customizable content and styling.
 * It provides a consistent way to show error pages with optional status code, title, message, and button.
 *
 * ## Features
 * - Customizable status code
 * - Customizable error title and message
 * - Customizable button label
 * - Custom background and text colors
 * - Responsive design
 *
 * ## Usage
 * ```tsx
 * <PageNotFound
 *   statusCode="404"
 *   errorTitle="Page Not Found"
 *   errormsg="Sorry, we couldn't find what you were looking for."
 *   btnLabel="BACK TO HOME"
 * />
 * ```
 */
const meta = {
  title: "Components/PageNotFound",
  component: PageNotFound,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    statusCode: {
      control: "text",
      description: "Error status code to display",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "404" },
      },
    },
    errorTitle: {
      control: "text",
      description: "Error title to display",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Page Not Found" },
      },
    },
    errormsg: {
      control: "text",
      description: "Error message to display",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "Sorry 😔, we couldn't find what you were looking for.",
        },
      },
    },
    btnLabel: {
      control: "text",
      description: "Label for the back button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "BACK TO HOME" },
      },
    },
    bgColor: {
      control: "color",
      description: "Background color for the error page",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    textColor: {
      control: "color",
      description: "Text color for the error page",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    btnBgColor: {
      control: "color",
      description: "Button background color for the error page",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    btnTextColor: {
      control: "color",
      description: "Button text color for the error page",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof PageNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PagenotfoundPlayground: Story = {
  args: {
    statusCode: "404",
    errorTitle: "Page Not Found",
    errormsg: "Sorry 😔, we couldn't find what you were looking for.",
    btnLabel: "BACK TO HOME",
  },
  tags: ["!autodocs"],
};

export const Default: Story = {
  args: {
    statusCode: "404",
    errorTitle: "Page Not Found",
    errormsg: "Sorry 😔, we couldn't find what you were looking for.",
    btnLabel: "BACK TO HOME",
  },
  tags: ["!dev"],
};

export const CustomContent: Story = {
  args: {
    statusCode: "500",
    errorTitle: "Server Error",
    errormsg: "Something went wrong on our end. Please try again later.",
    btnLabel: "REFRESH PAGE",
  },
  tags: ["!dev"],
};

export const CustomStyling: Story = {
  args: {
    statusCode: "404",
    errorTitle: "Page Not Found",
    errormsg: "Sorry 😔, we couldn't find what you were looking for.",
    btnLabel: "BACK TO HOME",
    bgColor: "#f5f5f5",
    textColor: "#55FA33",
    btnBgColor: "#55FA33",
  },
  tags: ["!dev"],
};
