// components
import LatestNews from './LatestNews';
import PopularRanking from './PopularRanking';

const SideContent = () => {
  return (
    <div className="w-80">
      <LatestNews />
      <PopularRanking />
    </div>
  );
};

export default SideContent;
