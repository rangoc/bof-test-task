import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <span className="text-white text-center">
        © 2021 The Business of Fashion. All rights reserved. For more
        information read our Terms & Conditions and Privacy Policy.
      </span>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #1d1d1b;
  margin-top: 120px;
  justify-content: center;
  align-items: center;
`;
export default Footer;
