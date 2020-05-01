import styled from 'styled-components';

export const Header = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }

  .checkbox {
    display: inline-block;
    position: relative;
    margin-left: auto;
    width: 100px;

    div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    label {
      position: relative;
      display: block;
      width: 66px;
      height: 35px;
      border-radius: 100px;
      background-color: #000839;
      overflow: hidden;
      cursor: pointer;

      &:before,
      &:after {
        display: block;
        position: absolute;
        content: '';
        width: 17px;
        height: 17px;
        border-radius: 50%;
        top: 9px;
        left: 9px;
        transition: 0.5s ease;
      }
      &:before {
        background-color: #ffa41b;
      }

      &:after {
        background-color: #000839;
        left: -48px;
        transform: scale(0.00001);
      }
    }

    input[type='checkbox'] {
      display: none;
      &:checked + label {
        &:before {
          background-color: #fff;
          transform: translateX(32px);
        }

        &:after {
          transform: translateX(84px) scale(1);
        }
      }
    }
  }
`;
