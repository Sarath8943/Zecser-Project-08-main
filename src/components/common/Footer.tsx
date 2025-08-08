import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import {
  SITE_DESCRIPTION,
  NAV_LINKS,
  ADDRESS,
  SOCIAL_LINKS,
} from "./constants";
import { APP_NAME } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-black w-full text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{APP_NAME}</h2>
          <div className="w-32 h-24 bg-gray-300 flex items-center justify-center text-black font-medium mb-4">
            LOGO
          </div>
          <p className="text-sm leading-relaxed text-gray-100">
            {SITE_DESCRIPTION}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:underline text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="text-sm leading-relaxed text-gray-100">{ADDRESS}</p>
        </div>
      </div>

      <div className="border-t border-gray-400 px-6 py-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} {APP_NAME}
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          {SOCIAL_LINKS.map((social) => {
            const Icon =
              social.icon === "facebook"
                ? FaFacebookF
                : social.icon === "linkedin"
                ? FaLinkedinIn
                : social.icon === "youtube"
                ? FaYoutube
                : FaInstagram;

            return (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
