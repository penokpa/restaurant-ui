import defaultImage from "@/assets/image/fade-mountain.png";

import Overlay from "../Overlay";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typography, { TagType } from "../Typography";
import { StyledDiv } from "./style";

export interface SectionBgImageProps {
  title: string;
  description?: string;
  as?: string;
  sectionHeight?: string;
  bgImage?: string;
  enableOverlay?: boolean;
  titleColor?: string;
  descriptionColor?: string;
}

const SectionBgImage = ({
  bgImage = defaultImage,
  title,
  description,
  as = "h1",
  enableOverlay = false,
  titleColor,
  descriptionColor,
  sectionHeight,
}: SectionBgImageProps) => {
  return (
    <StyledDiv
      className="section-image-wrapper"
      $bgImage={bgImage}
      $sectionHeight={sectionHeight}
      data-testid="section-image-test-id"
      aria-label="section-background-image"
    >
      {enableOverlay && <Overlay testId="section-overlay-test-id" />}
      <Container>
        <Row>
          <Col>
            <div className="menu-title-content">
              <Typography
                as={as as TagType}
                className="section-title"
                color={titleColor}
                testId="section-title-id"
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  as="h5"
                  className="description-color"
                  color={descriptionColor}
                  testId="section-description-id"
                >
                  {description}
                </Typography>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default SectionBgImage;
