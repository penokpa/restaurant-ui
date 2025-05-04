import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers";

import VideoBanner from "./index";

/**
 * The VideoBanner component is a flexible video thumbnail display that opens a YouTube video in a modal. It's particularly useful for:
 * - Displaying video previews
 * - Embedding YouTube videos
 * - Creating interactive video thumbnails
 *
 * ## Features
 * - YouTube video integration
 * - Modal video player
 * - Play button overlay
 * - Responsive design
 * - toggle the interactive playicon and overlay
 * - Customize the background image
 * - Customize the section height
 * - Custom classname supports to override the default css
 *
 * ## Usages
 * ```tsx
 * <VideoBanner
 *  videoId="dQw4w9WgXcQ"
 *  customClassName = "custom-class-name"
 *  sectionHeight = "80vh"
 *  showPlayIcon
 *  overlay
 * />
 * ```
 */
const meta = {
  title: "Components/VideoBanner",
  component: VideoBanner,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    videoId: {
      control: "text",
      description: "YouTube video ID to display",
      table: {
        type: { summary: "required" },
        defaultValue: { summary: "required" },
      },
    },
    bgImage: {
      control: "text",
      description: "Section background image",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "fallback image" },
      },
    },
    showPlayIcon: {
      control: "boolean",
      description: "Interactive play icon",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "false" },
      },
    },
    overlay: {
      control: "boolean",
      description: "overlay for the background image",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "false" },
      },
    },
    sectionHeight: {
      control: "text",
      description: "height of the section. Value must be in string",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "80vh" },
      },
    },
    customClassName: {
      control: "text",
      description: "Custom class name to override the css",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
  },
} satisfies Meta<typeof VideoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoId: "dQw4w9WgXcQ",
    showPlayIcon: true,
    overlay: true,
  },
  tags: ["!dev"],
};

export const VideobannerPlayground: Story = {
  args: {
    videoId: "dQw4w9WgXcQ",
    showPlayIcon: true,
    overlay: true,
  },
  tags: ["!autodocs"],
};
