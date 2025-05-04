import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typography from "../Typography";
import Button from "../Button";
import ImageWithFallBack from "../ImageWithFallBack";
import defaultLocationIcon from "../../assets/icons/location-pin.png";
import defaultPhoneIcon from "../../assets/icons/phone-call.png";
import { StyledDiv } from "./style";
import Overlay from "../Overlay";

export type OppeningHoursProps = {
  lunchTime: string;
  openInformation: string;
  dinnerTime: string;
  orderOnlineUrl: string;
  address: string;
  phoneNumber: string;
  lastTableSeated?: string;
  orderBtnLabel?: string;
  hoursTitle?: string;
  bgImage?: string;
  enbaleOverlay?: boolean;
  textColor?: string;
  linkTextColor?: string;
  btnColor?: string;
  btnBgColor?: string;
  phoneIcon?: string;
  locationIcon?: string;
};

const OpeningHours = ({
  lunchTime,
  openInformation,
  dinnerTime,
  lastTableSeated,
  orderOnlineUrl,
  address,
  phoneNumber,
  orderBtnLabel = "ORDER ONLINE",
  hoursTitle = "Hours:",
  bgImage,
  enbaleOverlay = false,
  textColor,
  linkTextColor,
  btnColor,
  btnBgColor,
  phoneIcon = defaultPhoneIcon,
  locationIcon = defaultLocationIcon,
}: OppeningHoursProps) => {
  return (
    <StyledDiv
      $bgImage={bgImage}
      $linkTextColor={linkTextColor}
      data-testid="opening-hours-wrapper-id"
    >
      {enbaleOverlay && <Overlay testId="opening-hours-overlay-id" />}
      <Container style={{ zIndex: 10 }}>
        <Row>
          <Col>
            <div className="oppening-hours-wrapper" data-testid="opening-hours">
              <Typography as="h4" testId="opening-hours-text" color={textColor}>
                {hoursTitle}
              </Typography>

              <div className="oppening-hour-info">
                {lunchTime && (
                  <Typography
                    as="subtitle1"
                    testId="opening-hours-lunch-time-text"
                    color={textColor}
                  >
                    {lunchTime}
                  </Typography>
                )}
                {dinnerTime && (
                  <Typography
                    as="subtitle1"
                    testId="opening-hour-dinner-time-text"
                    color={textColor}
                  >
                    {dinnerTime}
                  </Typography>
                )}
                {lastTableSeated && (
                  <Typography as="subtitle1" color={textColor}>
                    {lastTableSeated}
                  </Typography>
                )}
                {openInformation && (
                  <Typography
                    as="subtitle1"
                    testId="opening-hour-information"
                    color={textColor}
                  >
                    {openInformation}
                  </Typography>
                )}
              </div>

              <div className="order-wrapper">
                {orderOnlineUrl && (
                  <Button
                    skin="contained"
                    href={orderOnlineUrl}
                    testId="opening-hour-order-btn"
                    bgColor={btnBgColor}
                    color={btnColor}
                  >
                    {orderBtnLabel}
                  </Button>
                )}
                {address && (
                  <div className="location-wrapper">
                    <ImageWithFallBack
                      src={locationIcon}
                      alt="Location icon"
                      testId="opening-hours-location-icon"
                    />
                    <a
                      href={`https://www.google.com/maps/search/${address}`}
                      target="_blank"
                      rel="noreferrer"
                      data-testid="opening-hours-location-link"
                    >
                      {address}
                    </a>
                  </div>
                )}

                {phoneNumber && (
                  <div className="location-wrapper">
                    <ImageWithFallBack
                      src={phoneIcon}
                      alt="Location icon"
                      testId="opening-hours-phone-icon"
                    />
                    <a
                      href={`tel:${phoneNumber}`}
                      data-testid="opening-hours-phone-link"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OpeningHours;
