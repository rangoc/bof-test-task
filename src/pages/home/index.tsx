// components
import Header from '../../components/Header/Header';
import CentralContent from './components/CentralContent';
import SideContent from './components/SideContent';
const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-5 lg:flex lg:px-16 py-4">
        <div className="flex-col flex-shrink lg:pr-10">
          <CentralContent />
        </div>
        <div>
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
