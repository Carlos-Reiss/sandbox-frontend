import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { color, title } = useContext(ThemeContext);

  return (
    <Container>
      SandBox
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={15}
        offColor={shade(0.15, color.primary)}
        onColor={color.secundary}
      />
    </Container>
  );
};

export default Header;
