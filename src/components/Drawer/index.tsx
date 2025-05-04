import React, { FC } from "react";

import clsx from "clsx";
import { CSSProperties } from "styled-components";

import { StyledDrawer } from "./style";
import Overlay from "../Overlay";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  overlay?: boolean;
  children: React.ReactNode;
  className?: string;
  top?: number;
  drawerZindex?: number;
  overlayZindex?: number;
  overlayOpacity?: number;
  overlayColor?: string;
  style?: CSSProperties;
  drawerTestId?: string;
}

const Drawer: FC<DrawerProps> = ({
  open,
  children,
  className,
  onClose,
  top = 0,
  drawerZindex = 1,
  overlayZindex = 11,
  overlayColor,
  overlayOpacity,
  style,
  drawerTestId,
}) => {
  React.useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <StyledDrawer
      $top={top}
      $zIndex={drawerZindex}
      className={clsx("drawer-wrapper", className, { "drawer-open": !!open })}
      data-testid="drawer-wrapper-test-id"
    >
      {open && (
        <Overlay
          zIndex={overlayZindex}
          opacity={overlayOpacity}
          color={overlayColor}
          position="fixed"
        />
      )}
      <div
        data-testid={drawerTestId || "drawer-wrapper"}
        style={style}
        className="drawer-inner-wrapper"
      >
        <div
          className="drawer-out-side-click-hanlder"
          onClick={onClose}
          data-testid="overlay-wrapper"
        />
        {children}
      </div>
    </StyledDrawer>
  );
};

export default Drawer;
