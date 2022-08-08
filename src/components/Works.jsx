import { useState, useEffect } from "react"
import { Project } from "./Project"
import details from '../assets/details.json'

export function Works() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(details.projects)
  }, [])

  const proyectos = details.projects

  return (
    <section id="works">
      {projects.map(project => (
        <Project key={project.id} title={project.title} subtitle={project.shortDescription} link={`project/${project.id}`} />
      ))}
    </section>
  )
}