import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="w-[327px] mx-auto h-6 mt-6 flex justify-between 2xl:w-[1280px] 2xl:mt-12">
      <div className="logo">
        <img src={logo} alt="Your Logo" className="h-6 2xl:h-[49px]" />
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#"
              className="text-xs font-raleway text-slate-600 hover:underline 2xl:text-base"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-raleway text-slate-600 hover:underline 2xl:text-base"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xs font-raleway text-slate-600 hover:underline 2xl:text-base"
            >
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
