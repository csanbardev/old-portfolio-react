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
            <h2>Contact info</h2>
            <label>+34 798 789 789</label>
            <label>cristiansb97@outlook.com</label>
          </section>
        </form>

      </section>

      <Footer />
    </>
  )
}