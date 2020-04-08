import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Início</Link>
              </li>              
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Cardápio</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/blog`}>Eventos</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>Saiba +</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              Carcará's
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
            <a 
                href="https://api.whatsapp.com/send?phone=5519992094654&text=Olá,%20eu%20gostaria%20de%20fazer%20um%20pedido"
                title="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
              <a
                href="https://www.facebook.com/carcarasbar/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
              Facebook
              </a>                 
              <a
                href="https://www.instagram.com/carcarasbar/"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram                
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Development by {" "}
        <a
          href="http://bit.ly/diogocarcara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diogo Ferreira
        </a>
      </footer>
    </div>
  )
}

export default Layout
