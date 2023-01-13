import { Header } from "./Header";
import { Footer } from "./Footer"
import { ContactForm } from "./ContactForm";
import '../css/components/contact.css'

export function Contact() {
  return (
    <div className="extra-margin">
      <h2 className="extra-margin">Contact</h2>
      <section id="contact-area" className="extra-margin">
        <ContactForm />
        <div>
          <span id="contact-separator">or</span>
        </div>
        <article id="contact-info-container">
          <div id="info">
            <span>Cristian Sánchez - web developer</span>
            <span>cristiansb97@outlook.com</span>
          </div>
        </article>
      </section>
    </div>





  )
}