import { lazy } from "react";

import { withTheme } from "@/hooks/withTheme";

import Seo from "./Seo";

// Injecting theme provider in the components
const Col = withTheme(lazy(() => import("./Col")));
const SimpleText = withTheme(lazy(() => import("./SimpleText")));
const Container = withTheme(lazy(() => import("./Container")));
const Row = withTheme(lazy(() => import("./Row")));
const Button = withTheme(lazy(() => import("./Button")));
const Header = withTheme(lazy(() => import("./Header")));
const OppeningHours = withTheme(lazy(() => import("./OpeningHours")));
const SectionBgImage = withTheme(lazy(() => import("./SectionBgImage")));
const Overlay = withTheme(lazy(() => import("./Overlay")));
const Footer = withTheme(lazy(() => import("./Footer")));
const OurStory = withTheme(lazy(() => import("./OurStory")));
const ImageGallery = withTheme(lazy(() => import("./ImageGallery")));
const ContactForm = withTheme(lazy(() => import("./ContactForm")));
const Map = withTheme(lazy(() => import("./Map")));
const InputField = withTheme(lazy(() => import("./InputField")));
const Modal = withTheme(lazy(() => import("./Modal")));
const InputTextArea = withTheme(lazy(() => import("./InputTextArea")));
const VideoBanner = withTheme(lazy(() => import("./VideoBanner")));
const PageNotFound = withTheme(lazy(() => import("./PageNotFound")));
const MenuOverview = withTheme(lazy(() => import("./MenuOverview")));
const Typography = withTheme(lazy(() => import("./Typography")));
const ImageWithFallBack = withTheme(lazy(() => import("./ImageWithFallBack")));

const Link = lazy(() => import("./Link"));

export {
  Button,
  Header,
  OppeningHours,
  SectionBgImage,
  Overlay,
  Container,
  Row,
  Col,
  Typography,
  Link,
  Footer,
  OurStory,
  ImageGallery,
  ContactForm,
  Map,
  InputField,
  InputTextArea,
  ImageWithFallBack,
  MenuOverview,
  SimpleText,
  Seo,
  Modal,
  VideoBanner,
  PageNotFound,
};

// Export types
export type { SectionBgImageProps } from "./SectionBgImage";
export type { ButtonProps } from "./Button";
export type { ColProps } from "./Col";
export type { ContainerProps } from "./Container";
export type { DrawerProps } from "./Drawer";
export type { FooterProps } from "./Footer";
export type { HamBurgerMenuIconProps } from "./HamburgerIcon";
export type { HeaderProps } from "./Header";
export type { ImageWithFallBackProps } from "./ImageWithFallBack";
export type { OppeningHoursProps } from "./OpeningHours";
export type { OverlayProps } from "./Overlay";
export type { RowProps } from "./Row";
export type { TypographyProps } from "./Typography";
export type { LinkProps } from "./Link";
export type { OurStoryProps } from "./OurStory";
export type { ImageGalleryProps } from "./ImageGallery";
export type { ContactFormProps } from "./ContactForm";
export type { MapProps } from "./Map";
export type { InputFieldProps } from "./InputField";
export type { InputTextAreaProps } from "./InputTextArea";
export type { MenuOverviewProps } from "./MenuOverview";
export type { MenuListProps } from "./MenuOverview/MenuList";
export type { SimpleTextProps } from "./SimpleText";
export type { ModalProps } from "./Modal";
export type { VideoBannerProps } from "./VideoBanner";
export type { PageNotFoundProps } from "./PageNotFound";
