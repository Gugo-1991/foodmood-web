import { Box, Column, FooterLink, Social } from "./index.js";
import { Col, Container, Row } from "react-bootstrap";
import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Twitter,
} from "react-bootstrap-icons";
import "../../index.css";
import Button from "../../shared/Button.jsx";
import { useAddCardModal } from "../../context/modal/useModals.js";

const Footer = () => {
  const addCard = useAddCardModal();

  return (
    <Box>
      <Container>
        <Row>
          <Col>
            <div>
              <h6 className="mb-4">SIGN UP FOR OUR NEWSLETTER</h6>

              <FooterLink href="/">
                <Social className="me-3">
                  <Facebook></Facebook>
                </Social>
              </FooterLink>
              <FooterLink href="/">
                <Social className="me-3">
                  <Instagram></Instagram>
                </Social>
              </FooterLink>
              <FooterLink href="/">
                <Social className="me-3">
                  <Twitter></Twitter>
                </Social>
              </FooterLink>
            </div>
          </Col>
          <Col>
            <h6 className="mb-4">Pages</h6>
            <Column>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/">About</FooterLink>
              <FooterLink href="/">Women</FooterLink>
              <FooterLink href="/">Men</FooterLink>
              <FooterLink href="/">Accessories</FooterLink>
              <FooterLink href="/">Contact</FooterLink>
            </Column>
            <Column>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>
            </Column>
          </Col>
          <Col>
            <h6 className="mb-4">CONTACT US</h6>
            <Column>
              <FooterLink>
                <GeoAltFill className="me-2"></GeoAltFill>
                12345 Street name, CaFooterLinkfornia
              </FooterLink>
              <FooterLink>
                <EnvelopeFill className="me-2"></EnvelopeFill>
                @gmail.com
              </FooterLink>
              <FooterLink>
                <PhoneFill className="me-2"></PhoneFill>
                +374
              </FooterLink>
              <Button
                label="Add New Item"
                onClick={() => addCard.attachHandler()}
              />
            </Column>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
