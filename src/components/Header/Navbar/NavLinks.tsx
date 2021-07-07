const navLinks = [
  { id: 1, name: 'Retail' },
  { id: 2, name: 'Luxury' },
  { id: 3, name: 'Technology' },
  { id: 4, name: 'Sustainability' },
  { id: 5, name: 'Marketing & PR' },
  { id: 6, name: 'Beauty' },
  { id: 7, name: 'Global markets' },
  { id: 8, name: 'Entrepreneurship' },
  { id: 9, name: 'Workplace & Talent' },
];
const NavLinks = () => {
  return (
    <ul className="hidden lg:flex flex-grow justify-around text-sm font-bold ">
      {navLinks.map((item) => (
        <li key={item.id} className="cursor-pointer">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
