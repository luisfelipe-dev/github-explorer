import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import * as Style from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [posts, setPosts] = useState<Issue[]>([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [postsPage] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then((response) => setRepository(response.data));

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setPosts(response.data);
      setTotalPage(response.data.length / postsPage);
    });
  }, [params.repository]);

  useEffect(() => {
    console.log('page', page, 'total', totalPage, 'loading', loading);
    setIssues(posts.splice(0, postsPage));
  }, [posts]);

  useEffect(() => {
    getPosts();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  function handleScroll() {
    console.log('page', page, 'total', totalPage, 'loading', loading);

    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      page === totalPage ||
      loading
    )
      return;

    console.log(totalPage);
  }

  function getPosts() {
    setIssues([...issues, ...posts.splice(issues.length, postsPage)]);
    setLoading(true);
  }

  return (
    <>
      <Style.Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar {page} {totalPage}
        </Link>
      </Style.Header>

      {repository && (
        <Style.RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertos</span>
            </li>
          </ul>
        </Style.RepositoryInfo>
      )}

      <Style.Issues>
        {issues.map((issue) => (
          <a
            key={issue.id}
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Style.Issues>
    </>
  );
};

export default Repository;
