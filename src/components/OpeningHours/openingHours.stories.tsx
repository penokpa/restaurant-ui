import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import OpeningHours from "./index";

/**
 * OpeningHours Component
 *
 * A component that displays restaurant operating hours, contact information, and ordering options.
 * Features include:
 * - Lunch and dinner time display
 * - Last seating time information
 * - Order online button with customizable label
 * - Location with Google Maps link
 * - Phone number with click-to-call
 * - Customizable hours title
 * - Customize the text and link text color
 * - Customize btn color
 * - Toggle overlay feature
 * - Custom background image
 * - Responsive design
 *
 * @example
 * ```tsx
 * <OpeningHours
 *   lunchTime="11:00 AM - 3:00 PM"
 *   dinnerTime="5:00 PM - 10:00 PM"
 *   openInformation="Open for dine-in and takeout"
 *   lastTableSeated="Last table seated at 9:30 PM"
 *   orderOnlineUrl="https://example.com/order"
 *   address="123 Restaurant St"
 *   phoneNumber="+1 234 567 8900"
 *   orderBtnLabel="ORDER ONLINE"
 *   hoursTitle="Hours:"
 *   bgImage="/background-image.png"
 *   textColor="#000"
 *   linkTextColor="#000"
 *   btnColor="#000"
 *   btnBgColor="#000"
 *   enableOverlay
 * />
 * ```
 */
const meta = {
  title: "Components/OpeningHours",
  component: OpeningHours,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    lunchTime: {
      control: "text",
      description: "Lunch service hours",
      table: {
        type: { summary: "required" },
      },
    },
    dinnerTime: {
      control: "text",
      description: "Dinner service hours",
      table: {
        type: { summary: "required" },
      },
    },
    openInformation: {
      control: "text",
      description: "Additional opening information",
      table: {
        type: { summary: "required" },
      },
    },
    lastTableSeated: {
      control: "text",
      description: "Last table seating time information",
      table: {
        type: { summary: "required" },
      },
    },
    orderOnlineUrl: {
      control: "text",
      description: "URL for online ordering",
      table: {
        type: { summary: "required" },
      },
    },
    address: {
      control: "text",
      description: "Restaurant address",
      table: {
        type: { summary: "required" },
      },
    },
    phoneNumber: {
      control: "text",
      description: "Contact phone number",
      table: {
        type: { summary: "required" },
      },
    },
    orderBtnLabel: {
      control: "text",
      description: "Custom label for the order button",
      table: {
        type: { summary: "required" },
      },
    },
    hoursTitle: {
      control: "text",
      description: "Custom title for the hours section",
      table: {
        type: { summary: "required" },
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
    enbaleOverlay: {
      control: "boolean",
      description: "Background overlay",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "false" },
      },
    },
    textColor: {
      control: "text",
      description: "Color of normal text. Not link text",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#000" },
      },
    },
    linkTextColor: {
      control: "text",
      description: "Color of link text. Not normal text",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#000" },
      },
    },
    btnColor: {
      control: "text",
      description: "Color of button text",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#000" },
      },
    },
    btnBgColor: {
      control: "text",
      description: "Background button color",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#000" },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof OpeningHours>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  lunchTime: "11:00 AM - 3:00 PM",
  dinnerTime: "5:00 PM - 10:00 PM",
  openInformation: "Open for dine-in and takeout",
  lastTableSeated: "Last table seated at 9:30 PM",
  orderOnlineUrl: "https://example.com/order",
  address: "123 Restaurant St, City, Country",
  phoneNumber: "+1 234 567 8900",
  orderBtnLabel: "ORDER ONLINE",
  hoursTitle: "Hours:",
};

/**
 * Interactive playground for the OpeningHours component.
 * Use the controls panel to experiment with different props.
 */
export const OpeningHoursPlayground: Story = {
  args: defaultProps,
  tags: ["!autodocs"],
};

/**
 * Default OpeningHours with all features enabled
 */
export const Default: Story = {
  args: defaultProps,
  tags: ["!dev"],
};

/**
 * OpeningHours with custom button label and hours title
 */
export const CustomLabels: Story = {
  args: {
    ...defaultProps,
    orderBtnLabel: "RESERVE A TABLE",
    hoursTitle: "Our Operating Hours:",
  },
  tags: ["!dev"],
};

/**
 * OpeningHours with custom text color
 */
export const CustomTextColor: Story = {
  args: {
    lunchTime: "11:00 AM - 3:00 PM",
    dinnerTime: "5:00 PM - 10:00 PM",
    openInformation: "Open for dine-in",
    lastTableSeated: "Last table seated at 9:30 PM",
    orderOnlineUrl: "https://example.com/order",
    address: "123 Restaurant St",
    phoneNumber: "+1 234 567 8900",
    textColor: "#ff8a33",
    linkTextColor: "#5e4933",
    btnBgColor: "#5e4933",
    btnColor: "#ff8a33",
  },
  tags: ["!dev"],
};
