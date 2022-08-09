import { Header } from "./Header";
import { Footer } from "./Footer";

export function About() {
  return (
    <>
      <Header />
      <section id="about-banner" className="extra-margin">
        <article>
          <h2>
            I'm Cristian Sánchez <br />
            Web Developer
          </h2>
          <p>
            My Passion is to learn more and more about new tecnologies around web development.
            I've studied spanish linguistic and literature also; that gave a new perspective about the world
            and I tried to use it in my projects.
            My main knowledge is frontend, although I've studied SQL, database design and a few NodeJS.
          </p>
        </article>
        <img src="" />

      </section>
      <h2 className="extra-margin">Skills</h2>
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
          <img className='about-skills--icon' src='icons/tecnologies/vite.svg' />
          <h4>Vite</h4>
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
          <img className='about-skills--icon' src='icons/tecnologies/git.svg' />
          <h4>Git</h4>
        </article>
      </section>

      <Footer />
    </>
  )
}