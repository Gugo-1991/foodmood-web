import { Box, Column, FooterLink, Social } from "./index.js";
import { Col, Container, Row } from "react-bootstrap";
import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Twitter,
  Google,
} from "react-bootstrap-icons";
import { useAddCardModal } from "../../context/modal/useModals.js";
import useLoginWithGoogle from "../../utils/loginWithGoogle.js";
import { LoginSocialFacebook } from "reactjs-social-login";

const Footer = () => {
  const addCard = useAddCardModal();
  const login = useLoginWithGoogle();

  return (
    <Box>
      <Container>
        <Row>
          <Col>
            <div>
              <h6 className="mb-4">SIGN UP FOR OUR NEWSLETTER</h6>

              <FooterLink href="/">
                <Social className="me-3">
                  <Google onClick={login}></Google>
                </Social>
              </FooterLink>

              <FooterLink href="/">
                <Social className="me-3">
                  <Twitter></Twitter>
                </Social>
              </FooterLink>

              <FooterLink>
                <LoginSocialFacebook
                  className=" d-flex "
                  appId="1519579592263792"
                  onResolve={(response) => {
                    console.log(response);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <Social>
                    <Facebook></Facebook>
                  </Social>
                </LoginSocialFacebook>
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

              <Col>
                <div>
                  <h6 className="mb-4">Admin</h6>
                  <FooterLink onClick={() => addCard.attachHandler()}>
                    Add New Item
                  </FooterLink>
                </div>
              </Col>
            </Column>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
