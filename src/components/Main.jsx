import { Banner } from "./Banner"
import { Works } from "./Works"

export function Main() {
  return (
    <main>
      <Banner />
      <Works />
      <section className="extra-margin" id="contact">
        <h3 className="text">Want a talk? You're in the right place.</h3>
        <a href="contact" className="btn btn-primary">Get in touch</a>
      </section>
    </main>
  )

}