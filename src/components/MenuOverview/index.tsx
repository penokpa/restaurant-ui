import React from "react";

import { StyledDiv } from "./style";
import Typography from "../Typography";
import MenuList, { MenuListProps } from "./MenuList";

export type MenuOverviewProps = {
  menuTitle: string;
  menuList: Array<MenuListProps>;
  menuDescription?: string;
};

const MenuOverview = ({
  menuList,
  menuTitle,
  menuDescription,
}: MenuOverviewProps) => {
  if (!menuList.length) return null;

  return (
    <StyledDiv
      data-testid="menu-details-test-id"
      className="menu-overiew-wrapper"
    >
      <div className="menu-overview-title-wrapper">
        <Typography as="h3" testId="menu-title-test-id">
          {menuTitle}
        </Typography>
        {menuDescription && (
          <Typography as="subtitle2" testId="menu-description-test-id">
            {menuDescription}
          </Typography>
        )}
      </div>
      <div className="menu-list-wrapper" data-testid="diplay-menu-test-wrapper">
        {menuList.map((item, i) => {
          return <MenuList {...item} key={i} />;
        })}
      </div>
    </StyledDiv>
  );
};

export default MenuOverview;
