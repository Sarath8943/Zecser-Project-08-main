import { Link, useLocation, useNavigate } from "react-router-dom";
import { APP_NAME } from "../../utils/constants";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "./constants";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sticky flex top-0 left-0 right-0 items-center justify-between shadow py-[10px] md:py-[15px] px-[20px] bg-background md:px-[50px] lg:px-[70px] z-30">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="w-6 cursor-pointer h-8" asChild>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[250px] sm:w-[300px] flex flex-col justify-between px-[20px]"
          >
            <nav className="flex flex-col gap-4 mt-10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`text-lg transition-colors duration-200 ${
                      isActive
                        ? "text-primary border-b border-primary pb-1"
                        : "text-black hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="text-lg md:text-xl">{APP_NAME}</div>

      <nav className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.label}
              to={link.path}
              className={`text-[14px] transition-colors duration-200 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-black hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      {/* Profile Icon for Admin */}
      {pathname.startsWith('/admin') && (
        <button
          className="ml-4 w-8 h-8 rounded-full bg-green-900 flex items-center justify-center text-white text-lg focus:outline-none"
          onClick={() => navigate('/admin/profile')}
          aria-label="Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
          </svg>
        </button>
      )}
      <div className="w-6 h-6 md:hidden" />
    </div>
  );
};

export default Header;
