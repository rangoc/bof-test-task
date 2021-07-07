import { HeadlineArticle, PopularArticle } from './Article';
// assets
import fashion from 'assets/fashion.jpg';
import clothes from 'assets/clothes.jpg';
import shoes from 'assets/shoes.jpg';
const popularArticles = [
  {
    id: 1,
    title: 'How Covid-19 Is Changing Asia’s Plastic Surgery Scene',
    image: fashion,
    description:
      'Blockbuster sales and multi-billion dollar valuations have led to a critical growth stage, with platforms like StockX and Goat delving further into apparel and accessories.',
  },
  {
    id: 2,
    title: 'The Secret Way People Buy Secondhand Clothes',
    image: clothes,
    description:
      'The designer’s first physical show for the house was less sensual than tough, but under the industrial cool there was an artisanal warmth, writes Tim Blanks.',
  },
  {
    id: 3,
    title: 'How Covid-19 Is Changing Asia’s Plastic Surgery Scene',
    image: shoes,
    description:
      'The designer’s first physical show for the house was less sensual than tough, but under the industrial cool there was an artisanal warmth, writes Tim Blanks.',
  },
];
const PopularArticles = () => {
  return (
    <div className="flex flex-col mt-10">
      <HeadlineArticle article={popularArticles[0]} />
      <div className="lg:flex mt-10">
        <div className="lg:w-1/2 lg:pr-5">
          <PopularArticle article={popularArticles[1]} />
        </div>
        <div className="mt-10 lg:w-1/2 lg:pl-5 lg:mt-0">
          <PopularArticle article={popularArticles[2]} />
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;
