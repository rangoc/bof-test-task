import styled from 'styled-components';

// components
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Search from './Search';
import Authentication from './Authentication';
import NavLinks from './NavLinks';

// assets
import logo from 'assets/logo.svg';
const Navbar = () => {
  return (
    <Nav>
      <HamburgerMenu />
      <NavLinks />
      <div className="w-10 lg:hidden">
        <img src={logo} alt="Logo" />
      </div>
      <Wrapper>
        <Search />
        <Authentication />
      </Wrapper>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 1.2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  @media (max-width: 1024px) {
    padding: 1.2rem 1.25rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;
`;
export default Navbar;
