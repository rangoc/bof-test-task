import { FC } from 'react';

interface ButtonProps {
  text: string;
}

const CtaButton: FC<ButtonProps> = ({ text }) => {
  return (
    <>
      <button className="hidden lg:block px-8 py-2 bg-white rounded-sm font-bold">
        {text}
      </button>
      <button className="w-8 h-8 ml-10 rounded-sm bg-arrow bg-white bg-no-repeat bg-center bg-origin-padding px-6 py-4 lg:hidden"></button>
    </>
  );
};

export default CtaButton;
