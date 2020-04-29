import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import * as Style from './styles';
import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por este repositório');
    }
  };

  return (
    <Style.Dashboard>
      <img src={logoImg} alt="Github Explorer" />
      <h1>Explore repositórios no Github.</h1>

      <Style.Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          value={newRepo}
          onChange={(e) => {
            setInputError('');
            setNewRepo(e.target.value);
          }}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Style.Form>

      {inputError && <Style.Error>{inputError}</Style.Error>}

      <Style.Repositories>
        {repositories &&
          repositories.map((repository) => (
            <a key={repository.full_name} href="test">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
      </Style.Repositories>
    </Style.Dashboard>
  );
};

export default Dashboard;
