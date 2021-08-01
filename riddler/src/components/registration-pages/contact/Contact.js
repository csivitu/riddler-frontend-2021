import React from "react";
import {
  AboutH2,
  ContactP,
  FooterContainer,
  FooterContent,
  FooterHeading,
  Left,
  LeftA,
  LeftP,
  Right,
  Social,
  Sociallogos,
  Logo,
  LeftIcon
} from "./ContactElements";
import aboutUsImage from "./assets/AboutUs_Box.svg";
import CSILogo from "./assets/csi-logo.png";
import riddlerLogo from "./assets/riddlerlogo_svg.svg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

function Contact() {
  return (
    <FooterContainer id="contact">
      <FooterHeading>
        <img src={aboutUsImage} alt="About Us" />
      </FooterHeading>
      <FooterContent>
        <Left>
          <AboutH2>COMPUTER SOCIETY OF INDIA</AboutH2>
          <LeftP>
            The Computer Society of India is the largest body of non-profit
            computer professionals in India. We are a group of skilled
            designers, developers and tech enthusiasts who engage in pushing
            technology forward. We organise a wide range of workshops,
            conferences, competitions and non-technical events to facilitate the
            growth of participants. Visit our website, csivit.com, to see more
            of who we are and the work we do.
          </LeftP>
          <br />
          <LeftA href="https://csivit.com/" target="_blank">
            Visit Website
          </LeftA>
        </Left>
        <Right>
          <AboutH2>CONTACT US</AboutH2>
          <ContactP>
            Email -
            <LeftA href="mailto:askcsivit@gmail.com">askcsivit@gmail.com</LeftA>
            <br />
            <br />
            Phone - <LeftA href="tel:+91234567887">+91234567887</LeftA>
            <LeftA href="tel:+91328684687">+91328684687</LeftA>
          </ContactP>
          <Social>
            <AboutH2>SOCIAL</AboutH2>
            <Sociallogos>
              <LeftIcon href="https://www.facebook.com/csivitu/" target="_blank">
                <FaFacebookSquare />
              </LeftIcon>
              <LeftIcon
                href="https://www.linkedin.com/company/computer-society-of-india-vit-student-chapter/"
                target="_blank"
              >
                <FaLinkedin />
              </LeftIcon>
              <LeftIcon href="https://www.twitter.com/csivitu" target="_blank">
                <FaTwitterSquare />
              </LeftIcon>
              <LeftIcon href="https://www.instagram.com/csivitu" target="_blank">
                <FaInstagram />
              </LeftIcon>
            </Sociallogos>
          </Social>
        </Right>
      </FooterContent>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo src={riddlerLogo} alt="CSI" className="riddler-logo" /> {/* src={riddlerLogo} alt="CSI" style={{marginRight:"3rem"}}  */}

        <Logo src={CSILogo} alt="CSI" className="csi-logo" /> {/*style={{paddingLeft:"3rem",borderLeft:"0.4rem solid #DBF429"}}*/}
      </div>
    </FooterContainer>
  );
}

export default Contact;
