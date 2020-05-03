import React from 'react';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import CardContainer from '../components/CardContainer';
import MiniCardContainer from '../components/MiniCardContainer';
import Servicios from '../components/Servicios';
import Evidencias from '../components/Evidencias';
import Footer from '../components/Footer';

export default function index() {
  return (
    <>
      <Header />
      <Carrousel />
      <CardContainer />
      <MiniCardContainer />
      <Servicios />
      <Evidencias />
      <Footer />
    </>
  );
}
