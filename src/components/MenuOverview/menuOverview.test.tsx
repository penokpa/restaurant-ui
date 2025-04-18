import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "@/utils/render";

import MenuOverview from "./index";
import { MenuListProps } from "./MenuList";

// Define the mock component first
const MockMenuItem = ({ menuItemList }: { menuItemList: MenuListProps[] }) => (
  <div data-testid="diplay-menu-test-wrapper">
    {menuItemList.map((item) => (
      <div key={item.name} data-testid={`menu-item-${item.name}`}>
        {item.name}
      </div>
    ))}
  </div>
);

// Then set up the mock
vi.mock("@/components/MenuOverview/MenuItemList", () => ({
  __esModule: true,
  default: MockMenuItem,
}));

describe("MenuOverview", () => {
  const mockMenuItemList: MenuListProps[] = [
    {
      name: "Spaghetti Carbonara",
      description:
        "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
      price: "$15.99",
      food_type: ["box", "leaf", "kids", "vegan", "new"],
    },
    {
      name: "Margherita Pizza",
      description:
        "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      price: "$12.99",
      food_type: ["box", "leaf", "kids", "vegan", "new"],
    },
  ];

  it("renders menu title and description correctly", () => {
    render(
      <MenuOverview
        menuTitle="Main Courses"
        menuDescription="Our signature dishes"
        menuList={mockMenuItemList}
      />,
    );

    expect(screen.getByText("Main Courses")).toBeInTheDocument();
    expect(screen.getByText("Our signature dishes")).toBeInTheDocument();
  });

  it("renders menu items through DisplayMenu component", () => {
    render(
      <MenuOverview
        menuTitle="Main Courses"
        menuDescription="Our signature dishes"
        menuList={mockMenuItemList}
      />,
    );

    const displayMenu = screen.getByTestId("diplay-menu-test-wrapper");
    expect(displayMenu).toBeInTheDocument();

    mockMenuItemList.forEach((item) => {
      expect(screen.getByTestId(`menu-item-${item.name}`)).toBeInTheDocument();
    });
  });

  it("renders without description when not provided", () => {
    render(<MenuOverview menuTitle="Desserts" menuList={mockMenuItemList} />);

    expect(screen.getByTestId("menu-title-test-id")).toBeInTheDocument();
    expect(screen.getByTestId("diplay-menu-test-wrapper")).toBeInTheDocument();
  });

  it("passes correct menu list to DisplayMenu component", () => {
    render(
      <MenuOverview
        menuTitle="Main Courses"
        menuDescription="Our signature dishes"
        menuList={mockMenuItemList}
      />,
    );

    mockMenuItemList.forEach((item) => {
      expect(screen.getByTestId(`menu-item-${item.name}`)).toHaveTextContent(
        item.name,
      );
    });
  });
});
