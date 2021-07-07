import styled from 'styled-components';

const news = [
  {
    id: 1,
    title: 'The Secret Way People Buy and Sell Secondhand Clothes',
  },
  {
    id: 2,
    title: 'Retailers That Could Go Bankrupt as the COVID-19 Era Wears',
  },
  {
    id: 3,
    title: 'The Secret Way People Buy and Sell Secondhand Clothes',
  },
  {
    id: 4,
    title: 'Retailers That Could Go Bankrupt as the COVID-19 Era Wears',
  },
  {
    id: 5,
    title: 'The Secret Way People Buy and Sell Secondhand Clothes',
  },
  {
    id: 6,
    title: 'Retailers That Could Go Bankrupt as the COVID-19 Era Wears',
  },
  {
    id: 7,
    title: 'Retailers That Could Go Bankrupt as the COVID-19 Era Wears',
  },
  {
    id: 8,
    title: 'The Secret Way People Buy and Sell Secondhand Clothes',
  },
];

const PopularRanking = () => {
  return (
    <div className="hidden lg:flex flex-col px-5 mt-5 border-b border-solid border-lightGray">
      <div className="py-2 border-b border-solid border-black">
        <span className="uppercase font-bold">Most Popular</span>
      </div>
      <ul>
        {news.map((news) => (
          <ListItem number={news.id} key={news.id}>
            <h4>{news.title}</h4>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

const ListItem = styled.li<{ number: number }>`
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  position: relative;
  padding-left: 15px;
  font-size: 14px;
  font-family: 'Lora', 'sans-serif';
  &:before {
    content: '${(props) => props.number}';
    font-weight: 600;
    font-size: 18px;
    display: inline-block;
    position: absolute;
    left: -5px;
    top: -2px;
  }
`;
export default PopularRanking;
