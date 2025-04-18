import React, { ReactElement } from "react";

import clsx from "clsx";

import Link from "@/components/Link";
import defaultLogo from "@/assets/image/logo.png";

import HamburgerMenuIcon from "../HamburgerIcon";
import { StyledDiv } from "./style";
import ImageWithFallBack from "../ImageWithFallBack";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Drawer from "../Drawer";
import { NavLinkType } from "./types/header.types";
import HeaderMenu from "./components/HeaderMenu";

export type HeaderProps = {
  navLink: NavLinkType;
  logo?: string;
  shouldLogoFloat?: boolean;
  isLogoRounded?: boolean;
  LinkComponent?: ReactElement;
  boxShadowOnLogo?: boolean;
  headerHeight?: string;
  navColor?: string;
  navHoverColor?: string;
  navActiveColor?: string;
  headerBgColor?: string;
  logoWidth?: string;
  logoHeight?: string;
  className?: string;
};

const Header = ({
  logo,
  navLink,
  LinkComponent,
  shouldLogoFloat = false,
  isLogoRounded = false,
  boxShadowOnLogo = false,
  headerHeight,
  navColor,
  navHoverColor,
  navActiveColor,
  headerBgColor,
  logoWidth,
  logoHeight,
  className,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false);

  React.useEffect(() => {
    const detectScroll = () => {
      setIsHeaderSticky(window.scrollY >= 73);
    };

    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  return (
    <>
      <StyledDiv
        id="header"
        data-testid="header"
        className={clsx(className, {
          sticky: isHeaderSticky,
          showBoxShadow: !isMenuOpen,
        })}
        $headerheight={headerHeight}
        $navcolor={navColor}
        $navhovercolor={navHoverColor}
        $navactivecolor={navActiveColor}
        $logowidth={logoWidth}
        $logoheight={logoHeight}
      >
        <Container fluid>
          <Row>
            <Col>
              <div className="header-wrapper" data-testid="header-wrapper-id">
                <Link
                  to="/"
                  LinkComponent={LinkComponent}
                  className={clsx("logo-wrapper", {
                    "float-logo": !!shouldLogoFloat,
                    circle: !!isLogoRounded,
                    "box-shadow": !!boxShadowOnLogo,
                  })}
                  testId="header-logo-wrapper"
                >
                  <ImageWithFallBack
                    src={logo || defaultLogo}
                    alt="sherpa kitchen logo"
                    testId="header-logo"
                  />
                </Link>
                <nav className="menu-wrapper" data-testid="header-menu-wrapper">
                  <ul>
                    {navLink.map((x, i) => {
                      if (typeof window === "undefined") return;
                      const { pathname = "" } = window?.location || "";

                      const active = pathname === x.url;
                      return (
                        <li
                          className={clsx("menu-list", { active })}
                          key={i}
                          data-testid="menu-list-id"
                        >
                          <Link to={x.url} LinkComponent={LinkComponent}>
                            {x.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <HamburgerMenuIcon
                    isMenuOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  />
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledDiv>
      <Drawer
        className="search-drawer"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        size="fullscreen"
        position="top"
        drawerZindex={9}
        overlayZindex={5}
        drawerTestId="header-drawer"
      >
        <HeaderMenu
          navLink={navLink}
          LinkComponent={LinkComponent}
          headerBgColor={headerBgColor}
          navColor={navColor}
          navHoverColor={navHoverColor}
          navActiveColor={navActiveColor}
        />
      </Drawer>
    </>
  );
};

export default Header;
