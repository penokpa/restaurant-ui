import React from "react";

import { getFoodIcon } from "@/utils/get-food-icon";
import Typography from "@/components/Typography";

import { StyledDiv } from "./style";

export type MenuListProps = {
  name: string;
  description?: string;
  price: string;
  food_type?: Array<"box" | "leaf" | "kids" | "vegan" | "new">;
};

const MenuList = ({ name, description, price, food_type }: MenuListProps) => {
  const icon = getFoodIcon(food_type);
  return (
    <StyledDiv data-testid={`menu-item-${name}`}>
      <div className="dish-group">
        <Typography as="h6" className="food-title" testId="food-name-test-id">
          {icon.map((x, i) => (
            <span
              className="food-icon"
              title={x.type}
              key={i}
              data-testid="food-icon-test-id"
            >
              {x.icon}
            </span>
          ))}
          {name}
        </Typography>

        <Typography
          as="subtitle2"
          className="food-description"
          testId="food-description-test-id"
        >
          {description}
        </Typography>
      </div>
      <div className="price-group">
        <Typography as="span" testId="food-price-test-id">
          {price}
        </Typography>
      </div>
    </StyledDiv>
  );
};

export default MenuList;
