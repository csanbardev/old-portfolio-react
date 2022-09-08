import { Header } from "./Header";
import { Footer } from "./Footer";
import '../css/components/about.css'

export function About() {
  return (
    <>
      <Header />
      <section id="about-banner" className="extra-margin">
        <img src="/img/about.svg" />
        <article id="about-banner-description">
          <h2>
            I'm Cristian Sánchez <br />
            Web Developer
          </h2>
          <p>
            ¡Hola, soy Cristian! Mi gran pasión es crear páginas web únicas para todo tipo de usuarios.
            Me enfoco principalmente en darle a mis trabajos un toque minimalista y atractivo que haga destacar
            el contenido de la página.
          </p>
          <p className="last">
            Sobre mí, puedo decir que soy multidisciplinar y que no le temo a los retos. He estudiado anteriormente
            filología hispánica, una carrera que ha cambiado mi forma de ver el mundo. Ahora me dedico de lleno al
            desarrollo web, aunque en un futuro me gustaría unir ambos mundos.
          </p>
          <a className='btn btn-primary' href="/files/cv.pdf" download="Cristia Sánchez Barba CV">Get CV</a>
        </article>


      </section>
      <h2 className="extra-margin">Skills</h2>
      <section className="extra-margin" id="about-skills">
        <section className="skills-front">
          <h3>Frontend</h3>
          <div className="skills-container">
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

          </div>
        </section>
        <section className="skills-back">
          <h3>Backend</h3>
          <div className="skills-container">
            <article>
              <img className='about-skills--icon' src='icons/tecnologies/mysql.svg' />
              <h4>MySQL</h4>
            </article>
            <article>
              <img className='about-skills--icon' src='icons/tecnologies/java.svg' />
              <h4>Java</h4>
            </article>

          </div>

        </section>
        <section className="skills-others">
          <h3>Others</h3>
          <div className="skills-container">
            <article>
              <img className='about-skills--icon' src='icons/tecnologies/vite.svg' />
              <h4>Vite</h4>
            </article>
            <article>
              <img className='about-skills--icon' src='icons/tecnologies/git.svg' />
              <h4>Git</h4>
            </article>
          </div>
        </section>
      </section>

      <Footer />
    </>
  )
}