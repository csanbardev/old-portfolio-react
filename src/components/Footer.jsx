
export function Footer() {
  return (
    <footer className="extra-margin">
      <nav id="footer--nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
      <div id="footer--socialMedia">
        <a href="https://github.com/csanbardev"><img src="/icons/github.png"/>GitHub</a>
        <a href="https://www.linkedin.com/in/cristian-sánchez-barba/"><img src="/icons/linkedin.png"/>LinkedIn</a>
        <a href="https://twitter.com/CristianSBDev"><img src="/icons/twitter.png"/>Twitter</a>
      </div>
    </footer>
  )
}