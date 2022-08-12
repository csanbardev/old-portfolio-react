import { Header } from "./Header";
import { Footer } from "./Footer"

export function Contact() {
  return (
    <>
      <Header />
      <section id="contact-area" className="extra-margin">

        <form id="contact-form" action="mailto:cristiansb97@outlook.com" method="post" encType="text/plain">
          <h2>Contact me!</h2>
          <input placeholder='NAME' type='text' required />
          <input placeholder='EMAIL' type='email' required />
          <textarea placeholder='WRITE YOUR MESSAGE' required />
          <section className="contact-area--buttons">
            <button className="btn primary-button" type="submit">Enviar</button>
            <button className="btn primary-button" type="reset">Cancelar</button>
          </section>
          <section id="contact-info">
            <h2>Contact info and links</h2>
            <a href="cristiansb97@outlook.com"><img src="icons/email.svg" />cristiansb97@outlook.com</a>
            <a href="www.linkedin.com/in/cristian-sánchez-barba"><img src="icons/linkedin.svg" />LinkedIn</a>
            <a href="https://github.com/csanbardev"><img src="icons/github.svg" />GitHub</a>
            <a href="https://twitter.com/CristianSBDev"><img src="icons/twitter.svg" />Twitter</a>
          </section>
        </form>

      </section>

      <Footer />
    </>
  )
}