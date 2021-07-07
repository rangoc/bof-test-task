import CtaButton from './CtaButton';

const CallToAction = () => {
  return (
    <div className="flex justify-between items-center py-2 bg-yellow-400 shadow-lg px-5 lg:px-16">
      <p>
        Become a <span className="font-bold">BoF </span>
        <span className="italic">Professional</span> today. Try the
        <span className="font-bold"> All Access membership</span> for 30 days
        for just £1
      </p>
      <CtaButton text={'START TODAY'} />
    </div>
  );
};

export default CallToAction;
