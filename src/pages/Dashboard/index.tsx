import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import * as Style from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <Style.Dashboard>
    <img src={logoImg} alt="Github Explorer" />
    <h1>Explore repositórios no Github.</h1>

    <Style.Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Style.Form>

    <Style.Repositories>
      <a href="test">
        <img
          src="https://avatars3.githubusercontent.com/u/19398463?s=460&u=36c5cc5b175bd97fe16207e82fd0dc31b7d4a1c6&v=4"
          alt="Luís"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img
          src="https://avatars3.githubusercontent.com/u/19398463?s=460&u=36c5cc5b175bd97fe16207e82fd0dc31b7d4a1c6&v=4"
          alt="Luís"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img
          src="https://avatars3.githubusercontent.com/u/19398463?s=460&u=36c5cc5b175bd97fe16207e82fd0dc31b7d4a1c6&v=4"
          alt="Luís"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img
          src="https://avatars3.githubusercontent.com/u/19398463?s=460&u=36c5cc5b175bd97fe16207e82fd0dc31b7d4a1c6&v=4"
          alt="Luís"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Style.Repositories>
  </Style.Dashboard>
);

export default Dashboard;
