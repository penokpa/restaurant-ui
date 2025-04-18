import React, { FC } from "react";

import clsx from "clsx";
import { CSSProperties } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { drawerAnimation } from "./drawerAnimation";
import { StyledDrawer } from "./style";
import Overlay from "../Overlay";

export type DrawerPosition = "left" | "right" | "top" | "bottom";

export interface DrawerProps {
  open: boolean;
  position?: DrawerPosition;
  size?: "fullscreen" | "auto";
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
  width?: number | string;
}

const MotionDrawer = motion(StyledDrawer);

const Drawer: FC<DrawerProps> = ({
  open,
  children,
  className,
  position = "left",
  onClose,
  top = 0,
  size = "fullscreen",
  drawerZindex = 1,
  overlayZindex = 11,
  overlayColor,
  overlayOpacity,
  style,
  drawerTestId,
  width = "100%",
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
    <AnimatePresence>
      {open && (
        <>
          <Overlay
            zIndex={overlayZindex}
            opacity={overlayOpacity}
            color={overlayColor}
            position="fixed"
          />
          <MotionDrawer
            animate="open"
            data-testid={drawerTestId || "drawer-wrapper"}
            exit="closed"
            initial="closed"
            className={clsx(className, position)}
            transition={{ ease: "linear", duration: 0.3 }}
            variants={drawerAnimation(450, position)}
            $size={size}
            $top={top}
            $zIndex={drawerZindex}
            $width={width}
            style={style}
          >
            <div
              className="drawer-toggle"
              onClick={onClose}
              data-testid="overlay-wrapper"
            />
            {children}
          </MotionDrawer>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
