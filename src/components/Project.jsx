
export function Project(props) {
  return (
    <article className="card">
      <img className="card-img" src="/img/mis-intereses.png" />
      <div className="card-info extra-margin">
        <h3 className="card-title">{props.title}</h3>
        <h4 className="card-subtitle">{props.subtitle}</h4>
        <div className="card-label-container">
          <span className="card-label">HTML</span>
          <span className="card-label">React</span>
          <span className="card-label">Git</span>
        </div>
        <div className="card-buttons-container">
          <a href={props.link} className="btn btn-primary card-link">Website</a>
          <a href={props.link} className="btn btn-primary card-link">Repo</a>
        </div>

      </div>
    </article>
  )
}

