import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const Navbar = () => {
 const { user , logout} = useAuth();
console.log(user);
const [role]= useRole()
  return (
    <div className="sticky top-0 z-40 bg-base-100 shadow-xl ">
      <div className="navbar bg-base-100 container mx-auto p-4 ">
        <div className="navbar-start">
          <div className="dropdown">
          </div>
          <Link to="/">
          <div className="lg:w-2/6 md:w-2/6 ml-4 cursor-pointer border rounded-lg">
                <img className="w-[1000px] h-[70px] object-contain" src="https://i.ibb.co/TTBYpkM/Screenshot-2024-08-15-211710.png" alt="" />
              </div>
          </Link>
        </div>
       
        <div className="navbar-end flex ">
          {user ? (
            <div className=" flex justify-center gap-2">
              <div className="dropdown dropdown-end mt-1">
                <div
                  tabIndex={0}
                  role="button"
                  className="border border-white rounded-full hover:border-gray-500 duration-200 avatar"
                >
                  <div className="h-16  rounded-full">
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
                  <li className={`${role === "admin" ? "flex" : "hidden"}`}>
                    <Link to="/dashboard" className="text-lg mb-4 font-semibold">Dashboard</Link>
                  </li>
                  <li>
                  <button
                onClick={logout}
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
