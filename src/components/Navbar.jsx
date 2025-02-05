import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../store/StoreSlice";

export default function Navbar() {
  const user = useSelector((state) => state.log.user);
  console.log(user.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(LogOut());
    alert("LOG-OUT SUCCESSFULLY!!");
    navigate("/");
  };

  return (
    <div>
      {user.userName != "" ? (
        <>
          <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">
                THRIVE
              </Link>
              <div className="flex items-center space-x-6">
                <Link
                  to="/home"
                  className="hidden md:inline-block hover:text-green-400"
                >
                  HOME
                </Link>
                <Link
                  to="/services"
                  className="hidden md:inline-block hover:text-green-400"
                >
                  SERVICES
                </Link>
                <Link
                  to="/about"
                  className="hidden md:inline-block hover:text-green-400"
                >
                  ABOUT
                </Link>

                <button
                  onClick={handleSubmit}
                  className="hidden md:inline-block hover:text-green-400"
                >
                  LOGOUT
                </button>
                <p>WelCome, {user.userName} !!</p>

                <Link
                  to="/meal"
                  className="hidden md:inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  MEALPLANNER
                </Link>
              </div>
            </nav>
          </header>
        </>
      ) : (
        <>
          <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">
                THRIVE
              </Link>
              <div className="flex items-center space-x-6">
                <Link
                  to="/log"
                  className="hidden md:inline-block hover:text-green-400"
                >
                  LOGIN
                </Link>
              </div>
            </nav>
          </header>
          <div className="mt-20 text-4xl text-green-400 text-center">
            LOGIN TO SEE CONTENT.
          </div>
        </>
      )}
    </div>
  );
}
