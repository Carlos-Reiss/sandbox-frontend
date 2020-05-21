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
      div {
        display: flex;
        justify-content: space-between;
        span {
          position: absolute;
          right: 250px;
          color: #999;
          font-size: 13px;
        }
        button {
          border: 0;
          background: none;
          display: flex;
          align-items: center;
          svg {
            :hover {
              color: black;
            }
          }
        }
      }
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  a {
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
export const Upload = styled.div`
  border-radius: 4px;
  padding: 30px;
  text-align: center;
  border: 1px dashed #345d7e;
  color: #999;
  margin-top: 50px;
  cursor: pointer;
`;

export const NextPage = styled.div`
  width: 900px;
  position: absolute;
  left: 100px;
  bottom: 50px;
  a {
    svg {
      transition: transform linear 1s;
      :hover {
        transform: translateX(-15px);
        border: 1px solid #999;
        border-radius: 4px;
      }
    }
  }
`;
