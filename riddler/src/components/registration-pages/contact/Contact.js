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
  ContactUs,
  ContactA,
  FooterLogoWrap,
  SocialIcon,
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
          <LeftA href="https://csivit.com/" target="_blank">
            Visit Website
          </LeftA>
        </Left>
        <Right>
          <ContactUs>
            <AboutH2>CONTACT US</AboutH2>
            <ContactP>
              Email -
              <ContactA href="mailto:askcsivit@gmail.com">
                {" "}
                askcsivit@gmail.com
              </ContactA>
              <br />
              Phone - <ContactA href="tel:+91234567887">+91234567887</ContactA>
              <br />
              <ContactA href="tel:+91328684687">+91328684687</ContactA>
            </ContactP>
          </ContactUs>
          <Social>
            <AboutH2>SOCIAL</AboutH2>
            <Sociallogos>
              <SocialIcon
                href="https://www.instagram.com/csivitu"
                target="_blank"
              >
                <FaInstagram />
              </SocialIcon>
              <SocialIcon
                href="https://www.twitter.com/csivitu"
                target="_blank"
              >
                <FaTwitterSquare />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/company/computer-society-of-india-vit-student-chapter/"
                target="_blank"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://www.facebook.com/csivitu/"
                target="_blank"
              >
                <FaFacebookSquare />
              </SocialIcon>
            </Sociallogos>
          </Social>
        </Right>
      </FooterContent>
      <FooterLogoWrap>
        <Logo src={riddlerLogo} alt="CSI" className="riddler-logo" />
        <Logo src={CSILogo} alt="CSI" className="csi-logo" />
      </FooterLogoWrap>
    </FooterContainer>
  );
}

export default Contact;
