const headerLinks = [
  { id: 1, name: 'The Daily Digest', description: 'Get the latest news' },
  { id: 2, name: 'BoF Professional', description: 'Be informed and inspired' },
  { id: 3, name: 'BoF Careers', description: 'Find the right job' },
  { id: 4, name: 'BoF Events', description: 'Connect with the industry' },
  { id: 5, name: 'BoF 500', description: 'Meet the people shaping fashion' },
];
const HeaderLinks = () => {
  return (
    <ul className="hidden lg:flex justify-between px-12 py-3.5 text-sm">
      {headerLinks.map((item) => (
        <li key={item.id} className="px-1 cursor-pointer">
          <span className="font-bold">{item.name}</span> - {item.description}
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
