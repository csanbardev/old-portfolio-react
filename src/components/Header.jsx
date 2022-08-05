
export function Header(){
  return(
    <header>
        <nav className="extra-margin">
          <div className="logo">Cristian Sánchez</div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-button-container">
            <div className="menu-button"></div>
          </label>

          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  )
}