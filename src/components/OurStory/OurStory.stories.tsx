import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import OurStory from "./index";

/**
 * OurStory component displays the restaurant's story with title, subtitle, and description.
 *
 * ## Features
 * - Displays a main title (optional)
 * - Optional subtitle
 * - Formatted description with support for line breaks (optional)
 * - Responsive layout
 * - Clean and modern design
 * - Custom title, subtitle and description color
 * - Optional fluid container width
 *
 * ## Usage
 * ```tsx
 * // Basic usage with all props
 * <OurStory
 *   storyTitle="Our Story"
 *   storySubTitle="Discover Our Journey"
 *   storyDescription="Welcome to our restaurant..."
 *   titleColor="#000"
 *   descriptionColor="#000"
 *   subTitleColor="#000"
 *   containerFluid
 * />
 * ```
 */
const meta = {
  title: "Components/OurStory",
  component: OurStory,
  parameters: {
    layout: "fullscreen",
    docs: {
      autodocs: true,
    },
    options: {
      showPanel: true,
    },
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
      description: "The main title of the story section (optional)",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "optional" },
      },
    },
    subTitle: {
      control: "text",
      description: "Optional subtitle for the story section",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "optional" },
      },
    },
    description: {
      control: "text",
      description:
        "The main content of the story, supports line breaks with \n (optional)",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "optional" },
      },
    },
    descriptionColor: {
      control: "text",
      description: "Description text color",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#000" },
      },
    },
    titleColor: {
      control: "text",
      description: "Title text color",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#000" },
      },
    },
    subTitleColor: {
      control: "text",
      description: "Subtitle text color",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#000" },
      },
    },
    containerFluid: {
      control: "boolean",
      description: "Whether the container should be fluid (full width)",
      defaultValue: false,
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof OurStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OurstoryPlayground: Story = {
  args: {
    title: "Our Story",
    subTitle: "Discover Our Journey",
    description:
      "Welcome to our restaurant, where passion meets culinary excellence. Our journey began in 2010 with a simple dream: to create memorable dining experiences.\n\nOver the years, we've grown from a small family-owned establishment to a beloved destination for food enthusiasts. Our commitment to quality ingredients and innovative cooking techniques remains unchanged.\n\nToday, we continue to write our story, one delicious dish at a time.",
  },
  tags: ["!autodocs"],
};

export const Default: Story = {
  args: {
    title: "Our Story",
    subTitle: "Discover Our Journey",
    description:
      "Welcome to our restaurant, where passion meets culinary excellence. Our journey began in 2010 with a simple dream: to create memorable dining experiences.\n\nOver the years, we've grown from a small family-owned establishment to a beloved destination for food enthusiasts. Our commitment to quality ingredients and innovative cooking techniques remains unchanged.\n\nToday, we continue to write our story, one delicious dish at a time.",
  },
  tags: ["!dev"],
};

export const WithCustomColor: Story = {
  args: {
    title: "Our Story",
    subTitle: "Our subtitle story",
    description:
      "Welcome to our restaurant, where passion meets culinary excellence. Our journey began in 2010 with a simple dream: to create memorable dining experiences.",
    descriptionColor: "#ff8a33",
    subTitleColor: "#ff8a33",
    titleColor: "#ff8a33",
    containerFluid: false,
  },
  tags: ["!dev"],
};
