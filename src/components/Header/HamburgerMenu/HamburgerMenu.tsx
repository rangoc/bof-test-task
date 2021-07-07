import styled from 'styled-components';

const HamburgerMenu = () => {
  return (
    <Hamburger>
      <Line />
      <Line />
      <Line />
    </Hamburger>
  );
};

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 20px;
  height: 1px;
  background: black;
`;
export default HamburgerMenu;
