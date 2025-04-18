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
    <StyledDiv data-testId="menu-details-test-id">
      <div className="menu-title-wrapper">
        <Typography as="h3" className="menu-title" testId="menu-title-test-id">
          {menuTitle}
        </Typography>
        {menuDescription && (
          <Typography
            as="subtitle2"
            className="dish-note-content"
            testId="menu-description-test-id"
          >
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

export default React.memo(MenuOverview);
