import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = 
    <>
     <li><Link to={'/'}>HOME</Link></li>
      <li>
        <details>
          <summary>TOPICS</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><Link to={'/outlets'}>CONTACT US</Link></li>
      <li><Link to={'/dashboard'}>DASHBOARD</Link></li>
      <li><Link to={'/menu'}>OUR MENU</Link></li>
      <li><Link to={'/shop'}>OUR SHOP</Link></li>
    <div className="mx-2">
    <a className="btn">SIGN OUT</a>
  </div>
    </>
    return (
        <div>
       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-10 rounded-full">
    <span className="text-xs">UI</span>
  </div>
</div>
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">The Spots</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
    <div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-10 rounded-full">
    <span className="text-xs">UI</span>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;