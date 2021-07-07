// assets
import logo from 'assets/logo.svg';
const Logo = () => {
  return (
    <div className="hidden lg:block border-t-4 border-black">
      <div className="flex flex-col mt-6 mb-6">
        <span className="text-center font-lora font-semibold">
          The Business of Fashion
        </span>
        <div className="max-w-xs mx-auto">
          <img src={logo} alt="The Bussiness of Fashion" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
