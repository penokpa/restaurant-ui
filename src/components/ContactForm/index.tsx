import clsx from "clsx";

import emailDefaultIcon from "@/assets/icons/email.png";
import phoneDefaultIcon from "@/assets/icons/phone-call.png";
import addressDefaultIcon from "@/assets/icons/location-pin.png";

import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typography from "../Typography";
import Icons from "../Icons";
import ContactDetailForm from "./ContactDetailForm";
import { StyledDiv } from "./style";

export type ContactFormProps = {
  email?: string;
  phoneNumber?: string;
  address?: string;
  contactFormTitle?: string;
  emailIcon?: string;
  phoneIcon?: string;
  addressIcon?: string;
  btnLabel?: string;
  btnColor?: string;
  btnBgColor?: string;
  onlyShowContactForm?: boolean;
};

const ContactForm = ({
  email = "abc@someone.com",
  phoneNumber = "xxxxxxxxx",
  address,
  contactFormTitle = "We are located at:",
  emailIcon = emailDefaultIcon,
  phoneIcon = phoneDefaultIcon,
  addressIcon = addressDefaultIcon,
  btnLabel = "SUBMIT",
  btnColor,
  btnBgColor,
  onlyShowContactForm = false,
}: ContactFormProps) => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div
              className={clsx("contact-wrapper", {
                "contact-only": onlyShowContactForm,
              })}
            >
              <ContactDetailForm
                btnBgColor={btnBgColor}
                btnColor={btnColor}
                btnLabel={btnLabel}
              />
              {!onlyShowContactForm && (
                <div className="contact-info-warpper">
                  <div className="contact-title">
                    <Typography as="h4">{contactFormTitle}</Typography>
                  </div>
                  {address && (
                    <div className="contact-method">
                      <Icons icon={addressIcon} />
                      <div className="content-info">
                        <Typography as="subtitle1">{address}</Typography>
                      </div>
                    </div>
                  )}

                  {phoneNumber && (
                    <div className="contact-method">
                      <Icons icon={phoneIcon} />
                      <div className="content-info">
                        <Typography as="subtitle1">
                          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </Typography>
                      </div>
                    </div>
                  )}
                  {email && (
                    <div className="contact-method">
                      <Icons icon={emailIcon} />
                      <div className="content-info">
                        <Typography as="subtitle1">
                          <a href={`mail:${email}`}>{email}</a>
                        </Typography>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default ContactForm;
