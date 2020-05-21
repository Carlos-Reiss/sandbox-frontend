import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.color.primary};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 80px;
`;
