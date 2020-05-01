import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import * as Style from './style';

import logoImg from '../../assets/logo.svg';
import logoDark from '../../assets/logo-dark.svg';

interface Props {
  toggleTheme(): void;
}

interface RepositoryParams {
  repository: string;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { isExact } = useRouteMatch<RepositoryParams>();
  const { title } = useContext(ThemeContext);
  return (
    <Style.Header>
      <img src={title === 'dark' ? logoDark : logoImg} alt="Github Explorer" />

      {isExact ? (
        <div className="checkbox">
          <div>
            <input
              className="dark"
              onClick={toggleTheme}
              type="checkbox"
              id="toggle"
              checked={title === 'dark'}
            />
            <label htmlFor="toggle"></label>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </div>
      )}
    </Style.Header>
  );
};

export default Header;
