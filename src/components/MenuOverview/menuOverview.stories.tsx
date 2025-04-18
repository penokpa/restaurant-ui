import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import MenuOverview from "./index";

/**
 * MenuOverview component for displaying a collection of menu items.
 *
 * ## Features
 * - Displays a menu section with title
 * - Shows optional menu description
 * - Renders a list of menu items using DisplayMenu component
 * - Memoized for performance
 * - Handles empty menu lists gracefully
 *
 * ## Usage
 * ```tsx
 * // Basic menu section
 * <MenuOverview
 *   menuTitle="Main Courses"
 *   menuDescription="Our signature dishes"
 *   menuList={[
 *     {
 *       name: "Spaghetti Carbonara",
 *       description: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
 *       price: "$15.99",
 *       food_type: ["box", "leaf", "kids", "vegan", "new"] // Each item defines new icon
 *     },
 *     {
 *       name: "Margherita Pizza",
 *       description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
 *       price: "$12.99",
 *       food_type: ["box", "leaf", "kids", "vegan", "new"] // Each item defines new icon
 *     }
 *   ]}
 * />
 * ```
 */
const meta = {
  title: "Components/MenuOverview",
  component: MenuOverview,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
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
    menuTitle: {
      description: "Title of the menu section",
      control: "text",
    },
    menuDescription: {
      description: "Optional description of the menu section",
      control: "text",
    },
    menuList: {
      description: "Array of menu items to display",
      options: [
        {
          name: "Name of food item",
          description: "Details of food",
          price: "Price of food",
          food_type: "Type of foood",
        },
      ],
      control: "object",
    },
  },
} satisfies Meta<typeof MenuOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Menu section with items details.
 * Shows how a complete menu section looks with multiple items.
 * Shows all the food type
 */
export const Default: Story = {
  args: {
    menuTitle: "Main Courses",
    menuDescription: "Our signature dishes",
    menuList: [
      {
        name: "Spaghetti Carbonara",
        description:
          "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
        price: "$15.99",
        food_type: ["box", "kids", "leaf", "new", "vegan"],
      },
    ],
  },
  tags: ["!dev"],
};

/**
 * Interactive playground for the MenuOverview component.
 * All controls are enabled for experimentation.
 */
export const Playground: Story = {
  args: {
    menuTitle: "Main Courses",
    menuDescription: "Our signature dishes",
    menuList: [
      {
        name: "Spaghetti Carbonara",
        description:
          "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
        price: "$15.99",
        food_type: ["new"],
      },
      {
        name: "Margherita Pizza",
        description:
          "Classic pizza with tomato sauce, mozzarella, and fresh basil",
        price: "$12.99",
        food_type: ["new"],
      },
    ],
  },
  tags: ["!autodocs"],
};

/**
 * Menu section with multiple items.
 * Shows how a complete menu section looks with multiple items.
 */
export const MultipleItems: Story = {
  args: {
    menuTitle: "Appetizers",
    menuDescription: "Start your meal with our delicious appetizers",
    menuList: [
      {
        name: "Bruschetta",
        description:
          "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: "$8.99",
      },
      {
        name: "Calamari",
        description: "Crispy fried squid served with marinara sauce",
        price: "$12.99",
      },
      {
        name: "Caesar Salad",
        description:
          "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan",
        price: "$9.99",
      },
    ],
  },
  tags: ["!dev"],
};

/**
 * Menu section without description.
 * Shows how the component handles missing optional description.
 */
export const WithoutDescription: Story = {
  args: {
    menuTitle: "Desserts",
    menuList: [
      {
        name: "Tiramisu",
        description:
          "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
        price: "$7.99",
        food_type: ["new"],
      },
      {
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with a molten center, served with vanilla ice cream",
        price: "$8.99",
        food_type: ["box"],
      },
    ],
  },
  tags: ["!dev"],
};
