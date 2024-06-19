import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import icon from "../assets/icon.png"

function Header() {
  return (
    <Nav>
      <Logo>
        <img src={icon} alt="icon"/>
      </Logo>

      <NavMenu>
        <a href="/">  {/* Assuming you want links to navigate */}
          <i className="fa-solid fa-house"></i>
          <span>HOME</span>
        </a>

        <a href="/search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>SEARCH</span>
        </a>

        <a href="/watchlist">
          <i className='wathlist'> + </i>
          <span>WHATCHLIST</span>
        </a>

        <a href="/originals">
        <i className="fa-sharp fa-solid fa-star"></i>
          <span>ORIGINALS</span>
        </a>

        <a href="/films">
          <i className="fa-solid fa-film"></i>
          <span>MOVIES</span>
        </a>

        <a href="/series">
        <i className="fa-light fa-tv-retro"></i>
          <span>SERIES</span>
        </a>
      </NavMenu>

      <Userimg src = "" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: black;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.div`
  width: 80px;
`;

const NavMenu = styled.div `
  display: flex;
  flex: 1;
  margin-left: 25px; 
  align-items: center;
  a {
    display: flex;
    align-item:center;
    padding: 0 15px;
    cursor: pointer;

    icon {
      height: 200px;
    }
    
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
    
      &:after {
        content: "";
        height: 2px;
        background: white; 
        position: absolute;
        right: 0;
        left: 0;
        bottom: -3px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25 0.46 0.45 0.94) 0s;
        transform: scaleX(0);

       }

    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }

    i {
      height: 20px;
      padding: 0 8px;
    }
  }
  `;

const Userimg = styled.img `
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;

`;
