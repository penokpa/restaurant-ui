import React from "react";

import { getLightBoxImage } from "@/utils/get-light-box-image";

import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import ImageWithFallBack from "../ImageWithFallBack";
import ImageLightbox from "./ImageLightBox";
import { StyledDiv } from "./style";

export type ImageGalleryProps = {
  imageData: Array<{ src: string }>;
  testid?: string;
};

const ImageGallery = ({ imageData, testid }: ImageGalleryProps) => {
  const [index, setIndex] = React.useState<number | null>(null);
  return (
    <StyledDiv data-testid={testid || "image-gallery-section-id"}>
      <Container>
        <Row>
          <Col>
            <div
              className="image-gallery-wrapper"
              data-testid="image-gallery-wraper-id"
            >
              {imageData?.map((x, i) => {
                if (!x.src) return;

                return (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className="image-wrapper"
                  >
                    <ImageWithFallBack
                      src={x.src}
                      alt="Food Image"
                      testId="image-gallery-test-id"
                    />
                  </div>
                );
              })}

              <ImageLightbox
                images={getLightBoxImage(imageData)}
                index={index as number}
                setIndex={setIndex}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default ImageGallery;
