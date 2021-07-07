import styled from 'styled-components';

// assets
import arrowRight from 'assets/arrowRight.svg';

const news = [
  {
    id: 1,
    title: 'Retailers That Could Go Bankrupt as the COVID-19 Era Wears',
    description:
      'On The unbundling of iTunes and the algorithmic echo chambers of Facebook have spilled into retail.',
    postedAt: '50 minutes ago',
  },
  {
    id: 2,
    title: 'Retailers That Could Go Bankrupt as the COVID-19 Era Wears',
    description:
      'On The unbundling of iTunes and the algorithmic echo chambers of Facebook have spilled into retail.',
    postedAt: '50 minutes ago',
  },
  {
    id: 3,
    title: 'Retailers That Could Go Bankrupt as the COVID-19 Era Wears',
    description:
      'On The unbundling of iTunes and the algorithmic echo chambers of Facebook have spilled into retail.',
    postedAt: '50 minutes ago',
  },
  {
    id: 4,
    title: 'Retailers That Could Go Bankrupt as the COVID-19 Era Wears',
    description:
      'On The unbundling of iTunes and the algorithmic echo chambers of Facebook have spilled into retail.',
    postedAt: '50 minutes ago',
  },
];

const LatestNews = () => {
  return (
    <div className="hidden lg:flex flex-col px-5 bg-gray-100">
      <div className="flex justify-between py-2 border-b border-solid border-black">
        <span className="uppercase font-bold">Latest News</span>
        <Live className="uppercase font-bold">Live</Live>
      </div>
      <ul>
        {news.map((news) => (
          <ListItem key={news.id}>
            <h4 className="font-bold">{news.title}</h4>
            <p>{news.description}</p>
            <span className="text-lightGray">{news.postedAt}</span>
          </ListItem>
        ))}
      </ul>
      <div className="flex items-center border-t border-solid border-black px-3 py-6">
        <button className="uppercase font-bold text-xs">View More</button>
        <Arrow>
          <img src={arrowRight} alt="Arrow right" />
        </Arrow>
      </div>
    </div>
  );
};

const Live = styled.div`
  color: #d0021b;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border-radius: 50%;
    background: #d0021b;
    display: inline-block;
  }
`;
const ListItem = styled.li`
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  position: relative;
  padding-left: 15px;
  font-size: 14px;
  &:before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #1d1d1b;
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 0;
  }
`;
const Arrow = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
  width: 20px;
  height: 20px;
`;
export default LatestNews;
