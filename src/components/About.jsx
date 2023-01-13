
import '../css/components/about.css'

export function About() {
  return (
    <section id='about-me' className='extra-margin'>
      <section id="about-banner">
        <img src="/img/about.svg" />
        <article id="about-banner-description">
          <h2 className='about-banner-title'>
            I'm Cristian Sánchez <br />
            <span className='tertiary-word'>Web Developer</span>
          </h2>
          <p>
            Mi gran pasión es crear páginas web únicas para todo tipo de usuarios.
            Me enfoco principalmente en darle a mis trabajos un toque minimalista y atractivo que haga destacar
            el contenido de la página.
          </p>
          <a className='btn btn-primary' href="/files/cv.pdf" download="Cristia Sánchez Barba CV">Get CV</a>
        </article>
      </section>

      <h2 id='skills-nav' className="extra-margin">Skills</h2>
      <section className="extra-margin" id="about-skills">
        <article>
          <img className='about-skills--icon' src='icons/tecnologies/html.svg' />
          <h4>HTML</h4>
        </article>
        <article>
          <img className='about-skills--icon' src='icons/tecnologies/css.svg' />
          <h4>CSS</h4>
        </article>
        <article>
          <img className='about-skills--icon' src='icons/tecnologies/javascript.svg' />
          <h4>JavaScript</h4>
        </article>
        <article>
          <img className='about-skills--icon' src='icons/tecnologies/react.svg' />
          <h4>React</h4>
        </article>
        <article>
          <img className='about-skills--icon' src='icons/tecnologies/mysql.svg' />
          <h4>MySQL</h4>
        </article>
        <article>
          <img className='about-skills--icon' src='icons/tecnologies/java.svg' />
          <h4>Java</h4>
        </article>
        <article>
          <img className='about-skills--icon' src='icons/tecnologies/vite.svg' />
          <h4>Vite</h4>
        </article>
        <article>
          <img className='about-skills--icon' src='icons/tecnologies/git.svg' />
          <h4>Git</h4>
        </article>
      </section>
    </section>
  )
}