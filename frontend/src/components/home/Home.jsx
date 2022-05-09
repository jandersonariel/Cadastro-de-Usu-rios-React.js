import React from 'react';
import {Main} from '../template/main/Main'
import './Home.css'


export const Home = () => {
  return (
    <Main icon="home" title="Inicio" subtitle="Projeto De Estudo React.">
      <div className="display-4">Bem Vindo</div>
      <hr />
      <p className="mb-0">Sistema de construção
        de um cadastro desenvolvido em React!</p>
    </Main>
  )
}