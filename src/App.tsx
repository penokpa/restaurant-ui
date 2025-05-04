import React from "react";

import Header from "@/components/Header";

import SectionBgImage from "./components/SectionBgImage";
import OurStory from "./components/OurStory";
import OpeningHours from "./components/OpeningHours";
import Footer from "./components/Footer";
import { theme } from "./theme";

const navLink = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Menu",
    url: "/menu",
  },
  {
    label: "Gallery",
    url: "/gallery",
  },
  {
    label: "Order Online",
    url: "/order-online",
  },

  {
    label: "Contact Us",
    url: "/contact-us",
  },
];

const App: React.FC = () => {
  return (
    <>
      <Header
        navLink={navLink}
        navActiveColor={theme.color.primary}
        navHoverColor={theme.color.primary}
      />
      <SectionBgImage
        title="SectionBgImage Component"
        description="Section Bg Image description"
      />
      <OurStory
        description="Story Description"
        subTitle="Story Subtitle"
        title="OurStory Component"
      />

      <OpeningHours
        hoursTitle="OpeningHours Component"
        address="Address test"
        dinnerTime="Dinner Time"
        lastTableSeated="Last table seated"
        lunchTime="Lunch time"
        openInformation="Open Information"
        orderOnlineUrl="#"
        phoneNumber="Phone Number"
        linkTextColor="red"
        textColor="yellow"
      />

      <Footer
        footerText="FooterComponent"
        facebookLink="asdasd"
        yelpLink="asda"
        iconRadius
      />
    </>
  );
};

export default App;
