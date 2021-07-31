
import React from "react";
import { AboutH2, ContactP, FooterContainer, FooterContent, FooterHeading, Left, LeftP, Right } from "./ContactElements"

function Contact() {
  return (
    <FooterContainer>
      <FooterHeading>
        <h1 style={{ fontSize: "5rem" }}>About Us</h1>
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
          <a
            href="https://csivit.com/"
            target="_blank"
            style={{
              marginLeft: "4rem",
              fontFamily: "Poppins",
              color: "white",
              fontSize: "2rem",
              fontStyle: "italic",
              // a:hover {
              //   color: "#000000",
              //   opacity: "0.7",
              // }
            }}
          >
            Visit website
          </a>
        </Left>
        <Right>
          <AboutH2>CONTACT US</AboutH2>
          <ContactP>
            Email -<a href="mailto:askcsivit@gmail.com">askcsivit@gmail.com</a>
            <br />
            Phone - <a href="tel:+91234567887">+91234567887</a>
            <br />
            <a href="tel:+91328684687">+91328684687</a>
          </ContactP>
        </Right>
      </FooterContent>
    </FooterContainer>
    // <div
    //   className="section section-about"
    //   data-anchor="register"
    //   data-anchor="about"
    // >
    //   <div className="about-heading">
    //     <h1>ABOUT US</h1>
    //   </div>
    //   <div className="about-content">
    //     <div className="about-left">
    //       <h2>COMPUTER SOCIETY OF INDIA</h2>
    //       <div className="about-line-one">
    //         <img
    //           className="ellipse-logo"
    //           src="./assets/Ellipse 1.png"
    //           alt="Ellipse"
    //         />
    //         <hr />
    //       </div>
    //       <p>
    //         The Computer Society of India is the largest body of non-profit
    //         computer professionals in India. We are a group of skilled
    //         designers, developers and tech enthusiasts who engage in pushing
    //         technology forward. We organise a wide range of workshops,
    //         conferences, competitions and non-technical events to facilitate the
    //         growth of participants. Visit our website, csivit.com, to see more
    //         of who we are and the work we do.
    //       </p>
    //       <a href="https://csivit.com/" target="_blank">
    //         Visit website
    //       </a>
    //     </div>
    //     <div className="about-right">
    //       <div className="contact-us">
    //         <h2>CONTACT US</h2>
    //         <div className="about-line-two">
    //           <img
    //             className="ellipse-logo"
    //             src="./assets/Ellipse 1.png"
    //             alt="Ellipse"
    //           />
    //           <hr />
    //         </div>
    //         <p>
    //           Email -
    //           <a href="mailto:askcsivit@gmail.com">askcsivit@gmail.com</a>
    //           <br />
    //           Phone - <a href="tel:+91234567887">+91234567887</a>
    //           <br />
    //         </p>
    //         <pre>
    //           {" "}
    //           <a href="tel:+91328684687">+91328684687</a>
    //         </pre>
    //       </div>
    //       <div className="social">
    //         <h2>SOCIAL</h2>
    //         <div className="about-line-three">
    //           <img
    //             className="ellipse-logo"
    //             src="./assets/Ellipse 1.png"
    //             alt="Ellipse"
    //           />
    //           <hr />
    //         </div>
    //         <div className="social-logos">
    //           <a
    //             href="https://www.instagram.com/csivitu"
    //             className="fa fa-instagram"
    //             target="_blank"
    //           ></a>
    //           <a
    //             href="https://www.twitter.com/csivitu"
    //             className="fa fa-twitter"
    //             target="_blank"
    //           ></a>
    //           <a
    //             href="https://www.linkedin.com/company/computer-society-of-india-vit-student-chapter/"
    //             className="fa fa-linkedin"
    //             target="_blank"
    //           ></a>
    //           <a
    //             href="https://www.facebook.com/csivitu/"
    //             className="fa fa-facebook"
    //             target="_blank"
    //           ></a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <a href="https://csivit.com/" target="_blank">
    //     <img src="./assets/csi-logo.png" alt="CSI" className="csi-logo" />
    //   </a>
    // </div>
  );
}

export default Contact;