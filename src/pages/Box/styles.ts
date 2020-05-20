import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto 0;

  ul {
    margin: 30px 0;
    list-style: none;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & + li {
        padding-top: 20px;
        border-top: 1px solid #eee;
        margin-top: 20px;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        strong {
          font-weight: normal;
          font-size: 14px;
          margin-left: 10px;
          color: #333;
        }

        transition: transform 1s;

        :hover {
          transform: translateX(-15px);
        }
      }
      span {
        color: #999;
        font-size: 13px;
      }
    }
  }
`;

export const Header = styled.header`
  height: 120px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 1px #345d7e;

  div {
    h1 {
      font-size: 21px;
      padding-left: 15px;
      margin-left: 15px;
      border-left: 1px solid #ddd;
    }
    span {
      font-size: 12px;
      font-style: italic;
    }
  }

  img {
    height: 64px;
    width: 64px;
  }
`;
