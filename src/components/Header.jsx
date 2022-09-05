import '../css/components/header.css'
import '../css/components/navigation.css'


export function Header() {
  return (
    <header>
      <nav className="extra-margin">

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-button-container">
          <div className="menu-button"></div>
        </label>

        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="logo">Cristian Sánchez</div>
      </nav>
    </header>
  )
}