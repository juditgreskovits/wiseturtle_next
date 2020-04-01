import Link from 'next/link';

const Menu = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <span> &middot; </span>
    <Link href="/our-work">
      <a>Our work</a>
    </Link>
    <span> &middot; </span>
    <Link href="/about us">
      <a>About us</a>
    </Link>
    <span> &middot; </span>
    <Link href="/contact">
      <a>Get in touch</a>
    </Link>
  </div>
);

export default Menu;
