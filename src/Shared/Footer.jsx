import React from "react";
import { FaDiscord, FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-neutral  text-neutral-content mt-10">
     <footer className="footer footer-center  rounded p-10">
  <nav className="flex flex-col sm:flex-row gap-4">
    <Link to={'/'} className="link link-hover">Home</Link>
    <Link to={'/apartment'} className="link link-hover">Apartments</Link>
    <Link to={'/contact'} className="link link-hover">Contacts</Link>
  </nav>
  <nav>
    <div className="grid grid-flow-col text-2xl font-medium gap-4">
    <Link to={'https://www.linkedin.com/in/md-habibur-rahman-4bbbbb340/'}>
            <button>
              <FaLinkedin />
            </button>
          </Link>
          <Link to={'https://www.facebook.com/habibur5231'}><button>
            <FaFacebookSquare />
          </button></Link>
         <Link to={'https://github.com/habibur5313'}> <button>
            <FaGithubSquare />
          </button></Link>
          <Link to={'https://discord.com/habibur5231'}><button>
            <FaDiscord />
          </button></Link>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Grand Sultan</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;