import React from 'react'
import styled from 'styled-components';
import img from "../assets/details-background.jpg"
import playButton from "../assets/play-icon-black.png"
import groupIcon from "../assets/group-icon.png"
import trailerButton from "../assets/play-icon-white.png"



function Details() {
  return (
    <Container>
        <Background>
            <img src={img}/>
        </Background>

        <ImageTitle>
            <img src = "" />
        </ImageTitle>

        <Controls>
            <PlayButton>
                <img src = {playButton} />
                <span>PLAY</span>
            </PlayButton>

            <TrailerButton>
                <img src = {trailerButton} />
                <span>TRAILER</span>
            </TrailerButton>

            <AddButton>
                <span>+</span>
            </AddButton>

            <GroupWatchButton>
                <img src = {groupIcon} />
            </GroupWatchButton>

        </Controls>

        <SubTitle>
            2028. 7m. Family, Fantasy, Kids, Animation
        </SubTitle>

        <Description>
            This is the description of the film bala hahab labab bababab bfideibo babeijboe bab beobeoirbeuiob bo eeoboerobroeb oebrbeorbeiorbeueob
            Dow Jones Futures Rise: Nvidia Leads New Buys; Tesla Runs Past Resistance On Elon Musk Move 
        </Description>

    </Container>
  )
}

export default Details;

const Container = styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px)
    position: relative;
`;

const Background = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`;


const ImageTitle = styled.div `
    height: 30vh;
    min-height: 170px;
    width: 35vh;
    min-width: 200px;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;

    }
`;

const Controls = styled.div `
    display: flex;
    align-items: center;
`;

const PlayButton = styled.button `
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px; 
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const TrailerButton = styled(PlayButton) `
    background: rgb(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
`;

const AddButton = styled.button `
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;


    span {
        font-size: 30px;
        color: white

    
    }
`;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`;


const SubTitle = styled.div `
    margin-top: 16px;
    font-size: 15px;
    color: rgb(249, 249, 249);
`;


const Description = styled.div `
    font-size: 20px;
    color: rgb(249, 249, 249);
    min-height: 20px;
    line-height: 1.4;
    margin-top: 16px;


`;