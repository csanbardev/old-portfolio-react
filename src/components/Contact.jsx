import { Header } from "./Header";
import { Footer } from "./Footer"
import { ContactForm } from "./ContactForm";
import '../css/components/contact.css'

export function Contact() {
  return (
    <div className="extra-margin">
      <section id="contact-area" className="extra-margin">
        <ContactForm />        
      </section>
    </div>


  )
}