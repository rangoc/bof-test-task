import styled from 'styled-components';

// assets
import auth from 'assets/auth.svg';
const Authentication = () => {
  return (
    <UserIcon>
      <img src={auth} alt="Log In/Sign In" />
    </UserIcon>
  );
};

const UserIcon = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
export default Authentication;
