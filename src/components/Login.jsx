import React from 'react'
import styled from 'styled-components';
import backgroundImg from "../assets/login-background.jpg";
import logoOneImg from "../assets/cta-logo-one.svg";
import logoTwoImg from "../assets/cta-logo-two.png";


function Login() {
  return (
    <Container>
            <Content>
                <LogoOne src = {logoOneImg} />
                <SignUp>
                    GET ALL THERE
                </SignUp>

                <Description>
                Se hvor som helst, når som helst. Logg inn med Netflix-kontoen din for å se på netflix.com på en datamaskin eller en enhet som er tilkoblet Internett og som har tilgang til Netflix-appen, inkludert smart-TV-er, smarttelefoner, nettbrett, strømmespillere og spillkonsoller.

Du kan også laste ned favorittseriene dine i appen på iOS, Android eller Windows 10. Bruk nedlastinger til å se mens du er på farten, helt uten Internett-tilkobling. Ta med deg Netflix hvor som helst.

                </Description>

                <LogoTwo src = {logoTwoImg} />
            </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div `
min-height: calc(100vh - 70px);
position: relative;
display: flex;
align-items: center;
justify-content: center;

&:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${backgroundImg});
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
}`;

const Content = styled.div `
      max-width: 650px;
      padding: 80px 40px;
      width: 90%;
      display: flex;
      flex-direction: column;
      margin-top: 100px;
    
`;

const LogoOne = styled.img `

`;

const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;


    &:hover {
        background: #0483ee;
    }


`;

const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

    `;


const LogoTwo = styled.img `
    padding: 18px;
`;