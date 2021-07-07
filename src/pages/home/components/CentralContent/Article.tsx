import { FC } from 'react';
import styled from 'styled-components';

// assets
import arrowRight from 'assets/arrowRight.svg';
interface PopularArticleProps {
  article: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
}

interface LatestArticleProps {
  article: {
    id: number;
    category: string;
    title: string;
    image: string;
    description: string;
    postedAt: string;
  };
}

export const HeadlineArticle: FC<PopularArticleProps> = ({ article }) => {
  const { title, image, description } = article;
  return (
    <div className="border-b-2 border-dashed border-lightGray pb-10">
      <h1 className="text-4xl mb-5 lg:text-6xl ">{title}</h1>
      <img src={image} alt={title} />
      <p className="max-w-5xl mt-5">{description}</p>
      <div className="flex items-center mt-5">
        <button className="uppercase font-bold">Read Now</button>
        <Arrow>
          <img src={arrowRight} alt="Arrow right" />
        </Arrow>
      </div>
    </div>
  );
};

const Arrow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  width: 20px;
  height: 20px;
`;

export const PopularArticle: FC<PopularArticleProps> = ({ article }) => {
  const { title, image, description } = article;
  return (
    <div>
      <h2 className="text-3xl mb-5">{title}</h2>
      <img src={image} alt={title} />
      <p className="mt-5">{description}</p>
    </div>
  );
};

export const LatestArticle: FC<LatestArticleProps> = ({ article }) => {
  const { category, title, image, description, postedAt } = article;
  return (
    <>
      <div className="flex flex-col w-full lg:w-4/5 lg:pr-5">
        <span className="font-bold uppercase">{category}</span>
        <h2 className="text-3xl mb-5">{title}</h2>
        <div className="w-full mb-5 lg:hidden">
          <img src={image} alt={title} />
        </div>
        <p className="mt-1 mb-5">{description}</p>
        <span className="absolute bottom-0 text-lightGray mb-2 mt-2">
          {postedAt}
        </span>
      </div>
      <div className="hidden lg:block w-2/6 max-w-2xl min-w-min">
        <img src={image} alt={title} />
      </div>
    </>
  );
};
