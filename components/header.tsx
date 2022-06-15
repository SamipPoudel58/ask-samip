import Link from 'next/link';

const Header = () => (
  <header className="absolute top-0 left-0 w-full flex justify-center py-4 border-b-[1px] border-gray-300">
    <Link href="/">
      <a className="text-gray-300 hover:text-primary font-playfair text-2xl text-center">
        Ask Samip
      </a>
    </Link>
  </header>
);

export default Header;
