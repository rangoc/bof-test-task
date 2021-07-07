import PopularArticles from './PopularArticles';
import LatestArticles from './LatestArticles';
import LatestNews from './LatestNews';
const CentralContent = () => {
  return (
    <div className="flex flex-col">
      <PopularArticles />
      <LatestNews />
      <LatestArticles />
    </div>
  );
};

export default CentralContent;
