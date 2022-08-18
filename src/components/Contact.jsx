import { Header } from "./Header";
import { Footer } from "./Footer"
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <>
      <Header />
      <section id="contact-area" className="extra-margin">

        <ContactForm />

      </section>

      <Footer />
    </>
  )
}