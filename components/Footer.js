import React from "react";

const Footer = () => {
    return (
      <a name="f">
        <footer className="text-slate-50 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-slate-50 tracking-widest text-sm mb-3">CONTACT</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-slate-50 hover:text-slate-50">Kheireddine.safi@gmail.com</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-slate-50 tracking-widest text-sm mb-3">RESEAUX</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="https://twitter.com/Kekexflex" className="text-slate-50 hover:text-slate-50">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kyuphotography__/" className="text-slate-50 hover:text-slate-50">Instagram</a>
                </li>
                <li>
                  <a href="https://m.facebook.com/kheireddinesetiff" className="text-slate-50 hover:text-slate-50">FaceBook</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-slate-50 tracking-widest text-sm mb-3">PROFESSIONEL</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="https://www.linkedin.com/in/kheireddine-safi-47b1ba1b2/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr"  className="text-slate-50 hover:text-slate-50">Linkedin</a>
                </li>
                <li>
                  <a  className="text-slate-50 hover:text-slate-50">Kheireddine.safi@gmail.com</a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-slate-50 tracking-widest text-sm mb-3">LOCALISATION</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-slate-50 hover:text-slate-50">Lyon</a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-slate-50">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
             <a href="https://twitter.com/Kekexflex" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Kekexflex</a>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-slate-50">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-slate-50">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-slate-50">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-slate-50">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
      </a>
    )
}

export default Footer;