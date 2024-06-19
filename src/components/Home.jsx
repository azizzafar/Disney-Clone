import React from 'react'
import styled from 'styled-components';
import backgroundImg from "../assets/home-background.png"
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import { useEffect, useState } from 'react';
import db from '../Firebase';

function Home() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const querySnapshot = await db.collection("movies").get();
        const movieData = querySnapshot.docs.map((doc) => doc.data());
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  


  return (

    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home;

const Container = styled.main `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;


    &:before {
      background: url(${backgroundImg}) center center /cover no-repeat fixed;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  `;