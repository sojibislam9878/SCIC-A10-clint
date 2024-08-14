import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
 const { user } = useAuth();
console.log(user);

 
//  const user= true
//   const normalLink = "lg:font-bold lg:text-lg lg:mr-2 mt-2 lg:mt-0";
//   const activeLink = `bg-gradient-to-r from-[#003366] to-[#003366] border border-blure-500 text-white border-none hover:bg-transparent focus:bg-transparent focus:text-white ${normalLink}`;
  return (
    <div className="sticky top-0 z-40 bg-base-100 shadow-xl ">
      <div className="navbar bg-base-100 container mx-auto p-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div> */}
            {/* <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apartment"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Apartment
                </NavLink>
              </li>
              {!user && (
                <div className="mt-4">
                  <Link to="/login">
                    <button className="btn bg-[#003366] text-white font-bold hover:bg-[#082c50] w-full md:hidden">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </ul> */}
          </div>
          {/* <Link
            to="/"
            className="btn btn-ghost md:text-3xl text-xl font-play text-[#3181d1]"
          >
            Vanguard Estates
          </Link> */}
          <Link to="/">
          <div className="lg:w-2/6 md:w-3/6 ml-4 cursor-pointer">
                <img className="w-[1000px] h-[70px] object-cover" src="https://i.ibb.co/Rjc7pxC/logo.png" alt="" />
              </div>
          </Link>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apartment"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Apartment
              </NavLink>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end flex ">
          {user ? (
            <div className=" flex justify-center gap-2 pr-2 md:pr-0">
              <div className="dropdown dropdown-end mt-1">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-30 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user.photoURL || "https://i.ibb.co/4SrK9pD/profile.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="text-center text-lg font-bold mb-6 mt-3">
                    {user?.displayName}
                  </li>
                  <li>
                    <Link to="/dashboard" className="text-lg mb-4 font-semibold">Dashboard</Link>
                  </li>
                  <li>
                  <button
                // onClick={logout}
                className="btn mt-1 bg-[#003366] text-white font-bold hover:bg-[#072644]"
              >
                Logout
              </button>
                  </li>
                </ul>
              </div>
              
            </div>
          ) : (
            <div className="hidden md:flex">
              <div>
                <Link to="/login">
                  <button className="btn bg-[#003366]  hover:bg-[#0b2641] text-white font-bold">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
