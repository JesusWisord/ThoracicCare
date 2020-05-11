import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CarouselContainer from '../components/CarouselContainer';
import Especialidades from '../components/Especialidades';
import Nosotros from '../components/Nosotros';
import Galeria from '../components/Galeria';
import Servicios from '../components/Servicios';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default function index() {
  return (
    <>
      <Header />
      <NavBar />
      <CarouselContainer />
      <Especialidades />
      <Nosotros />
      <Galeria />
      <Servicios />
      <Map />
      <Footer />
    </>
  );
}
