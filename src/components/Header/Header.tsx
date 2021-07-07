// components
import Logo from './Logo/Logo';
import Navbar from './Navbar';
import CallToAction from '../CallToActionBanner/CallToAction';
import HeaderLinks from './HeaderLinks/HeaderLinks';

const Header = () => {
  return (
    <div className="flex flex-col">
      <HeaderLinks />
      <Logo />
      <Navbar />
      <CallToAction />
    </div>
  );
};

export default Header;
