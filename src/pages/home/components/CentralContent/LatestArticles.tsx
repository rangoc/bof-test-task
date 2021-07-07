import { LatestArticle } from './Article';
//assets
import fashion from 'assets/fashion.jpg';
import clothes from 'assets/clothes.jpg';
import shoes from 'assets/shoes.jpg';
const latestArticles = [
  {
    id: 1,
    category: 'Sustainability',
    title: 'How Brands Can Be Effective Advocates',
    image: fashion,
    description:
      'The traditional influencer playbook won’t work for brands experimenting with how to engage the audio-only social media app’s fast-growing user base.',
    postedAt: '2 weeks ago',
  },
  {
    id: 2,
    category: 'Beauty',
    title:
      'What China’s Beauty Regulation Change Means for Foreign Brands, Trade Barriers Remain.',
    image: clothes,
    description:
      'The designer’s first physical show for the house was less sensual than tough, but under the industrial cool there was an artisanal warmth, writes Tim Blanks.',
    postedAt: '2 weeks ago',
  },
  {
    id: 3,
    category: 'Retail',
    title: 'The Secret Way People Buy and Sell Secondhand Clothes',
    image: shoes,
    description:
      'The traditional influencer playbook won’t work for brands experimenting with how to engage the audio-only social media app’s fast-growing user base.',
    postedAt: '2 weeks ago',
  },
  {
    id: 4,
    category: 'Entrepreneurship',
    title: 'The End of an Era at Missoni',
    image: fashion,
    description:
      'The traditional influencer playbook won’t work for brands experimenting with how to engage the audio-only social media app’s fast-growing user base.',
    postedAt: '2 weeks ago',
  },
];
const LatestArticles = () => {
  return (
    <div>
      <div className="mt-16 border-b-2 pb-2 border-black font-bold">LATEST</div>
      <ul>
        {latestArticles.map((article) => (
          <li
            key={article.id}
            className="lg:flex mt-5 border-b border-dashed pb-5 relative"
          >
            <LatestArticle article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestArticles;
