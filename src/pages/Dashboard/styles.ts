import styled from 'styled-components';
import { shade } from 'polished';

export const Dashboard = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  h1 {
    width: 100%;
    max-width: 450px;
    line-height: 56px;

    font-weight: bold;
    color: #3a3a3a;
    font-size: 3rem;
    margin-top: 80px;
  }
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    color: #3a3a3a;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    border: 0;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform .2s;

    & + a {
      margin-top: 1rem;
    }

    &:hover{
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #CBCBD6;
    }

  }
`;
