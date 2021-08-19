import React from 'react';
import aboutBoxImage from './assets/about-box.svg';
import Header from '../header/Header';
import Wave from 'react-wavify';
import { Container, Row, Col } from 'react-bootstrap';
import { SponsorContainer } from './sponsorElements';
import cloudsek from './assets/cloudsek.png';
import figma from './assets/figma.png';
import gfg from './assets/gfg.png';
import hoverrobotix from './assets/hoverrobotix.png';
import mentorx from './assets/mentorx.png';
import perficient from './assets/perficient.png';
import replit from './assets/replit.png';
import sketch from './assets/sketch.png';
import './styles.css';

const titleSpons = [
    {
        name: 'CloudSEK',
        image: cloudsek,
        link: 'https://cloudsek.com/',
    },
];

const coSpons = [
    {
        name: 'Perficient',
        image: perficient,
        link: 'https://www.perficient.com/',
    },
];

const collaborators = [
    {
        name: 'Figma',
        image: figma,
        link: 'https://www.figma.com/',
    },
    {
        name: 'Mentorx',
        image: mentorx,
        link: 'https://thementorx.com/',
    },
    {
        name: 'Sketch',
        image: sketch,
        link: 'https://www.sketch.com/',
    },
    {
        name: 'HoverRobotix',
        image: hoverrobotix,
        link: 'https://hoverrobotix.com/',
    },
    {
        name: 'GeeksForGeeks',
        image: gfg,
        link: 'https://www.geeksforgeeks.com/',
    },
    {
        name: 'ReplIT',
        image: replit,
        link: 'https://replit.com/',
    },
];

var titleSponsComp = [];
for (const tspons of titleSpons) {
    titleSponsComp.push(
        <Col
            key={tspons.name}
            className="d-flex justify-content-center align-items-center p-3"
            xs={6}
            md={3}
        >
            <div>
                <a target="_blank" href={tspons.link} rel="noreferrer">
                    <img
                        className="mx-auto"
                        src={tspons.image}
                        alt={tspons.name}
                        width="100%"
                        height="100%"
                    />
                </a>
            </div>
        </Col>
    );
}

var coSponsComp = [];
for (const cspon of coSpons) {
    coSponsComp.push(
        <Col
            key={cspon.name}
            className="d-flex justify-content-center align-items-center p-3"
            xs={6}
            md={3}
        >
            <div>
                <a target="_blank" href={cspon.link} rel="noreferrer">
                    <img
                        className="mx-auto"
                        src={cspon.image}
                        alt={cspon.name}
                        width="100%"
                        height="100%"
                    />
                </a>
            </div>
        </Col>
    );
}

var collabComp = [];
for (const collab of collaborators) {
    collabComp.push(
        <Col
            key={collab.name}
            className="d-flex justify-content-center align-items-center p-3"
            xs={6}
            md={4}
        >
            <div>
                <a target="_blank" href={collab.link} rel="noreferrer">
                    <img
                        className="mx-auto"
                        src={collab.image}
                        alt={collab.name}
                        width="100%"
                        height="100%"
                    />
                </a>
            </div>
        </Col>
    );
}

const Sponsors = () => {
    return (
        <SponsorContainer id="sponsors">
            <Wave
                className="Wave1"
                fill="#DBF429"
                paused={false}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.25,
                    points: 3,
                }}
            />
            <Header
                TitleTextTop="Meet our"
                TitleTextBottom="sponsors"
                TitleColor="#D8F029"
                ImageURL={aboutBoxImage}
                Opposite="true"
        />
        <Row
                className="justify-content-center align-items-center"
                style={{ zIndex: '1' }}
            >
                <Row className="justify-content-center align-items-center">
                    <Col
                        className="d-flex justify-content-center align-items-center p-3"
                        xs={12}
                        md={12}
                    >
                        <Container
                            className="blue-bg"
                            id="sponsors"
                            fluid
                            style={{ paddingTop: '6.5rem' }}
                        >
                            <Row className="justify-content-center mb-5">
                                <h1
                                    className="title-spons"
                                    style={{ textAlign: 'center' }}
                                >
                                    TITLE SPONSOR
                                </h1>
                            </Row>
                            <Container
                                style={{ backgroundColor: '#dbf429' }}
                                id="collabimggrid"
                                fluid
                                className="p-5 d-flex justify-content-center align-items-center"
                            >
                                <Row className="justify-content-center align-items-center h-100 w-100">
                                    {titleSponsComp}
                                </Row>
                            </Container>
                        </Container>
                    </Col>
                    <Col
                        className="d-flex justify-content-center align-items-center p-3"
                        xs={12}
                        md={12}
                    >
                        <Container
                            className="blue-bg"
                            id="sponsors"
                            fluid
                            style={{ paddingTop: '6.5rem' }}
                        >
                            <Row className="justify-content-center mb-5">
                                <h1
                                    className="title-spons"
                                    style={{ textAlign: 'center' }}
                                >
                                    CO-SPONSOR
                                </h1>
                            </Row>
                            <Container
                                style={{ backgroundColor: '#dbf429' }}
                                id="collabimggrid"
                                fluid
                                className="p-5 d-flex justify-content-center align-items-center"
                            >
                                <Row className="justify-content-center align-items-center h-100 w-100">
                                    {coSponsComp}
                                </Row>
                            </Container>
                        </Container>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col
                        className="d-flex justify-content-center align-items-center p-3"
                        xs={12}
                        md={12}
                    >
                        <Container
                            className="blue-bg"                           
                            id="sponsors"
                            fluid
                            style={{ paddingTop: '6.5rem'}}
                        >
                            <Row className="justify-content-center mb-5">
                                <h1
                                    className="title-spons"
                                    style={{ textAlign: 'center' }}
                                >
                                    COLLABORATORS
                                </h1>
                            </Row>
                            <Container
                                style={{ backgroundColor: '#dbf429' }}
                                id="collabimggrid"
                                fluid
                                className="p-5 d-flex justify-content-center align-items-center"
                            >
                                <Row className="justify-content-center align-items-center h-100 w-100">
                                    {collabComp}
                                </Row>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Row>
        </SponsorContainer>
    );
};

export default Sponsors;
