import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Dashboard = styled.div`
  h1 {
    width: 100%;
    max-width: 450px;
    line-height: 56px;

    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    font-size: 3rem;
    margin-top: 80px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 2.5rem;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.secondary};
    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: 5px 0px 0px 5px;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

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

  .container-link {
    width: 100%;
    position: relative;
    transition: transform 0.2s;

    & + .container-link {
      margin-top: 1.9rem;
    }

    button {
      position: absolute;
      top: -25px;
      transition:all 1s linear;
      right: -10px;
      opacity: 0;

      z-index: 4;

      color: #c53030;
      font-weight: bold;
      background: transparent;
      border: 0;
      cursor: pointer;

      &:hover{
        color: #444;
      }
    }

    &:hover {
      transform: translateX(10px);

      button {
        opacity: 1;
        right: 4px;

      }
    }
  }

  a {
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 1rem;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: ${(props) => props.theme.colors.text};
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
