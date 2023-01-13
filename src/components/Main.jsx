import { Banner } from "./Banner"
import { Works } from "./Works"
import '../css/components/contact.css'
import { About } from "./About"
import { Contact } from "./Contact"

export function Main() {
  return (
    <main>
      <About />
      <Works />
      <Contact />
    </main>
  )

}