import React from "react";

import clsx from "clsx";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Col from "@/components/Col";
import Modal from "@/components/Modal";
import YoutubePlayer from "@/components/YoutubePlayer";
import defaultPlayBtn from "@/assets/icons/play-button.png";
import ImageWithFallBack from "@/components/ImageWithFallBack";

import { StyledDiv } from "./style";
import Overlay from "../Overlay";

export type VideoBannerProps = {
  videoId: string;
  showPlayIcon?: boolean;
  bgImage?: string;
  overlay?: boolean;
  sectionHeight?: string;
  customClassName?: string;
};

const VideoBanner = ({
  videoId,
  showPlayIcon,
  bgImage,
  overlay,
  sectionHeight,
  customClassName,
}: VideoBannerProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <StyledDiv
      onClick={() => {
        setIsModalOpen(true);
      }}
      $bgImage={bgImage}
      $sectionHeight={sectionHeight}
      className={clsx("video-banner-wrapper", customClassName)}
      data-testid="video-banner-wrapper-testid"
    >
      {overlay && <Overlay testId="video-banner-overlay-test-id" />}
      {showPlayIcon && (
        <Container className="play-btn-wrapper">
          <Row>
            <Col>
              <div
                className="play-icon-wrapper"
                data-testid="video-play-icon-test-id"
              >
                <ImageWithFallBack src={defaultPlayBtn} alt="play-icon-image" />
              </div>
            </Col>
          </Row>
        </Container>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <YoutubePlayer videoId={videoId} />
      </Modal>
    </StyledDiv>
  );
};

export default VideoBanner;
