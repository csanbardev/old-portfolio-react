import { useState, useEffect } from "react"
import { Project } from "./Project"
import details from '../assets/details.json'
import '../css/components/works.css'

export function Works() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(details.projects)
  }, [])

  const proyectos = details.projects

  return (
    <section className="extra-margin" id="works">
      {projects.map(project => (
        <Project key={project.id} img={project.coverImage} title={project.title} subtitle={project.shortDescription} tech={project.tecnologies} links={project.links} />
      ))}
    </section>
  )
}