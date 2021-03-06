import Link from "next/link";

const Navbar = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    &nbsp;&nbsp;
    <Link href="/users">
      <a>Users</a>
    </Link>
  </div>
);

export default Navbar;
