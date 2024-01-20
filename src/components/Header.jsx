const Header = () => {
  return (
    <div className="bg-lightyellow h-20 shadow-md flex items-center justify-around text-darkgreen">
      <a href="/home">
        <h1 className="font-bold text-xl hover:cursor-pointer">
          <span className="text-darkgreen">Hussain</span>
          <span className="text-lightgreen">Estate</span>
        </h1>
      </a>
      <form>
        <div className="relative flex items-center">
          <svg
            className="absolute w-5 h-5 ml-40 hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="darkgreen"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value=""
            className="w-100 h-2 border-0 outline-none rounded-lg focus:outline-none pt-5 pb-5 pl-5"
          />
        </div>
      </form>
      <div className="flex">
        <ul className="flex flex-row justify-between gap-4">
          <li className="hover:text-lightgreen">
            <a href="/home">Home</a>
          </li>
          <li className="hover:text-lightgreen">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-lightgreen">
            <a href="/signin">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
