import React from "react";

import { createPortal } from "react-dom";
import clsx from "clsx";

import useOutsideClick from "@/hooks/useOutsideClick";

import Overlay from "../Overlay";
import { StyledDiv } from "./style";
import Typography from "../Typography";

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  maxWidth?: string;
  loader?: boolean;
  overlayClick?: boolean;
};

const Modal = ({
  title,
  className,
  isOpen,
  onClose,
  children,
  maxWidth = "820px",
  loader = false,
}: ModalProps) => {
  const style = {
    maxWidth: maxWidth,
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const ref = React.useRef(null);

  useOutsideClick(ref, () => {
    onClose();
  });

  return (
    <>
      {isOpen &&
        createPortal(
          <>
            <Overlay
              zIndex={9}
              position="fixed"
              testId="modal-overlay-test-id"
            />
            <StyledDiv
              className={clsx("modal fade", className, { open: "show" })}
              data-testid="modal-wrapper"
            >
              <div
                className="modal-dialog"
                style={style}
                ref={ref}
                data-testid="modal-dailog-wrapper"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <a
                      className="close-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                      }}
                      data-testid="modal-close-icon-id"
                    >
                      X
                    </a>

                    {title && (
                      <div className="modal-title" data-testid="modal-title-id">
                        <Typography as="h3" className="title">
                          {title}
                        </Typography>
                      </div>
                    )}
                  </div>

                  <div className="modal-body" data-testid="modal-body-test-id">
                    {loader ? (
                      <div
                        className="loader-container"
                        data-testid="modal-loader-id"
                      >
                        <p>Loading....</p>
                      </div>
                    ) : (
                      children
                    )}
                  </div>
                </div>
              </div>
            </StyledDiv>
          </>,
          document.body as HTMLElement,
        )}
    </>
  );
};

export default Modal;
