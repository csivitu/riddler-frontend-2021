import React from 'react';
import Video from './assets/teaser.mp4'
import {HomeContainer, HomeBG, VideoBG, HomeContent,HomeBtnWrapper, Button} from './HomeElements'

function Home() {
    return (
        <HomeContainer>
            <HomeBG>
                <VideoBG autoPlay muted loop src={Video} type="teaser.mp4"/>
            </HomeBG>
            <HomeContent>
                <HomeBtnWrapper><Button to="/register">Register</Button></HomeBtnWrapper>
                
            </HomeContent>
        </HomeContainer>
    )
}

export default Home
