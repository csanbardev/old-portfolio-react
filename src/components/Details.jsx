import { Header } from './Header'
import { Footer } from './Footer'
import { useParams } from 'react-router-dom'
import details from '../assets/details.json'
import '../css/components/details.css'

export function Details(props) {
  const { id } = useParams()
  const project = details.projects.find(element => element.id == id)

  return (
    <>
      <Header />
      <section className='extra-margin'>
        <h1>{project.title}</h1>
        <p>{project.longDescription}</p>

        <h2 id="tools-title">What I've used?</h2>
        <section className='icons-container'>
          {project.tools.map(item => (
            <article key={item.name}>
              <img className='icons-container--icon' src={item.iconLink} />
              <h4>{item.name}</h4>
              <p className='icons-container--description'>{item.description}</p>
            </article>
          ))}
        </section>
        <h2 id='links-title'>Links</h2>
        <section id='links-container'>
          {project.links.map(item => (
            <a href={item.link}><img src={item.iconLink} />{item.link}</a>
          ))}
        </section>
      </section>
      <Footer />
    </>
  )
}