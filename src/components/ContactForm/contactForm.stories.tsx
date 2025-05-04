import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import ContactForm from "./index";

/**
 * The Contact Form component is a comprehensive contact section that combines a contact form with contact information display.
 * It's designed to provide multiple ways for users to get in touch with the restaurant.
 *
 * ## Features
 * - Contact form with name, email, and message fields
 * - Display of contact information (email, phone, address)
 * - Customizable icons for contact methods
 * - Responsive layout
 * - Form validation
 *
 * ## Usage
 * ```tsx
 * import { ContactForm } from "restaurant-ui";
 *
 * <ContactForm
 *   email="contact@restaurant.com"
 *   phoneNumber="+1 (555) 123-4567"
 *   address="123 Main Street, City, Country"
 *   contactFormTitle="We are located at:"
 * />
 * ```
 *
 * ## Props
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | email | string | - | Email address for contact |
 * | phoneNumber | string | - | Phone number for contact |
 * | address | string | - | Physical address of the restaurant |
 * | contactFormTitle | string | "We are located at:" | Title for the contact information section |
 * | emailIcon | string | default email icon | Custom email icon URL |
 * | phoneIcon | string | default phone icon | Custom phone icon URL |
 * | addressIcon | string | default address icon | Custom address icon URL |
 *
 * ## Examples
 *
 * ### Basic Usage
 * Shows all contact information with default styling.
 *
 * ### Email Only
 * Displays only the email contact information.
 *
 * ### Phone Only
 * Shows only the phone number contact information.
 *
 * ### Address Only
 * Displays only the physical address information.
 *
 * ### Custom Title
 * Demonstrates how to customize the contact information section title.
 *
 * ## Notes
 * - The component includes built-in form validation for the contact form
 * - All contact methods (email, phone, address) are optional
 * - The component is fully responsive and adapts to different screen sizes
 * - Icons can be customized by providing custom URLs
 *
 */
const meta = {
  title: "Components/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    email: {
      control: "text",
      description: "Email address for contact",
    },
    phoneNumber: {
      control: "text",
      description: "Phone number for contact",
    },
    address: {
      control: "text",
      description: "Physical address of the restaurant",
    },
    contactFormTitle: {
      control: "text",
      description: "Title for the contact information section",
    },
    emailIcon: {
      control: "text",
      description: "Custom email icon URL",
    },
    phoneIcon: {
      control: "text",
      description: "Custom phone icon URL",
    },
    addressIcon: {
      control: "text",
      description: "Custom address icon URL",
    },
    onlyShowContactForm: {
      control: "boolean",
      description: "Only shows the contact form",
    },
  },
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactformPlayground: Story = {
  args: {
    email: "contact@restaurant.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "123 Main Street, City, Country",
    contactFormTitle: "Get in touch with us:",
  },
  tags: ["!autodocs"],
};

/**
 * Default story showing all contact information with default styling.
 * This is the most common use case for the ContactForm component.
 */
export const Default: Story = {
  args: {
    email: "contact@restaurant.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "123 Main Street, City, Country",
    contactFormTitle: "We are located at:",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Button customization in form showing different button value.
 */
export const ContactFormButtonCustomize: Story = {
  args: {
    email: "contact@restaurant.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "123 Main Street, City, Country",
    contactFormTitle: "We are located at:",
    btnLabel: "Test Label",
    btnBgColor: "grey",
    btnColor: "black",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Story demonstrating the ContactForm with only email contact information.
 * Useful for cases where email is the primary contact method.
 */
export const EmailOnly: Story = {
  args: {
    email: "contact@restaurant.com",
    contactFormTitle: "Contact us via email:",
    phoneNumber: "",
    address: "",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Story showing the ContactForm with only phone contact information.
 * Ideal for businesses that prefer phone communication.
 */
export const PhoneOnly: Story = {
  args: {
    phoneNumber: "+1 (555) 123-4567",
    contactFormTitle: "Call us at:",
    email: "",
    address: "",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Story displaying the ContactForm with only address information.
 * Perfect for businesses that want to highlight their physical location.
 */
export const AddressOnly: Story = {
  args: {
    address: "123 Main Street, City, Country",
    contactFormTitle: "Visit us at:",
    email: "",
    phoneNumber: "",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Story showcasing how to customize the contact information section title.
 * Demonstrates the flexibility of the component's text content.
 */
export const CustomTitle: Story = {
  args: {
    email: "contact@restaurant.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "123 Main Street, City, Country",
    contactFormTitle: "Get in touch with us:",
  },
  tags: ["!dev"], //Hide is storybook navbar
};
