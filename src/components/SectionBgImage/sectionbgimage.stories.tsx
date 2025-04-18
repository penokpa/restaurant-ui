import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import SectionBgImage from "./index";

/**
 * Section with background image component that creates visually rich sections.
 *
 * ## Features
 * - Custom background image with overlay for better text contrast
 * - Responsive layout that works on all screen sizes
 * - Flexible heading level(h1-h6) through 'as' prop
 * - Optional description text
 * - Toggle overlay to ensure text readability
 * - Override title and description color
 * - Customize the height of the section
 *
 * ## Usage
 * ```tsx
 * // Basic usage with just title
 * <SectionBgImage
 *  title="Section title"
 *  bgImage="https://example.com/image.jpg"
 *  as="h1"
 *  sectionHeight="600px"
 *  titleColor="#000"
 *  descriptionColor="#000"
 *  enableOverlay
 * />
 *
 * ```
 */
const meta = {
  title: "Components/SectionBgImage",
  component: SectionBgImage,
  parameters: {
    layout: "fullscreen", //Changed to fullscreen to better showcase the section
    viewMode: "docs",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "Main heading text for the section",
      table: {
        type: { summary: "requried" },
        defaultValue: { summary: "required" },
      },
    },
    bgImage: {
      control: "text",
      description: "URL of the background image to display",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "fallback image" },
      },
    },

    description: {
      control: "text",
      description: "Optional subheading text displayed below the title",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "HTML heading level for the title",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "h1" },
      },
    },
    enableOverlay: {
      control: "boolean",
      description: "Enable the overlay in whole section",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "false" },
      },
    },
    titleColor: {
      control: "text",
      description: "Override the color for the title",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#fff" },
      },
    },
    descriptionColor: {
      control: "text",
      description: "Override the color for the description",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#fff" },
      },
    },
    sectionHeight: {
      control: "text",
      description: "Customize the height of the section",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "600px" },
      },
    },
  },
} satisfies Meta<typeof SectionBgImage>;

export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Interactive playground for the SectionBgImage component.
 * Adjust the controls to see different configurations.
 */

export const SectionPlayground: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "Section Title",
    description: "Discover what we can do for you",
  },
  tags: ["!autodocs"],
};
/**
 * Default section with background image.
 * Shows the basic usage with just a title.
 */
export const Default: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "Welcome to Our Site",
    description: "Discover what we can do for you",
  },
  tags: ["!dev"],
};

/**
 * Default section with background image.
 * enable overlay feature
 */
export const WithOverlay: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "Welcome to Our Site",
    description: "Discover what we can do for you",
    enableOverlay: true,
  },
  tags: ["!dev"],
};

/**
 * Default section with fallback background image.
 */
export const WithFallbackimage: Story = {
  args: {
    title: "Welcome to Our Site",
    description: "Discover what we can do for you",
  },
  tags: ["!dev"],
};

/**
 * Section with custom heading and color.
 */
export const WithCustomColor: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "About Our Company",
    description: "Description",
    as: "h2",
    titleColor: "#ff8a33",
    descriptionColor: "#ff8a33",
  },
  tags: ["!dev"],
  name: "With Custom Heading Level",
};
